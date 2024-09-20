import axios from "axios";
import { useNavigateRoute } from "../navigate/useNavigateRoute";
import { toast } from "react-toastify";
import { API_URLS_USER_CREATE } from "@/lib/constant";
import {
  getErrorTransaction,
} from "@/lib/utils";
import { useState } from "react";
import { dictRegistPortal } from "@/lib/dict";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useRegister = () => {
  const { navigateToRegisterComplete } = useNavigateRoute();

  const [isBusy, setBusy] = useState(false);

  const catchError = (error) => {
    setBusy(false);
    getErrorTransaction(error);
  };

  const register = async (user, onAftterSucces) => {
    setBusy(true);
    try {
      await axios.post(`${BASE_URL}/${API_URLS_USER_CREATE}`, user);
      navigateToRegisterComplete();
      toast.success(dictRegistPortal);
      setBusy(false);
    } catch (error) {
      catchError(error);
      onAftterSucces?.();
    } finally {
      setBusy(false);
    }
  };

  return {
    register,
    isBusy,
  };
};
