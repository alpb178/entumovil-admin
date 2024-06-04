import { URL_HOME, URL_LOGIN, URL_REGISTER_COMPLETE } from "@/lib/constant";
import { useNavigate } from "react-router-dom";

export const useNavigateRoute = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(URL_HOME);
  };

  const navigateToLogin = () => {
    navigate(URL_LOGIN);
  };

  const navigateToRegisterComplete = () => {
    navigate(URL_REGISTER_COMPLETE);
  };

  return {
    navigateToHome,
    navigateToLogin,
    navigateToRegisterComplete,
  };
};
