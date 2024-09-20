import { useNavigateRoute } from "../navigate/useNavigateRoute";
import { toast } from "react-toastify";
import { API_URL_LOGOUT } from "@/lib/constant";
import { apiFetcher } from "@/lib/apiFetcher";
import { cleanCookiesFromSession, getErrorTransaction } from "@/lib/utils";
import { useState } from "react";
import { dictCloseSession } from "@/lib/dict";

export const useLogout = () => {
  const { navigateToLogin } = useNavigateRoute();

  const [isBusy, setBusy] = useState(false);

  const catchError = (error) => {
    setBusy(false);
    getErrorTransaction(error);
  };

  const logout = async () => {
    setBusy(true);
    try {
      await apiFetcher(API_URL_LOGOUT);
      cleanCookiesFromSession();
      setBusy(false);
      navigateToLogin();
      toast.success(dictCloseSession);
    } catch (error) {
      catchError(error);
      navigateToLogin();
    } finally {
      setBusy(false);
    }
  };

  return {
    logout,
    isBusy,
  };
};
