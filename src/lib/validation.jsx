import * as Yup from "yup";
import {
  MESSAGE_INVALID_FORMAT,
  MESSAGE_INVALID_PASSWORD_CHARACTER,
  MESSAGE_REQUIRED,
  MESSAGE_SAME_PASSWORD_DOWCASE,
  MESSAGE_SAME_PASSWORD_SYMBOL,
  MESSAGE_SAME_PASSWORD_UPCASE,
} from "./constant";

export const ValidationSchemaPassoword = Yup.object().shape({
  username: Yup.string()
    .required(MESSAGE_REQUIRED)
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      MESSAGE_INVALID_FORMAT
    ),

  password: Yup.string()
    .required(MESSAGE_REQUIRED)
    .min(8, MESSAGE_INVALID_PASSWORD_CHARACTER)
    .max(8, MESSAGE_INVALID_PASSWORD_CHARACTER)
    .matches(/[a-z]/, MESSAGE_SAME_PASSWORD_DOWCASE)
    .matches(/[A-Z]/, MESSAGE_SAME_PASSWORD_UPCASE)
    .matches(/[^\w]/, MESSAGE_SAME_PASSWORD_SYMBOL),
});
