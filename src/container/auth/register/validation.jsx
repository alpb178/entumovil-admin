import { MESSAGE_INVALID_FORMAT, MESSAGE_REQUIRED } from "@/lib/constant";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required(MESSAGE_REQUIRED)
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      MESSAGE_INVALID_FORMAT
    ),
  firstName: Yup.string().required(MESSAGE_REQUIRED),
  lastName: Yup.string().required(MESSAGE_REQUIRED),
  password: Yup.string()
    .required(MESSAGE_REQUIRED)
    .min(8, "La contraseña debe tener 8 caracteres")
    .matches(/^\d/, "La contraseña requiere un número")
    .matches(/[a-z]/, "La contraseña requiere una letra minúscula")
    .matches(/[A-Z]/, "La contraseña requiere una letra mayúscula")
    .matches(/[^\w]/, "La contraseña requiere un símbolo"),

  repeatPassword: Yup.string()
    .required(MESSAGE_REQUIRED)
    .oneOf([Yup.ref("password"), null], "Los Password deben ser iguales"),
});
