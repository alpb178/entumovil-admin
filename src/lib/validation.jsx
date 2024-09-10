import * as Yup from "yup";
import {
  MESSAGE_INVALID_FIRSTNAME_CHARACTER,
  MESSAGE_INVALID_FORMAT,
  MESSAGE_INVALID_LASTNAME_CHARACTER,
  MESSAGE_INVALID_PASSWORD_CHARACTER,
  MESSAGE_INVALID_PHONE_CHARACTER,
  MESSAGE_REQUIRED,
  MESSAGE_SAME_PASSWORD_CHARACTER,
  MESSAGE_SAME_PASSWORD_DOWCASE,
  MESSAGE_SAME_PASSWORD_SYMBOL,
  MESSAGE_SAME_PASSWORD_UPCASE,
  regexEmail,
} from "./constant";

export const ValidationSchemaPassoword = Yup.object().shape({
  password: Yup.string()
    .required(MESSAGE_REQUIRED)
    .min(8, MESSAGE_INVALID_PASSWORD_CHARACTER)
    .max(128, MESSAGE_INVALID_PASSWORD_CHARACTER)
    .matches(/[a-z]/, MESSAGE_SAME_PASSWORD_DOWCASE)
    .matches(/[A-Z]/, MESSAGE_SAME_PASSWORD_UPCASE)
    .matches(/[^\w]/, MESSAGE_SAME_PASSWORD_SYMBOL),

  repeatPassword: Yup.string()
    .required(MESSAGE_REQUIRED)
    .oneOf([Yup.ref("password"), null], MESSAGE_SAME_PASSWORD_CHARACTER),
});

export const validationEmail = Yup.string()
  .required(MESSAGE_REQUIRED)
  .matches(regexEmail, MESSAGE_INVALID_FORMAT);

export const validationFirstName = Yup.string()
  .required(MESSAGE_REQUIRED)
  .min(2, MESSAGE_INVALID_FIRSTNAME_CHARACTER)
  .max(20, MESSAGE_INVALID_FIRSTNAME_CHARACTER);

export const validationLastName = Yup.string()
  .required(MESSAGE_REQUIRED)
  .min(2, MESSAGE_INVALID_LASTNAME_CHARACTER)
  .max(40, MESSAGE_INVALID_LASTNAME_CHARACTER);

export const validationPassword = Yup.string()
  .required(MESSAGE_REQUIRED)
  .min(8, MESSAGE_INVALID_PASSWORD_CHARACTER)
  .max(128, MESSAGE_INVALID_PASSWORD_CHARACTER)
  .matches(/[a-z]/, MESSAGE_SAME_PASSWORD_DOWCASE)
  .matches(/[A-Z]/, MESSAGE_SAME_PASSWORD_UPCASE)
  .matches(/[^\w]/, MESSAGE_SAME_PASSWORD_SYMBOL);

export const validationRepeatPassword = Yup.string()
  .required(MESSAGE_REQUIRED)
  .oneOf([Yup.ref("password"), null], MESSAGE_SAME_PASSWORD_CHARACTER);

export const validationPhone = Yup.string()
  .min(2, MESSAGE_INVALID_PHONE_CHARACTER)
  .max(10, MESSAGE_INVALID_PHONE_CHARACTER);

export const validationRequired = Yup.string().required(MESSAGE_REQUIRED);
