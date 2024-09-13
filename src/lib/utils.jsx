import Cookies from "js-cookie";
import { AUTH_ADMIN, AUTH_ID, AUTH_TOKEN, AUTH_USERNAME } from "./constant";
import { toast } from "react-toastify";

export const cleanCookiesFromSession = () => {
  Cookies.remove(AUTH_TOKEN);
  Cookies.remove(AUTH_USERNAME);
  Cookies.remove(AUTH_ID);
  Cookies.remove(AUTH_ADMIN);
};

export const getErrorTransaction = (error) => {
  const status = getStatus(error);
  switch (status.toString()) {
    case "206":
      return toast.error("Email no verificado.");
    case "401":
      return toast.error("Credenciales Inválidas.");
    case "403":
      return toast.error("No tiene permisos. Intente de nuevo o contacte con la administración.");
    case "406":
      return toast.error("Dirección de correo no válida.");
    case "409":
      return toast.error("Usuario registrado.");
    case "412":
      return toast.error("Número de telefóno registrado.");
    case "423":
      return toast.error("Usuario deshabilitado.");
    case "400":
    case "404":
    case "500":
    case "502":
    case "503":
      return toast.error("Ha ocurrido un error con la red. Intente de nuevo.");
    default:
      return toast.error(
        "Ha ocurrido un error. Contacte con la administración."
      );
  }
};

export const checkIfJSONisEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const getToken = () => {
  return Cookies.get(AUTH_TOKEN);
};
export const getId = () => {
  return Cookies.get(AUTH_ID);
};
export const getUsername = () => {
  return Cookies.get(AUTH_USERNAME);
};

export const getAdmin = () => {
  return Cookies.get(AUTH_ADMIN);
};

const extractError = (error) => {
  return error.toString().substr(7, 9);
};

const getStatus = (error) => {
  if (error?.response?.status) return error?.response?.status;
  if (
    error?.request &&
    (error?.request["status"] || error?.request["status"] === 0)
  )
    return error?.request["status"];
  return extractError(error);
};

export const setCookiesLogin = (access_token, username, admin, id) => {
  Cookies.set(AUTH_TOKEN, access_token);
  Cookies.set(AUTH_USERNAME, username);
  Cookies.set(AUTH_ADMIN, admin);
  Cookies.set(AUTH_ID, id);
};
