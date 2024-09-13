import axios from "axios";
import { useNavigateRoute } from "./useNavigateRoute";
import { toast } from "react-toastify";
import {
  API_RESET_PASSWORD,
  API_URLS_USER_CREATE,
  API_URL_LOGIN,
  API_URL_LOGOUT,
} from "@/lib/constant";
import { apiFetcher } from "@/lib/apiFetcher";
import {
  cleanCookiesFromSession,
  getAdmin,
  getErrorTransaction,
  getId,
  getToken,
  getUsername,
  setCookiesLogin,
} from "@/lib/utils";
import { useState } from "react";
import {
  dictCloseSession,
  dictRegistPortal,
  dictResetEmail,
  dictWelcome,
} from "@/lib/dict";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useAuth = () => {
  const { navigateToHome, navigateToLogin, navigateToRegisterComplete } =
    useNavigateRoute();

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

  const register = async (user) => {
    setBusy(true);
    try {
      await axios.post(`${BASE_URL}/${API_URLS_USER_CREATE}`, user);
      navigateToRegisterComplete();
      toast.success(dictRegistPortal);
      setBusy(false);
    } catch (error) {
      catchError(error);
    } finally {
      setBusy(false);
    }
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
    getToken,
    logout,
    login,
    register,
    isAuthenticated: !!getToken() && !!getId() && !!getUsername(),
    username: getUsername(),
    isAdmin: getAdmin(),
    id: getId(),
    isBusy,
    resetPassword,
  };
};
