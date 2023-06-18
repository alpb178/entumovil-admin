import PhoneInputField from "@/component/inputPhone";
import Loader from "@/component/loader";
import { saveUsers, useFindUsers } from "@/hooks/useUsers";
import { PUT } from "@/lib/constant";
import { Button } from "@material-tailwind/react";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function EditProfile({
  userlogged,
  setHideImage,
  setHideInfoEditUsers,
}) {
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useFindUsers({
    args: { id: userlogged.id },
    options: {
      keepPreviousData: true,
    },
  });

  const message = "Campo Obligatorio *";

  const initialValues = {
    nombre: data?.nombre || "",
    edad: data?.edad || "",
    nacimiento: data?.nacimiento || "",
    ocupacion: data?.ocupacion || "",
    telefono: data?.telefono || "",
  };

  const validationSchema = Yup.object().shape({
    telefono: Yup.string().required(message),
  });

  const onSubmit = async (values) => {
    let method = PUT;

    try {
      setLoading(true);

      values.id = data.id;

      await saveUsers({
        args: values,
        options: {
          method,
        },
      });

      toast.success("Usuario Editado Con Exito");
      setHideImage(false);
      setHideInfoEditUsers(false);
    } catch (error) {
      toast.error(error.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-screen-md">
      {isLoading || loading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-6 p-6 text-lg">
              <div className=" w-full">
                <p className="ml-3 mb-2 font-bold">Nombre y Apellidos:</p>
                <div>
                  <Field
                    name="nombre"
                    id="nombre"
                    className={`autocomplete-field ml-3 w-full rounded-md border p-3  ${
                      errors?.nombre && touched?.nombre
                        ? "border-red"
                        : "border-gray"
                    }`}
                  />
                  {errors?.nombre && touched?.nombre ? (
                    <p className="ml-5 mt-1 text-sm text-red">
                      {errors?.nombre}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="ml-3">
                <p className="font-bold">Número de telefono:</p>

                <PhoneInputField label="Phone Number" name="telefono" />
                {errors?.telefono && touched?.telefono ? (
                  <p className="ml-5 mt-1 text-sm text-red">
                    {errors?.telefono}
                  </p>
                ) : null}
              </div>

              <div className="flex w-full">
                <div className="w-full">
                  <p className="ml-3 mb-2 font-bold">Fecha de nacimiento:</p>
                  <div>
                    <Field
                      name="nacimiento"
                      type="date"
                      placeholder="Fecha de nacimiento"
                      className={` autocomplete-field ml-3 max-w-full  rounded-md border p-3 ${
                        errors?.nacimiento && touched?.nacimiento
                          ? "border-red"
                          : "border-gray"
                      }`}
                    />
                    {errors?.nacimiento && touched?.nacimiento ? (
                      <p className="ml-5 mt-1 text-sm text-red">
                        {errors?.nacimiento}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="w-full">
                  <p className="ml-3 mb-2 font-bold">Edad:</p>
                  <div>
                    <Field
                      name="edad"
                      type="number"
                      className={` autocomplete-field ml-3 w-16 rounded-md border p-3 ${
                        errors?.edad && touched?.edad
                          ? "border-red"
                          : "border-gray"
                      }`}
                    />
                    {errors?.edad && touched?.edad ? (
                      <p className="ml-5  mt-1 text-sm text-red">
                        {errors?.edad}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="w-full ">
                <p className="ml-3 mb-2 font-bold">Ocupacion:</p>
                <div>
                  <Field
                    name="ocupacion"
                    className={`ml-3 rounded-md border p-3 ${
                      errors?.ocupacion && touched?.ocupacion
                        ? "border-red"
                        : "border-gray"
                    }`}
                  />
                  {errors?.ocupacion && touched?.ocupacion ? (
                    <p className="ml-5 mt-1 text-sm text-red">
                      {errors?.ocupacion}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex justify-end space-x-8">
                <Button
                  variant="gradient"
                  type="submit"
                  size="sm"
                  className="mt-2 border-t"
                >
                  <span>Salvar Datos</span>
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
