import { ButtonCancelLink, ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { URL_LOGIN } from "@/lib/constant";
import { Form, Formik } from "formik";
import { ValidationSchema } from "./validation";
import { PasswordField } from "@/component/field/PassworField";
import { HeaderPage } from "@/component/header";
import { useNavigateRoute } from "@/hooks/useNavigateRoute";
import { toast } from "react-toastify";

export function RegisterForm() {
  const { navigateToLogin } = useNavigateRoute();
  const initialValues = {
    email: "",
    name: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    code: "",
  };

  const handleSubmit = (values) => {
    navigateToLogin();
    toast.success("Se ha registrado con éxito en el sistema de cuentas");
  };
  return (
    <div className=" flex flex-col items-center justify-center space-y-5">
      <HeaderPage name="Registro en el Sistema Cuentas" />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="mt-10 flex flex-col items-center justify-center space-y-10">
            <div className="space-y-6">
              <InputField
                type="text"
                name="email"
                error={errors.email}
                placeholder="Inserte correo electrónico"
                label="Correo electrónico"
              />
              <InputField
                type="text"
                error={errors.name}
                name="name"
                label="Nombre*"
                placeholder="Insertar nombre*"
              />

              <InputField
                type="text"
                error={errors.lastName}
                name="lastName"
                label="Apellidos*"
                placeholder="Insertar apellidos*"
              />
              <PasswordField
                name="password"
                error={errors.password}
                label="Contraseña*"
                placeholder="Insertar contraseña"
              />

              <PasswordField
                name="repeatPassword"
                label="Confirmar contraseña*"
                error={errors.repeatPassword}
                placeholder="Insertar confirmación de la contraseña"
              />

              <InputField
                type="text"
                name="code"
                error={errors.code}
                label="Codigo de verificación*"
                placeholder="Insertar código de verificación"
              />
            </div>

            <div className="flex justify-center pt-4">
              <ButtonSubmit
                type="submit"
                disabled={isSubmitting}
                name="Registrar"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
