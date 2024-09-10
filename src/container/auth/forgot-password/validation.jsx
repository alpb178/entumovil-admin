import { validationEmail } from "@/lib/validation";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  email: validationEmail,
});
