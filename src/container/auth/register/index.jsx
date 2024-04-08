import { Form, Formik } from "formik";
import React, { useState } from "react";
import { FieldsForm } from "./fields";
import { HeaderPage } from "@/component/header";
import { ButtonSubmit } from "@/component/button";

export function Register() {
  const initialValues = {
    email: "",
    name: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    code: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className=" flex flex-col items-center justify-center space-y-5">
      <HeaderPage name="Registro en el Sistema Cuentas" />

      <Formik
        initialValues={initialValues}
        // ValidationSchema={CredentialsValidationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="mt-20 flex flex-col items-center justify-center  space-y-12">
            <FieldsForm errors={errors} touched={touched} />
            <div className="flex justify-center pt-4">
              <ButtonSubmit type="submit" name="Registrarme" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
