import { InputField } from "@/component/field/InputField";
import { Form, Formik } from "formik";
import { ButtonCancel, ButtonSubmit } from "@/component/button";

import { useNavigateRoute } from "@/hooks/useNavigateRoute";
import { toast } from "react-toastify";
import { saveUsers, useFindUsers } from "@/hooks/useUsers";
import { PhoneInputField } from "@/component/field/PhoneField";
import { useState } from "react";
import { PUT } from "@/lib/constant";
import { Loader } from "@/component/loader";
import { useAuth } from "@/hooks/useAuth";
import { checkIfJSONisEmpty, getErrorTransaction } from "@/lib/utils";
import { ValidationSchema } from "./validation";
import React from "react";

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
    phone: data[0]?.firstName ?? "",
    lastName: data[0]?.lastName ?? "",
  };

  const handleSubmit = async (values) => {
    let method = PUT;

    try {
      const newData = {
        id: getId(),
        data: { firstname: values.phone ?? "-", lastname: values.lastName },
      };

      await saveUsers({
        args: newData,
        options: {
          method,
        },
      });

      toast.success("Usuario editado con éxito");
      navigateToHome();
      setLoading(false);
    } catch (error) {
      toast.error(getErrorTransaction(error.toString()));
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigateToHome();
  };
  return (
    <div className=" m-5 flex flex-col items-center justify-center space-y-5">
      {isLoading || !data ? (
        <Loader />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ValidationSchema}
        >
          {({ errors, isSubmitting }) => (
            <Form className="mt-10 flex flex-col items-center justify-center space-y-10">
              <div className="space-y-6">
                <div className="flex flex-col text-xl ">
                  <a className="font-bold">Correo Electrónico:</a>
                  <a className="m-5 ">{data[0]?.email}</a>
                </div>

                <InputField
                  type="text"
                  error={errors?.lastName}
                  name="lastName"
                  label="Nombre y apellidos*"
                  placeholder="Insertar nombre y apellidos"
                />

                <PhoneInputField
                  label="Teléfono"
                  name="phone"
                  error={errors.phone}
                />
              </div>

              <div className="flex justify-center pt-2">
                <ButtonSubmit
                  type="submit"
                  disabled={!checkIfJSONisEmpty(errors)}
                  name={isSubmitting || loading ? "Cargando" : "Actualizar"}
                />
                <ButtonCancel
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
