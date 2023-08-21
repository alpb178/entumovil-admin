import axios from "axios";

export const apiFetcher = async (url, options = {}, api) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const BASE_URL_II = import.meta.env.VITE_BASE_URL_II;
  const sanitizedUrl = url
    .split("/")
    .filter((v) => !!v)
    .join("/");

  const { ...config } = options;

  try {
    let path = api ? BASE_URL_II : BASE_URL;
    if (typeof window === "undefined") {
      path = api ? BASE_URL_II : BASE_URL + path;
    }

    const response = await axios(`${path}/${sanitizedUrl}`, {
      ...config,
    });

    if (response.data === null) {
      response.data = null;
    }

    return response;
  } catch (error) {
    if (error?.response?.status === 401) {
      throw new Error("Session expired");
    }
    throw error;
  }
};
