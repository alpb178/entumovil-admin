import { URL_HOME, URL_LOGIN } from "@/lib/constant";
import { useNavigate } from "react-router-dom";

export const useNavigateRoute = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(URL_HOME);
  };

  const navigateToLogin = () => {
    navigate(URL_LOGIN);
  };

  

  return {
    navigateToHome,
    navigateToLogin,
  };
};