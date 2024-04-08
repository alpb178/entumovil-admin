
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { FieldsForm } from "./fields";

export  function Register() {

  const initialValues = {
    username: '',
    password: '',
    rememberMe: true
  };

  const onSubmit = async (values) => {
   console.log(values)
  };

  const [showPassword, setShowPassword] = useState(false);
 

  return (
    <div>
    <div className="flex mt-10  justify-center items-center space-y-5">
      <a>Registro en el Sistema Cuentas</a>
    </div>

    <Formik
      initialValues={initialValues}
      // ValidationSchema={CredentialsValidationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex flex-col justify-center items-center mt-20  space-y-12">
          <FieldsForm errors={errors} touched={touched} />
          <div className="flex justify-center pt-4">
            <button type="submit">Registrarme</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  );
}
