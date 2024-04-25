import axios from "axios";
import { useNavigateRoute } from "./useNavigateRoute";
import { toast } from "react-toastify";
import {
  API_URLS_USER_CREATE,
  API_URL_LOGIN,
  API_URL_LOGOUT,
  AUTH_ID,
  AUTH_TOKEN,
  AUTH_USERNAME,
} from "@/lib/constant";
import { apiFetcher } from "@/lib/apiFetcher";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAuth = () => {
  const { navigateToHome, navigateToLogin, navigateToRegisterComplete } =
    useNavigateRoute();

  const getToken = () => {
    return Cookies.get(AUTH_TOKEN);
  };
  const getId = () => {
    return Cookies.get(AUTH_ID);
  };
  const getUsername = () => {
    return Cookies.get(AUTH_USERNAME);
  };
  const logout = async () => {
    try {
      cleanCookies();
      navigateToLogin();
      await apiFetcher(API_URL_LOGOUT);
      toast.success("Sus sesión ha sido cerrada en el Sistema de cuentas");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const cleanCookies = () => {
    Cookies.remove(AUTH_TOKEN);
    Cookies.remove(AUTH_USERNAME);
    Cookies.remove(AUTH_ID);
  };

  const isAuthenticated = !!getToken() && !!getId() && !!getUsername();

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/${API_URL_LOGIN}`,
        credentials
      );
      const { access_token } = response.data;
      Cookies.set(AUTH_TOKEN, access_token);
      Cookies.set(AUTH_USERNAME, credentials.username);
      await userLogged(credentials.username);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const userLogged = async (username) => {
    try {
      const response = await apiFetcher(`api/user/search/${username}`);
      if (response.status == 200) {
        Cookies.set(AUTH_ID, response.data[0].id);
        navigateToHome();
        toast.success("Bienvenido al Sistema de Cuentas");
      } else {
        cleanCookies();
      }
    } catch (error) {
      toast.error(error.message);
      cleanCookies();
    }
  };

  const register = async (user) => {
    try {
      await axios.post(`${BASE_URL}/${API_URLS_USER_CREATE}`, user);
      navigateToRegisterComplete();

      toast.success("Used Ha Sido Registrado en el Sistema de cuentas");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    getToken,
    getId,
    logout,
    login,
    register,
    isAuthenticated,
    getUsername,
    cleanCookies,
  };
};
