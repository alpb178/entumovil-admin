import * as Yup from "yup";
import {
  MESSAGE_INVALID_PASSWORD_CHARACTER,
  MESSAGE_REQUIRED,
  MESSAGE_SAME_PASSWORD_CHARACTER,
  MESSAGE_SAME_PASSWORD_DOWCASE,
  MESSAGE_SAME_PASSWORD_SYMBOL,
  MESSAGE_SAME_PASSWORD_UPCASE,
} from "./constant";

export const ValidationSchemaPassoword = Yup.object().shape({
  password: Yup.string()
    .required(MESSAGE_REQUIRED)
    .min(8, MESSAGE_INVALID_PASSWORD_CHARACTER)
    .max(8, MESSAGE_INVALID_PASSWORD_CHARACTER)
    .matches(/[a-z]/, MESSAGE_SAME_PASSWORD_DOWCASE)
    .matches(/[A-Z]/, MESSAGE_SAME_PASSWORD_UPCASE)
    .matches(/[^\w]/, MESSAGE_SAME_PASSWORD_SYMBOL),

  repeatPassword: Yup.string()
    .required(MESSAGE_REQUIRED)
    .oneOf([Yup.ref("password"), null], MESSAGE_SAME_PASSWORD_CHARACTER),
});
