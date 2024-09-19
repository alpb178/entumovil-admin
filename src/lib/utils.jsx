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
      return toast.error("El correo electrónico no ha sido verificado.");
    case "401":
      return toast.error("Credenciales inválidas.");
    case "403":
      return toast.error(
        "No tiene permisos para realizar esta acción. Intente nuevamente o contacte con el administrador."
      );
    case "406":
      return toast.error("La dirección de correo electrónico no es válida.");
    case "409":
      return toast.error("El usuario ya existe.");
    case "412":
      return toast.error("El número de teléfono ya está registrado.");
    case "423":
      return toast.error("El usuario está deshabilitado.");
    case "400":
    case "404":
    case "500":
    case "502":
    case "503":
      return toast.error(
        "Ha ocurrido un error de red. Por favor, intente nuevamente."
      );
    default:
      return toast.error(
        "Ha ocurrido un error inesperado. Contacte con el administrador."
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
  Cookies.set(AUTH_ADMIN, admin ? "admin" : "user");
  Cookies.set(AUTH_ID, id);
};
