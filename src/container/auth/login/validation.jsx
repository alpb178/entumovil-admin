
import { validationEmail, validationRequired } from "@/lib/validation";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  username: validationEmail,

  password: validationRequired,
});
