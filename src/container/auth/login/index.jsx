import { ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { PasswordField } from "@/component/field/PassworField";
import { URL_FORGOT_PASSWORD } from "@/lib/constant";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { ValidationSchema } from "./validation";
import { useAuth } from "@/hooks/useAuth";
import AuthBottomBar from "@/component/bottombar/bottombar.component";
import { getErrorTransaction } from "@/lib/utils";

export function Login() {
  const initialValues = {
    username: "",
    password: "",
  };

  const { login } = useAuth();

  const handleSubmit = async (values) => {
    try {
      login(values);
    } catch (error) {
      toast.error(getErrorTransaction(error.toString()));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="mt-10 flex flex-col items-center justify-center space-y-10 m-5">
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

          <div className="justify-center pt-1">
            <ButtonSubmit
              type="submit"
              disabled={isSubmitting}
              name="Iniciar Sesión"
            />
          </div>
          <AuthBottomBar isLogin={true} />
        </Form>
      )}
       
    </Formik>
  );
}
