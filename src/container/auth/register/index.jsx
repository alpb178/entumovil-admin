import { ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { Form, Formik } from "formik";
import { ValidationSchema } from "./validation";
import { PasswordField } from "@/component/field/PassworField";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import { PhoneInputField } from "@/component/field/PhoneField";
import { LogoEntuMovil } from "@/component/logo/logo";
import { getErrorTransaction } from "@/lib/utils";
import { AuthBottomBar } from "@/component/bottombar/bottombar";

export function RegisterForm() {
  const initialValues = {
    email: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    phone: "",
  };

  const { register, isBusy } = useAuth();

  const handleSubmit = (values) => {
    try {
      register({
        username: values.email,
        email: values.email,
        firstname: values.phone ?? "-",
        lastname: `${values?.firstName} ${values.lastName}`,
        password: values.password,
      });
    } catch (error) {
      toast.error(getErrorTransaction(error.toString()));
    }
  };
  return (
    <div>
      <LogoEntuMovil />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="mt-1 flex flex-col items-center justify-center space-y-10">
            <div className="space-y-6">
              <InputField
                type="text"
                name="email"
                error={errors.email}
                placeholder="Inserte correo electrónico"
                label="Correo electrónico*"
              />

              <InputField
                type="text"
                error={errors.firstName}
                name="firstName"
                label="Nombre*"
                placeholder="Insertar nombre*"
              />

              <InputField
                type="text"
                error={errors.lastName}
                name="lastName"
                label="Apellidos*"
                placeholder="Insertar apellidos"
              />
              <PhoneInputField
                label="Telefóno*"
                name="phone"
                error={errors.phone}
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
              <div className="-mt-6 flex justify-center">
                <ButtonSubmit
                  type="submit"
                  name={isBusy ? "Cargando" : "Registrar"}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <AuthBottomBar />
    </div>
  );
}
