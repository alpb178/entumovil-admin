import { Form, Formik } from "formik";
import { ButtonSubmit } from "@/component/button";
import { ValidationSchema } from "./validation";
import { toast } from "react-toastify";
import { saveUsersPass } from "@/hooks/useUsers";
import { MESSAGE_SUCCES_PASSWORD_FORMAT, PUT } from "@/lib/constant";
import { PasswordField } from "@/component/field/PassworField";
import { getErrorTransaction } from "@/lib/utils";

export function ViewUser({ data }) {
  const initialValues = {
    password: "",
    repeatPassword: "",
  };

  const handleSubmit = async (values) => {
    let method = PUT;

    try {
      const newData = {
        id:data.id,
        newPass: values.password,
        repNewPass: values.repeatPassword,
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
    <div className=" mt-5 flex flex-col items-start justify-start text-lg ">
      <div className="text-blueGray-400 mt-0 mb-2 ">
        Correo Electrónico:
        <i className="ml-3 ">{data.email}</i>
      </div>
      <div className="text-blueGray-400 mt-0 mb-2">
        Telefóno:
        <i className=" ml-3 ">{data.firstName}</i>
      </div>
      <div className="text-blueGray-400 mt-0  ">
        Nombre y Apellidos:
        <i className="ml-3 ">{data.lastName}</i>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="mt-2 flex flex-col border-t">
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
                disabled={isSubmitting}
                name={isSubmitting ? "Cargando" : "Actualizar"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
