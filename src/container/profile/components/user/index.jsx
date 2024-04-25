import { InputField } from "@/component/field/InputField";
import { Form, Formik } from "formik";
import { ButtonCancel, ButtonSubmit } from "@/component/button";
import { ValidationSchema } from "./validation";
import { useNavigateRoute } from "@/hooks/useNavigateRoute";
import { toast } from "react-toastify";
import { saveUsers, useFindUsers } from "@/hooks/useUsers";
import { PhoneInputField } from "@/component/field/PhoneField";
import { useState } from "react";
import { PUT } from "@/lib/constant";
import Loader from "@/component/loader";
import { useAuth } from "@/hooks/useAuth";

export function ProfileUser() {
  const { navigateToHome } = useNavigateRoute();
  const { getUsername, getId } = useAuth();
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useFindUsers({
    args: { id: getUsername() },
    options: {
      keepPreviousData: true,
    },
  });
  const initialValues = {
    email: data[0]?.email ?? "",
    phone: data[0]?.firstname ?? "",
    lastName: data[0]?.lastName ?? "",
  };

  const handleSubmit = async (values) => {
    let method = PUT;

    try {
      const newData = {
        id: getId(),
        username: values.email,
        email: values.email,
        firstname: values.phone ?? "-",
        lastName: values.lastName,
      };

      await saveUsers({
        args: newData,
        options: {
          method,
        },
      });

      toast.success("Usuario editado con éxito");
      navigateToHome();
      setLoading(false)
    } catch (error) {
      toast.error(error.toString());
      setLoading(false)
    } finally {
      setLoading(false)
    }
  };

  const handleCancel = () => {
    navigateToHome();
  };
  return (
    <div className=" flex flex-col items-center justify-center space-y-5">
      {isLoading || !data ? (
        <Loader />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors,  isSubmitting }) => (
            <Form className="mt-10 flex flex-col items-center justify-center space-y-10">
              <div className="space-y-6">
                <InputField
                  type="text"
                  name="email"
                  error={errors.email}
                  placeholder="Inserte correo electrónico"
                  label="Correo electrónico*"
                />

                <PhoneInputField label="Telefóno" name="phone" />

                <InputField
                  type="text"
                  error={errors.lastName}
                  name="lastName"
                  label="Nombre y apellidos*"
                  placeholder="Insertar nombre y apellidos"
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
      )}
    </div>
  );
}
