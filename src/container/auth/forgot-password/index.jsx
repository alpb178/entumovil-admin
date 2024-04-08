import { InputField } from "@/component/field/InputField";
import { PasswordField } from "@/component/field/PassworField";
import { URL_FORGOT_PASSWORD } from "@/lib/constant";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      //validationSchema={CredentialsValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="mt-10 flex flex-col items-center justify-center space-y-10">
          <div className="space-y-6 space-x-16 ">
            <InputField
              type="text"
              name="email"
              error={errors.username}
              placeholder="Inserte correo electrónico"
              label="Correo electrónico"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button type="submit">Enviar</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
