import { URL_HOME, URL_LOGIN, URL_PROFILE_ADMIN, URL_REGISTER_COMPLETE } from "@/lib/constant";
import { cleanCookiesFromSession } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export const useNavigateRoute = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(URL_HOME);
  };

  const navigateToLogin = () => {
    navigate(URL_LOGIN);
    cleanCookiesFromSession();
  };

  const navigateToRegisterComplete = () => {
    navigate(URL_REGISTER_COMPLETE);
  };

  const navigateToAdmin = () => {
    navigate(URL_PROFILE_ADMIN);
  };

  return {
    navigateToHome,
    navigateToLogin,
    navigateToRegisterComplete,
    navigateToAdmin
  };
};
