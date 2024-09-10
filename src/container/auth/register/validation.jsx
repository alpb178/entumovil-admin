import {
  validationEmail,
  validationFirstName,
  validationLastName,
  validationPassword,
  validationPhone,
  validationRepeatPassword,
} from "@/lib/validation";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  email: validationEmail,
  firstName: validationFirstName,
  lastName: validationLastName,
  password: validationPassword,
  repeatPassword: validationRepeatPassword,
  phone: validationPhone,
});
