import axios from "axios";

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

    console.log(sessionStorage.getItem("username"));
    console.log(sessionStorage.getItem("token"));
   

    const response = await axios(`${path}/${sanitizedUrl}`, {
      ...config,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
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
