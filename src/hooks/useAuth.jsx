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
import { getErrorTransaction } from "@/lib/utils";
import { useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAuth = () => {
  const { navigateToHome, navigateToLogin, navigateToRegisterComplete } =
    useNavigateRoute();

  const [isBusy, setBusy] = useState(false);

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
    setBusy(true);
    try {
      await apiFetcher(API_URL_LOGOUT);
      cleanCookies();
      setBusy(false);
      navigateToLogin();
      toast.success("Su sesión ha sido cerrada en el Portal de cuentas");
    } catch (error) {
      setBusy(false);
      toast.error(getErrorTransaction(error.status));
    } finally {
      setBusy(false);
    }
  };

  const cleanCookies = () => {
    Cookies.remove(AUTH_TOKEN);
    Cookies.remove(AUTH_USERNAME);
    Cookies.remove(AUTH_ID);
  };

  const isAuthenticated = !!getToken() && !!getId() && !!getUsername();

  const login = async (credentials) => {
    setBusy(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/${API_URL_LOGIN}`,
        credentials
      );
      const { access_token } = response.data;
      Cookies.set(AUTH_TOKEN, access_token);
      Cookies.set(AUTH_USERNAME, credentials.username);
      await userLogged(credentials.username);
      setBusy(false);
    } catch (error) {
      setBusy(false);
      toast.error(getErrorTransaction(error.status));
    } finally {
      setBusy(false);
    }
  };

  const userLogged = async (username) => {
    setBusy(true);
    try {
      const response = await apiFetcher(`api/user/search/${username}`);
      if (response.status == 200) {
        Cookies.set(AUTH_ID, response.data[0].id);
        setBusy(false);
        navigateToHome();
        toast.success("Bienvenido al Portal de Cuentas");
      } else {
        setBusy(false);
        cleanCookies();
      }
    } catch (error) {
      setBusy(false);
      toast.error(getErrorTransaction(error.status));
      cleanCookies();
    } finally {
      setBusy(false);
    }
  };

  const register = async (user) => {
    setBusy(true);
    try {
      await axios.post(`${BASE_URL}/${API_URLS_USER_CREATE}`, user);
      navigateToRegisterComplete();
      toast.success("Used Ha Sido Registrado en el Portal de cuentas");
      setBusy(false);
    } catch (error) {
      setBusy(false);
      toast.error(getErrorTransaction(error.status));
    } finally {
      setBusy(false);
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
    isBusy,
  };
};
