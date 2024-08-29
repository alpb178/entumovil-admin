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
  } catch {
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
      return getErrorTransaction("Su sessión ha sido cerrada");

    case "ERR_BAD_REQUEST":
      return "Ha ocurrido un error con la red. Intente de nuevo";

    default:
      return "Ha ocurrido un error. Contacte con la administración";
  }
};

export const getErrorTransaction = (status) => {
  switch (status) {
    case 206:
      return "Email no verificado";
    case 401:
      return "Credenciales Inválidas";
    case 400:
      return "Ha ocurrido un error con la red. Intente de nuevo";
    case 404:
      return "Ha ocurrido un error con la red. Intente de nuevo";
    case 406:
      return "Dirección de correo no válida";
    case 409:
      return "Usuario existente";
    case 423:
      return "Usuario deshabilitado";
    case 500:
      return "Ha ocurrido un error con la red. Intente de nuevo";
    case 502:
      return "Error de Servidor";
    case 503:
      return "Servidor de autenticación";
    default:
      return "Ha ocurrido un error. Contacte con la administración";
  }
};

export const checkIfJSONisEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
