import { MESSAGE_INVALID_FORMAT, MESSAGE_REQUIRED } from "@/lib/constant";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required(MESSAGE_REQUIRED)
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      MESSAGE_INVALID_FORMAT
    ),
 
    password: Yup.string()
    .required(MESSAGE_REQUIRED)
    .min(8, 'La contraseña insertada debe tener 8 caracteres')
    .matches(/[a-z]/, 'La contraseña insertada requiere una letra minúscula')
    .matches(/[A-Z]/, 'La contraseña insertada requiere una letra mayúscula')
    .matches(/[^\w]/, 'La contraseña insertada requiere un símbolo'),
});
