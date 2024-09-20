import axios from "axios";

import { toast } from "react-toastify";
import { API_URL_LOGIN } from "@/lib/constant";
import {
  cleanCookiesFromSession,
  getErrorTransaction,
  setCookiesLogin,
} from "@/lib/utils";
import { useState } from "react";
import { dictWelcome } from "@/lib/dict";
import { useNavigateRoute } from "../navigate/useNavigateRoute";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useLogin = () => {
  const { navigateToHome } = useNavigateRoute();

  const [isBusy, setBusy] = useState(false);

  const catchError = (error) => {
    setBusy(false);
    getErrorTransaction(error);
  };

  const login = async (credentials) => {
    setBusy(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/${API_URL_LOGIN}`,
        credentials
      );
      const { body } = response.data;
      const { access_token, id, username, admin } = body;
      setCookiesLogin(access_token, username, admin, id);
      navigateToHome();
      toast.success(dictWelcome);
      setBusy(false);
    } catch (error) {
      catchError(error);
      cleanCookiesFromSession();
    } finally {
      setBusy(false);
    }
  };

  return {
    login,
    isBusy,
  };
};
