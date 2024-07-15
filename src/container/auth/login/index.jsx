import { ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { PasswordField } from "@/component/field/PassworField";
import { URL_FORGOT_PASSWORD } from "@/lib/constant";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { ValidationSchema } from "./validation";
import { useAuth } from "@/hooks/useAuth";
import { getErrorTransaction } from "@/lib/utils";
import { AuthBottomBar } from "@/component/bottombar/bottombar";
import { LogoEntuMovil } from "@/component/logo/logo";
import { useState } from "react";

export function Login() {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    username: "",
    password: "",
  };

  const { login,isBusy } = useAuth();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      login(values);
    } catch (error) {
      toast.error(getErrorTransaction(error.toString()));
      setLoading(false);
    } finally {
      setLoading(false);
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
        {({ errors, isSubmitting }) => (
          <Form className="m-5 mt-10 flex flex-col items-center justify-center space-y-10">
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
