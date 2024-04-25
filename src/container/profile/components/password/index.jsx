import { Form, Formik } from "formik";
import { PasswordField } from "@/component/field/PassworField";
import { ButtonCancel, ButtonSubmit } from "@/component/button";
import { ValidationSchema } from "./validation";
import { toast } from "react-toastify";
import { saveUsers } from "@/hooks/useUsers";
import { PUT } from "@/lib/constant";

export function PasswordUser({ id, onClose }) {
  const initialValues = {
    password: "",
    repeatPassword: "",
  };

  const handleSubmit = async (values) => {
    let method = PUT;
    try {
      const newData = {
        id,
        password: values.password,
      };

      await saveUsers({
        args: newData,
        options: {
          method,
        },
      });

      toast.success("Usuario editado con éxito");
      onClose();
    } catch (error) {
      toast.error(error.toString());
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
        {({ errors, isSubmitting }) => (
          <Form className="mt-10 flex flex-col items-center justify-center space-y-10">
            <div className="space-y-6">
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
              <ButtonCancel
                type="submit"
                disabled={isSubmitting}
                onClick={onClose}
                name="Cancelar"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
