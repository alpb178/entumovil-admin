import axios from "axios";
import { useNavigateRoute } from "./useNavigateRoute";
import { toast } from "react-toastify";
import { API_URLS_USER_CREATE, API_URL_LOGIN } from "@/lib/constant";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAuth = () => {
  const { navigateToHome, navigateToLogin, navigateToRegisterComplete } =
    useNavigateRoute();
  const getToken = () => {
    return sessionStorage.getItem("token");
  };
  const getId = () => {
    return sessionStorage.getItem("username");
  };
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    navigateToLogin();
  };

  const isAuthenticated = !!getToken();

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/${API_URL_LOGIN}`,
        credentials
      );
      const { access_token } = response.data;
      sessionStorage.setItem("token", access_token);
      sessionStorage.setItem("username", credentials.username);
      navigateToHome();
      toast.success("Bienvenido al Sistema de Cuentas");
    } catch (error) {
      toast.error(error.message);
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
  };
};
