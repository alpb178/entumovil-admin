import axios from "axios";

export const apiFetcher = async (url, options = {}) => {
  const sanitizedUrl = url
    .split("/")
    .filter((v) => !!v)
    .join("/");

  const { ...config } = options;

  try {
    let path = "http://localhost:4000";
    if (typeof window === "undefined") {
      path = `http://localhost:4000` + path;
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
