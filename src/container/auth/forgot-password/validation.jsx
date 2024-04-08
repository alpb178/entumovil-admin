import { MESSAGE_INVALID_FORMAT, MESSAGE_REQUIRED } from "@/lib/constant";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  email: Yup.string().required(MESSAGE_REQUIRED).email(MESSAGE_INVALID_FORMAT),
});
