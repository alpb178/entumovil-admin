import { validationLastName, validationPhone } from "@/lib/validation";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  lastName: validationLastName,
  phone: validationPhone,
});
