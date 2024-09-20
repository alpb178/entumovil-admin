import { URL_LOGIN } from "@/lib/constant";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { cleanCookiesFromSession } from "@/lib/utils";
import { useAuth } from "../useAuth";

export const useNavigateLogin = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const navigateToLogin = () => {
    navigate(URL_LOGIN);
    cleanCookiesFromSession();
  };

  useEffect(() => {
    if (!isAuthenticated) navigateToLogin();
  }, [isAuthenticated]);
};
