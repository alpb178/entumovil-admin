import axios from "axios";
import Cookies from "js-cookie";
import { AUTH_TOKEN } from "./constant";
import { cleanCookiesFromSession } from "./utils";
import { toast } from "react-toastify";

export const apiFetcher = async (url, options = {}) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const sanitizedUrl = url
    .split("/")
    .filter((v) => !!v)
    .join("/");

  const { ...config } = options;

  try {
    let path = BASE_URL;
    if (typeof window === "undefined") {
      path = BASE_URL + path;
    }

    const response = await axios(`${path}/${sanitizedUrl}`, {
      ...config,
      headers: {
        Authorization: "Bearer " + Cookies.get(AUTH_TOKEN),
      },
    });

    if (response.data === null) {
      response.data = null;
      cleanCookiesFromSession();
    }

    return response;
  } catch (error) {
    if (error?.response?.status === 401) {
      cleanCookiesFromSession();
      toast.error("Su sessión ha expirado");

      throw new Error("Session expired");
    }
    throw error;
  }
};
