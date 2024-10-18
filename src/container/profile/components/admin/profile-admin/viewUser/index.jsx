/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { ButtonSubmit } from "@/component/button";
import { toast } from "react-toastify";
import { saveUsersPass } from "@/hooks/users/useUsers";
import { MESSAGE_SUCCES_PASSWORD_FORMAT } from "@/lib/constant";
import { PasswordField } from "@/component/field/PassworField";
import { checkIfJSONisEmpty, getErrorTransaction } from "@/lib/utils";
import { ValidationSchemaPassoword } from "@/lib/validation";
import React from "react";
import { dictButtonAccept, dictLoad } from "@/lib/dict";
import { ContainerFormPage } from "@/component";

export function ViewUser({ data }) {
  const initialValues = {
    password: "",
    repeatPassword: "",
  };

  const handleSubmit = async (values) => {
    try {
      const newData = {
        id: data.id,
        data: { newPass: values.password, repNewPass: values.repeatPassword },
      };

      await saveUsersPass({
        args: newData,
      });
      toast.success(MESSAGE_SUCCES_PASSWORD_FORMAT);
    } catch (error) {
      getErrorTransaction(error);
    }
  };

  return (
    <div className="flex flex-col">
      <a className="mb-5 border-b font-humanst text-2xl">
        Detalles del usuario
      </a>
      <div>
        <div className="flex flex-col text-lg ">
          <a className="font-bold">Correo @Electrónico:</a>
          <a className="m-5 ">{data?.email}</a>
        </div>
        <div className="flex flex-col text-lg ">
          <a className="font-bold">Nombre y Apellidos:</a>
          <a className="m-5 ">{data?.lastName}</a>
        </div>
        <div className="flex flex-col text-lg ">
          <a className="font-bold">Teléfono:</a>
          <a className="m-5 ">{data?.firstName}</a>
        </div>
      </div>

      <ContainerFormPage>
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchemaPassoword}
          onSubmit={handleSubmit}
        >
          {({ errors, isSubmitting }) => (
            <Form className=" space-y-1">
              <PasswordField
                name="password"
                error={errors.password}
                label="Contraseña*"
                placeholder="Insertar contraseña"
              />

              <PasswordField
                name="repeatPassword"
                label="Confirmar Contraseña*"
                error={errors.repeatPassword}
                placeholder="Insertar confirmación de la contraseña"
              />

              <div className="flex justify-center pt-4">
                <ButtonSubmit
                  type="submit"
                  wi
                  disabled={!checkIfJSONisEmpty(errors)}
                  name={isSubmitting ? dictLoad : dictButtonAccept}
                  witdh="404px"
                />
              </div>
            </Form>
          )}
        </Formik>
      </ContainerFormPage>
    </div>
  );
}
