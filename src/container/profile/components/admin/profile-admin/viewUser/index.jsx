import { Form, Formik } from "formik";
import { ButtonSubmit } from "@/component/button";
import { toast } from "react-toastify";
import { saveUsersPass } from "@/hooks/useUsers";
import { MESSAGE_SUCCES_PASSWORD_FORMAT } from "@/lib/constant";
import { PasswordField } from "@/component/field/PassworField";
import { checkIfJSONisEmpty, getErrorTransaction } from "@/lib/utils";
import { ValidationSchemaPassoword } from "@/lib/validation";

export function ViewUser({ data }) {
  const initialValues = {
    password: "",
    repeatPassword: "",
  };

  const handleSubmit = async (values) => {
    try {
      const newData = {
        id: data.id,
        data: { newPass: values.password, repNewPass: values.repeatPassword },
      };

      await saveUsersPass({
        args: newData,
      });
      toast.success(MESSAGE_SUCCES_PASSWORD_FORMAT);
    } catch (error) {
      toast.error(getErrorTransaction(error.toString()));
    } finally {
    }
  };

  return (
    <>
      <a className="mb-5 border-b p-2 text-2xl">Detalles del usuario</a>
      <div className="flex text-lg md:flex-col  lg:flex-row ">
        <div className="mt-5 w-1/2">
          <div className="flex flex-col text-xl ">
            <a className="font-bold">Correo Electrónico:</a>
            <a className="m-5 ">{data?.email}</a>
          </div>
          <div className="flex flex-col text-xl ">
            <a className="font-bold">Teléfono:</a>
            <a className="m-5 ">{data?.firstName}</a>
          </div>
          <div className="flex flex-col text-xl ">
            <a className="font-bold">Nombre y Apellidos:</a>
            <a className="m-5 ">{data?.lastName}</a>
          </div>
        </div>
        <div className="w-1/2">
          <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchemaPassoword}
            onSubmit={handleSubmit}
          >
            {({ errors, isSubmitting }) => (
              <Form className=" flex flex-col">
                <div className="mt-5 space-y-6">
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
                    disabled={!checkIfJSONisEmpty(errors)}
                    name={isSubmitting ? "Cargando" : "Actualizar"}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
