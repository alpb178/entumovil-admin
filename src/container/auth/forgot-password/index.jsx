import { ButtonCancelLink, ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { URL_LOGIN } from "@/lib/constant";
import { Form, Formik } from "formik";
import { ValidationSchema } from "./validation";

export function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
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
            <div className="space-y-6 space-x-16 ">
              <InputField
                type="text"
                name="email"
                error={errors.email}
                placeholder="Inserte correo electrónico"
                label="Correo electrónico"
              />
            </div>

            <div className="flex justify-center pt-4">
              <ButtonSubmit
                type="submit"
                disabled={isSubmitting}
                name="Recuperar contraseña"
              />
              <ButtonCancelLink name="Cancelar" url={URL_LOGIN} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
