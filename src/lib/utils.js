import Cookies from "js-cookie";
import { apiFetcher } from "./apiFetcher";
import { AUTH_ID, AUTH_TOKEN, AUTH_USERNAME } from "./constant";

export const userRegisterd = async () => {
  try {
    const response = await apiFetcher("api/user/search/alpb17.08@gmail.com");

    if (response.status == 200) {
      sessionStorage.setItem("user", response);
      return true;
    } else {
      sessionStorage.setItem("user", "");
      return false;
    }
  } catch (error) {
    sessionStorage.setItem("user", "");
    return false;
  }
};

export const cleanCookiesFromSession = () => {
  Cookies.remove(AUTH_TOKEN);
  Cookies.remove(AUTH_USERNAME);
  Cookies.remove(AUTH_ID);
};

export const getError = (error) => {
  switch (error) {
    case "ERR_NETWORK":
      cleanCookiesFromSession();
      return "Su sessión ha sido cerrada";

    case "ERR_BAD_REQUEST":
      return "Ha ocurrido un error con la red. Intente de nuevo";

    default:
      return "Ha ocurrido un error. Contacte con la administración";
  }
};
