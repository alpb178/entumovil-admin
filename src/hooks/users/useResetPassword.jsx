import axios from "axios";
import { useNavigateRoute } from "../navigate/useNavigateRoute";
import { toast } from "react-toastify";
import {
  API_RESET_PASSWORD,
} from "@/lib/constant";
import {
  cleanCookiesFromSession,
  getErrorTransaction,
} from "@/lib/utils";
import { useState } from "react";
import {
  dictResetEmail,
} from "@/lib/dict";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useResetPassword = () => {
  const { navigateToLogin } = useNavigateRoute();

  const [isBusy, setBusy] = useState(false);

  const catchError = (error) => {
    setBusy(false);
    getErrorTransaction(error);
  };

  const resetPassword = async (username) => {
    setBusy(true);
    try {
      await axios.post(`${BASE_URL}/${API_RESET_PASSWORD}/${username}`);
      toast.success(dictResetEmail);
      navigateToLogin();
    } catch (error) {
      catchError(error);
      cleanCookiesFromSession();
    } finally {
      setBusy(false);
    }
  };

  return {
    resetPassword,
    isBusy,
  };
};
