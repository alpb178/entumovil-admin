import { MESSAGE_REQUIRED } from "@/lib/constant";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  lastName: Yup.string().required(MESSAGE_REQUIRED),
});
