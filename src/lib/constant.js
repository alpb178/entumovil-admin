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
export const URL_PROFILE_USER = "/profile/user/:id";
export const URL_PROFILE_EDIT_ADMIN = "/profile/edit/:id";

//  Forms
export const MESSAGE_REQUIRED = "campo requerido";
export const MESSAGE_INVALID_FORMAT = "formato incorrecto";
export const API_URL = "api";
export const API_AUTH_URL = `${API_URL}/auth`;
export const API_URL_LOGIN = `${API_AUTH_URL}/login`;
export const API_URL_REGISTER = `${API_AUTH_URL}/register`;

// Users
export const API_URLS_USERS = `${API_URL}/user`;
export const API_URLS_USERS_LIST = `${API_URLS_USERS}/search`;
export const API_URLS_USER_DELETE = `${API_URLS_USERS}/delete`;
export const API_URLS_USER_CREATE = `${API_URLS_USERS}/create`;
export const API_URLS_USER_UPDATE = `${API_URLS_USERS}/update`;
