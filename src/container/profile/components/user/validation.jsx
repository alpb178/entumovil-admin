import {
  MESSAGE_INVALID_LASTNAME_CHARACTER,
  MESSAGE_INVALID_PHONE_CHARACTER,
  MESSAGE_REQUIRED,
} from "@/lib/constant";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  lastName: Yup.string()
    .required(MESSAGE_REQUIRED)
    .min(2, MESSAGE_INVALID_LASTNAME_CHARACTER)
    .max(40, MESSAGE_INVALID_LASTNAME_CHARACTER),
  phone: Yup.string()
    .min(2, MESSAGE_INVALID_PHONE_CHARACTER)
    .max(10, MESSAGE_INVALID_PHONE_CHARACTER),
});
