import { InputField } from "@/component/field/InputField";

import { Form, Formik } from "formik";
import { PasswordField } from "@/component/field/PassworField";
import { ButtonCancel, ButtonSubmit } from "@/component/button";
import { ValidationSchema } from "./validation";
import { useNavigateRoute } from "@/hooks/useNavigateRoute";
import { toast } from "react-toastify";

export function ProfileUser() {
  const initialValues = {
    email: "",
    name: "",
    lastName: "",
    password: "",
    repeatPassword: "",
  };

  const { navigateToHome } = useNavigateRoute();

  const handleSubmit = (values) => {
    console.log(values);
    navigateToHome();
    toast.success(
      "Usuario Actualizado"
    );
  };

  const handleCancel = () => {
    navigateToHome();
  };
  return (
    <div className=" flex flex-col items-center justify-center space-y-5">
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
            </div>

            <div className="flex justify-center pt-4">
              <ButtonSubmit
                type="submit"
                disabled={isSubmitting}
                name="Actualizar"
              />
              <ButtonCancel
                type="submit"
                disabled={isSubmitting}
                onClick={handleCancel}
                name="Cancelar"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
