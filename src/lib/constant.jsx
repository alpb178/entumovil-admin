export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";
export const GET = "GET";

// Routes
export const URL_HOME = "/";
export const URL_LOGIN = "/login";
export const URL_FORGOT_PASSWORD = "/forgot-password";
export const URL_REGISTER = "/register";
export const URL_REGISTER_COMPLETE = `/register-complete`;
export const URL_PROFILE_ADMIN = "/profile/admin";
export const URL_PROFILE_USER = "/profile/user";
export const URL_PROFILE_EDIT_ADMIN = "/profile/edit/:id";

//  Forms
export const MESSAGE_REQUIRED = "Campo requerido";

export const MESSAGE_INVALID_FORMAT = "Formato incorrecto";
export const MESSAGE_INVALID_PASSWORD =
  "Debe contener al menos 8 carácteres: una mayúscula, una minúscula, un número y un carácter de caso especial";
export const MESSAGE_SUCCES_PASSWORD_FORMAT = "Password editado con éxito";
export const MESSAGE_SUCCES_USER_FORMAT = "Usuario editado con éxito";
export const MESSAGE_ERROR_FORMAT = "Ha ocurrido un error:";
export const MESSAGE_ERROR_ADMIN =
  "En caso de duda contacte con el administrador";

///
export const API_URL = "api";
export const API_AUTH_URL = `${API_URL}/auth`;
export const API_URL_LOGIN = `${API_AUTH_URL}/login`;
export const API_URL_REGISTER = `${API_AUTH_URL}/register`;
export const API_URL_LOGOUT = `${API_AUTH_URL}/logout`;

// Users
export const API_URLS_USERS = `${API_URL}/user`;
export const API_URLS_USERS_LIST = `${API_URLS_USERS}/search`;
export const API_URLS_USER_DELETE = `${API_URLS_USERS}/delete`;
export const API_URLS_USER_CREATE = `${API_URLS_USERS}/create`;
export const API_URLS_USER_UPDATE = `${API_URLS_USERS}/update`;
export const API_URLS_USER_CHANGE_PASS = `${API_URLS_USERS}/changePass`;

// Roles
export const API_URLS_ROLES_LIST = `${API_URLS_USERS_LIST}/roles`;
export const API_URLS_ROLES_DELETE = `${API_URLS_USERS}/deleteRoleUser`;
export const API_URLS_ADD_ROLE = `${API_URLS_USERS}/addRoleUser`;

//Cookies
export const AUTH_TOKEN = "authToken";
export const AUTH_USERNAME = "authUsername";
export const AUTH_ID = "authId";

export const ROLE='default-roles-entumovil-prod'
