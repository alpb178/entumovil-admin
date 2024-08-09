import {
  MESSAGE_INVALID_FORMAT,
  MESSAGE_INVALID_PASSWORD_CHARACTER,
  MESSAGE_REQUIRED,
  MESSAGE_SAME_PASSWORD_DOWCASE,
  MESSAGE_SAME_PASSWORD_SYMBOL,
  MESSAGE_SAME_PASSWORD_UPCASE,
  regexEmail,
} from "@/lib/constant";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required(MESSAGE_REQUIRED)
    .matches(regexEmail, MESSAGE_INVALID_FORMAT),

  password: Yup.string()
    .required(MESSAGE_REQUIRED)
    .min(8, MESSAGE_INVALID_PASSWORD_CHARACTER)
    .max(8, MESSAGE_INVALID_PASSWORD_CHARACTER)
    .matches(/[a-z]/, MESSAGE_SAME_PASSWORD_DOWCASE)
    .matches(/[A-Z]/, MESSAGE_SAME_PASSWORD_UPCASE)
    .matches(/[^\w]/, MESSAGE_SAME_PASSWORD_SYMBOL),
});
