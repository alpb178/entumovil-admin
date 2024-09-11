import axios from "axios";
import { useNavigateRoute } from "./useNavigateRoute";
import { toast } from "react-toastify";
import {
  API_RESET_PASSWORD,
  API_URLS_USERS_LIST,
  API_URLS_USER_CREATE,
  API_URL_LOGIN,
  API_URL_LOGOUT,
  AUTH_ID,
  AUTH_TOKEN,
  AUTH_USERNAME,
} from "@/lib/constant";
import { apiFetcher } from "@/lib/apiFetcher";
import Cookies from "js-cookie";
import {
  cleanCookiesFromSession,
  getErrorTransaction,
  getId,
  getToken,
  getUsername,
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
    toast.error(getErrorTransaction(error?.response?.status));
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
      const { access_token } = body;
      Cookies.set(AUTH_TOKEN, access_token);
      Cookies.set(AUTH_USERNAME, credentials.username);
      await userLogged(credentials.username);
      setBusy(false);
    } catch (error) {
      catchError(error)
    } finally {
      setBusy(false);
    }
  };

  const userLogged = async (username) => {
    setBusy(true);
    try {
      const response = await apiFetcher(`${API_URLS_USERS_LIST}/${username}`);
      if (response.status == 200) {
        Cookies.set(AUTH_ID, response.data[0].id);
        setBusy(false);
        navigateToHome();
        toast.success(dictWelcome);
      } else {
        setBusy(false);
        cleanCookiesFromSession();
      }
    } catch (error) {
      catchError(error)
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
      catchError(error)
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
      catchError(error)
      cleanCookiesFromSession();
    } finally {
      setBusy(false);
    }
  };

  return {
    getToken,
    getId,
    logout,
    login,
    register,
    isAuthenticated: !!getToken() && !!getId() && !!getUsername(),
    getUsername,
    isBusy,
    resetPassword,
  };
};
