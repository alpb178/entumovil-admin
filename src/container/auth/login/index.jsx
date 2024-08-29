import { ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { PasswordField } from "@/component/field/PassworField";
import { Form, Formik } from "formik";
import { ValidationSchema } from "./validation";
import { useAuth } from "@/hooks/useAuth";
import { checkIfJSONisEmpty, getErrorTransaction } from "@/lib/utils";
import { AuthBottomBar } from "@/component/bottombar/bottombar";
import { LogoEntuMovil } from "@/component/logo/logo";

import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { URL_FORGOT_PASSWORD } from "@/lib/constant";

export function Login() {
  const initialValues = {
    username: "",
    password: "",
  };

  const { login, isBusy } = useAuth();

  const handleSubmit = async (values) => {
    try {
      login(values);
    } catch (error) {
      toast.error(getErrorTransaction(error?.response?.status));
    }
  };

  return (
    <div>
      <LogoEntuMovil isLogin={true} />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="m-5 mt-10 flex flex-col items-center justify-center space-y-10">
            <div className="space-y-6  ">
              <InputField
                type="text"
                name="username"
                error={errors.username}
                placeholder="Inserte correo electrónico"
                label="Correo electrónico*"
              />

              <PasswordField
                name="password"
                placeholder="Insertar contraseña"
                label="Contraseña*"
                error={errors.password}
              />
            </div>

            <div className=" flex flex-col justify-center">
              <Link
                to={URL_FORGOT_PASSWORD}
                className="hover:text-primary-dark mt-1 font-medium text-gray-700 duration-200 ease-in-out hover:text-primary-500"
                prefetch={false}
              >
                ¿Has olvidado la contraseña?
              </Link>

              <ButtonSubmit
                type="submit"
                disabled={!checkIfJSONisEmpty(errors)}
                name={isBusy ? "Cargando" : "Iniciar Sesión"}
              />
            </div>
          </Form>
        )}
      </Formik>
      <AuthBottomBar isLogin={true} />
    </div>
  );
}
