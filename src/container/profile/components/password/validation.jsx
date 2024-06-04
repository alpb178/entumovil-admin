import { MESSAGE_INVALID_FORMAT, MESSAGE_REQUIRED } from "@/lib/constant";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  password: Yup.string().required(MESSAGE_REQUIRED),
  repeatPassword: Yup.string()
    .required(MESSAGE_REQUIRED)
    .oneOf([Yup.ref("password"), null], "Los Password deben ser iguales"),
});
