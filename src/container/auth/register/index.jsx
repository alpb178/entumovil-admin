import { ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { Form, Formik } from "formik";
import { ValidationSchema } from "./validation";
import { PasswordField } from "@/component/field/PassworField";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import { PhoneInputField } from "@/component/field/PhoneField";
import { LogoEntuMovil } from "@/component/logo/logo";
import { checkIfJSONisEmpty, getErrorTransaction } from "@/lib/utils";
import { AuthBottomBar } from "@/component/bottombar/bottombar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { URL_TERM_CONDITIONS } from "@/lib/constant";
import { Input } from "@material-tailwind/react";
import { Captcha } from "@/component/captcha";

export function RegisterForm() {
  const initialValues = {
    email: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    phone: "",
  };

  const { register, isBusy } = useAuth();

  const [checked, setChecked] = useState(false);
  const handleChange = async () => {
    setChecked(!checked);
  };

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaVerify = (isVerified) => {
    console.log(captchaVerified);
    setCaptchaVerified(isVerified);
  };

  const handleSubmit = (values) => {
    try {
      register({
        username: values.email,
        email: values.email,
        firstname: values.phone ?? "-",
        lastname: `${values?.firstName} ${values.lastName}`,
        password: values.password,
      });
    } catch (error) {
      toast.error(getErrorTransaction(error.status));
    }
  };
  return (
    <div>
      <LogoEntuMovil />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="mt-1 flex flex-col items-center justify-center space-y-10">
            <div className="space-y-6">
              <InputField
                type="text"
                name="email"
                error={errors.email}
                placeholder="Inserte correo electrónico"
                label="Correo electrónico*"
              />

              <InputField
                type="text"
                error={errors.firstName}
                name="firstName"
                label="Nombre*"
                placeholder="Insertar nombre*"
              />

              <InputField
                type="text"
                error={errors.lastName}
                name="lastName"
                label="Apellidos*"
                placeholder="Insertar apellidos"
              />
              <PhoneInputField
                label="Teléfono"
                name="phone"
                error={errors.phone}
              />
              <PasswordField
                name="password"
                error={errors.password}
                label="Contraseña*"
                placeholder="Insertar contraseña"
              />

              <PasswordField
                name="repeatPassword"
                label="Confirmar contraseña*"
                error={errors.repeatPassword}
                placeholder="Insertar confirmación de la contraseña"
              />

              <div className=" flex flex-row justify-center">
                <div>
                  <Input
                    type="checkbox"
                    checked={checked}
                    className="h-6 w-10 rounded border-gray-300 bg-gray-100"
                    onChange={(e) => {
                      e.stopPropagation();
                      handleChange();
                    }}
                  />
                </div>

                <div className="mr-8">
                  <Link
                    to={URL_TERM_CONDITIONS}
                    className="hover:text-primary-dark ml-2 font-medium text-gray-700 duration-200 ease-in-out hover:text-primary-500"
                    prefetch={false}
                  >
                    Aceptar términos y condiciones
                  </Link>
                </div>
              </div>

              <div className=" flex flex-row justify-center">
                <Captcha onVerify={handleCaptchaVerify} />
              </div>
              <div className="-mt-6 flex justify-center">
                <ButtonSubmit
                  type="submit"
                  disabled={!checkIfJSONisEmpty(errors) || !checked}
                  name={isBusy ? "Cargando" : "Registrar"}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <AuthBottomBar />
    </div>
  );
}
