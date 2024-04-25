import axios from "axios";
import Cookies from "js-cookie";
import { AUTH_TOKEN } from "./constant";
import { cleanCookiesFromSession, getError } from "./utils";
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
    throw new Error(getError(error?.code));
  }
};
