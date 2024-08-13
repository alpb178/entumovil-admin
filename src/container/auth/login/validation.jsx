import {
  MESSAGE_INVALID_FORMAT,
  MESSAGE_REQUIRED,
  regexEmail,
} from "@/lib/constant";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required(MESSAGE_REQUIRED)
    .matches(regexEmail, MESSAGE_INVALID_FORMAT),

  password: Yup.string().required(MESSAGE_REQUIRED),
});
