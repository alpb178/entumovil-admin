import { ButtonCancelLink, ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { URL_LOGIN } from "@/lib/constant";
import { Form, Formik } from "formik";
import { ValidationSchema } from "./validation";
import React from "react";
import { useAuth } from "@/hooks/useAuth";

export function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const { resetPassword, isBusy } = useAuth();

  const handleSubmit = (values) => {
    resetPassword(values.email);
  };
  return (
    <div className=" flex flex-col items-center justify-center space-y-5">
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="m-5 mt-10 flex flex-col items-center justify-center space-y-10">
            <div className="space-x-16 space-y-6 ">
              <InputField
                type="text"
                name="email"
                error={errors.email}
                placeholder="Inserte correo electrónico"
                label="Correo electrónico*"
              />
            </div>

            <div className="flex justify-center pt-4">
              <ButtonSubmit
                type="submit"
                name={isBusy ? "Cargando" : "Recuperar contraseña"}
              />
              <ButtonCancelLink name="Cancelar" url={URL_LOGIN} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
