import axios from "axios";
import { useNavigateRoute } from "./useNavigateRoute";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAuth = () => {
  const { navigateToHome, navigateToLogin } = useNavigateRoute();
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
        `${BASE_URL}/api/auth/login`,
        credentials
      );
      const { token } = response.data;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", credentials.username);
      navigateToHome();
      toast.success("Bienvenido al Sistema de Cuentas");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    getToken,
    getId,
    logout,
    login,
    isAuthenticated,
  };
};
