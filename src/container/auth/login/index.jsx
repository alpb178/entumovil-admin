import { ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { PasswordField } from "@/component/field/PassworField";
import { URL_FORGOT_PASSWORD } from "@/lib/constant";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { ValidationSchema } from "./validation";

export function Login() {
  const initialValues = {
    username: "",
    password: "",
    rememberMe: true,
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="mt-10 flex flex-col items-center justify-center space-y-10">
          <div className="space-y-6  ">
            <InputField
              type="text"
              name="username"
              error={errors.username}
              placeholder="Inserte correo electrónico"
              label="Correo electrónico"
            />

            <PasswordField
              name="password"
              placeholder="Insertar contraseña"
              label="Contraseña"
              error={errors.password}
            />
          </div>

          <div className="flex flex-col justify-between space-y-8 sm:flex-row sm:items-center sm:space-y-0">
            <Link
              to={URL_FORGOT_PASSWORD}
              className="hover:text-primary-dark font-medium text-gray-700 duration-200 ease-in-out hover:text-primary-500"
              prefetch={false}
            >
              Olvidar Contraseña
            </Link>
          </div>

          <div className="flex justify-center pt-1">
            <ButtonSubmit type="submit" disabled={isSubmitting}  name='Iniciar Sesión'/> 
          </div>
        </Form>
      )}
    </Formik>
  );
}
