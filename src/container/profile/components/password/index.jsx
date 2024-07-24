import { Form, Formik } from "formik";
import { PasswordField } from "@/component/field/PassworField";
import { ButtonCancel, ButtonSubmit } from "@/component/button";
import { ValidationSchema } from "./validation";
import { toast } from "react-toastify";
import { saveUsersPass } from "@/hooks/useUsers";
import { checkIfJSONisEmpty, getErrorTransaction } from "@/lib/utils";
import { MESSAGE_SUCCES_PASSWORD_FORMAT } from "@/lib/constant";

export function PasswordUser({ id, onClose }) {
  const initialValues = {
    password: "",
    repeatPassword: "",
  };

  const handleSubmit = async (values) => {
    try {
      const newData = {
        id,
        data: { newPass: values.password, repNewPass: values.repeatPassword },
      };

      await saveUsersPass({
        args: newData,
      });

      toast.success(MESSAGE_SUCCES_PASSWORD_FORMAT);
      onClose();
    } catch (error) {
      toast.error(getErrorTransaction(error.toString()));
    } finally {
    }
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
              <PasswordField
                name="password"
                error={errors.password}
                touched={touched.password}
                label="Contraseña*"
                placeholder="Insertar contraseña"
              />

              <PasswordField
                name="repeatPassword"
                label="Confirmar contraseña*"
                error={errors.repeatPassword}
                touched={touched.repeatPassword}
                placeholder="Insertar confirmación de la contraseña"
              />
            </div>

            <div className="flex justify-center pt-4">
              <ButtonSubmit
                type="submit"
                disabled={!checkIfJSONisEmpty(errors)}
                name={isSubmitting ? "Cargando" : "Actualizar"}
              />
              <ButtonCancel
                onClick={() => {
                  onClose();
                }}
                name="Cancelar"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
