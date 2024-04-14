import { InputField } from "@/component/field/InputField";

import { Form, Formik } from "formik";
import { PasswordField } from "@/component/field/PassworField";
import { ButtonCancel, ButtonSubmit } from "@/component/button";
import { ValidationSchema } from "./validation";
import { useNavigateRoute } from "@/hooks/useNavigateRoute";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { saveUsers, useFindUsers } from "@/hooks/useUsers";
import { PhoneInputField } from "@/component/field/PhoneField";
import { useState } from "react";
import { POST, PUT } from "@/lib/constant";

export function ProfileUser() {
  const { navigateToHome } = useNavigateRoute();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { data, isLoading } = useFindUsers({
    args: { id: params.id },
    options: {
      keepPreviousData: true,
    },
  });
  const initialValues = {
    email: data[0]?.email ?? "",
    phone: data[0]?.firstName ?? "",
    lastName: data[0]?.lastName ?? "",
    password: "",
    repeatPassword: "",
  };

  const handleSubmit = async (values) => {
    console.log(values, "value");

    let method = PUT;

    console.log(method, "value");

    try {
      //setLoading(true);

      values.id = data[0].id;

      const newData = {
        id: values.id,
        username: values.email,
        email: values.email,
        firstname: values.phone ?? "-",
        lastname: values.lastName,
        password: values.password,
        roles: ["user_client_role"],
      };

      console.log(newData, "value");

      await saveUsers({
        args: newData,
        options: {
          method,
        },
      });

      toast.success("Usuario editado Con éxito");
      navigateToHome();
    } catch (error) {
      toast.error(error.toString());
      console.log("value");
    } finally {
      // setLoading(false);
    }
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
                label="Correo electrónico*"
              />

              <PhoneInputField label="Telefóno*" name="phone" />

              <InputField
                type="text"
                error={errors.lastName}
                name="lastName"
                label="Nombre y apellidos*"
                placeholder="Insertar nombre y apellidos*"
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
                name={isSubmitting || loading ? "Cargando" : "Actualizar"}
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
