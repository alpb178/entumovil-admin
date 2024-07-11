import {MESSAGE_REQUIRED } from "@/lib/constant";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required(MESSAGE_REQUIRED)
    .min(8, 'La contraseña debe tener 8 caracteres')
    .matches(/[0-9]/, 'La contraseña requiere un número')
    .matches(/[a-z]/, 'La contraseña requiere una letra minúscula')
    .matches(/[A-Z]/, 'La contraseña requiere una letra mayúscula')
    .matches(/[^\w]/, 'La contraseña requiere un símbolo'),
    
  repeatPassword: Yup.string()
    .required(MESSAGE_REQUIRED)
    .oneOf([Yup.ref("password"), null], "Los Password deben ser iguales")
});
