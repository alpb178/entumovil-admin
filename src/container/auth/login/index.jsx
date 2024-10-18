import { ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { PasswordField } from "@/component/field/PassworField";
import { Form, Formik } from "formik";
import { ValidationSchema } from "./validation";
import { checkIfJSONisEmpty, getErrorTransaction } from "@/lib/utils";

import React from "react";

import { dictInitSession, dictLoad } from "@/lib/dict";
import { useLogin } from "@/hooks/login/useLogin";
import { ContainerForm } from "@/component/container-form";

export function Login() {
  const initialValues = {
    username: "",
    password: "",
  };

  const { login, isBusy } = useLogin();

  const handleSubmit = async (values) => {
    try {
      login(values);
    } catch (error) {
      getErrorTransaction(error);
    }
  };

  return (
    <ContainerForm nameSection="Te damos la bienvenida al:" height="437">
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="justify-center space-y-1">
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

            <div className="mb-[15px]">
              <ButtonSubmit
                witdh="404px"
                height="[48px]"
                type="submit"
                disabled={!checkIfJSONisEmpty(errors)}
                name={isBusy ? dictLoad : dictInitSession}
              />
            </div>
          </Form>
        )}
      </Formik>
    </ContainerForm>
  );
}
