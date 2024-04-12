import { PhoneInputField } from "@/component/field/PhoneField";
import Loader from "@/component/loader";
import { saveUsers, saveUsersKeyCloack, useFindUsers } from "@/hooks/useUsers";
import { PUT } from "@/lib/constant";
import { Button } from "@material-tailwind/react";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";



export default function FormProfile({ data, onOpen }) {
  const [loading, setLoading] = useState(false);

  const message = "Campo Obligatorio *";

  const initialValues = {
    telefono: "",
  };

  const validationSchema = Yup.object().shape({
    telefono: Yup.string()
      .required(message)
      .min(10, "Deben ser 10 dígitos")
      .max(10, "Deben ser 10 dígitos"),
  });

  const onSubmit = async (values) => {
    let method = PUT;

    try {
      setLoading(true);

      values.keyDoackId = data;

      await saveUsersKeyCloack({
        args: values,
        options: {
          method,
        },
      });

      toast.success("Registro realizado con éxito");
      onOpen(false);
    } catch (error) {
      toast.error(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-screen-md">
      {loading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-6 p-6 text-lg">
              <p className="font-bold">Número de telefono:</p>

              <PhoneInputField label="Phone Number" name="telefono" />
              {errors?.telefono && touched?.telefono ? (
                <p className="ml-5 mt-1 text-sm text-red">{errors?.telefono}</p>
              ) : null}

              <div className="flex justify-end space-x-8">
                <Button
                  variant="gradient"
                  type="submit"
                  size="sm"
                  className="mt-2 border-t"
                >
                  <span>Finalizar Registro</span>
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
