import { MESSAGE_INVALID_FORMAT, MESSAGE_REQUIRED } from "@/lib/constant";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  email: Yup.string().required(MESSAGE_REQUIRED).email(MESSAGE_INVALID_FORMAT),
  phone: Yup.string().required(MESSAGE_REQUIRED),
  lastName: Yup.string().required(MESSAGE_REQUIRED),
  password: Yup.string().required(MESSAGE_REQUIRED),
  repeatPassword: Yup.string().required(MESSAGE_REQUIRED).oneOf(
    [Yup.ref("password"), null],
    "Los Password deben ser iguales"
  ),
});
