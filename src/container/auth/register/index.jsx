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

export function RegisterForm() {
  const initialValues = {
    email: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    phone: "",
  };

  const { register } = useAuth();

  const handleSubmit = (values) => {
    try {
      register({
        username: values.email,
        email: values.email,
        firstname: values.phone ?? "-",
        lastname: `${values?.firstname ?? "-"}  ${values.lastName ?? "-"}`,
        password: values.password,
        roles: ['user_client_role'],
      });
    } catch (error) {
      toast.error(getErrorTransaction(error.toString()));
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center space-y-5 m-5">
      <LogoEntuMovil />
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

              <PhoneInputField label="Telefóno" name="phone" />
              <InputField
                type="text"
                error={errors.firstname}
                name="firstname"
                label="Nombre"
                placeholder="Insertar nombre*"
              />

              <InputField
                type="text"
                error={errors.lastName}
                name="lastName"
                label="Apellidos"
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
            </div>

            <div className="flex justify-center pt-4">
              <ButtonSubmit
                type="submit"
                disabled={isSubmitting}
                name={isSubmitting ? "Cargando" : "Registrar"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
