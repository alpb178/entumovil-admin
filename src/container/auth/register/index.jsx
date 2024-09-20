import { ButtonSubmit } from "@/component/button";
import { InputField } from "@/component/field/InputField";
import { Form, Formik } from "formik";
import { ValidationSchema } from "./validation";
import { PasswordField } from "@/component/field/PassworField";
import { PhoneInputField } from "@/component/field/PhoneField";
import { LogoEntuMovil } from "@/component/logo/logo";
import { checkIfJSONisEmpty, getErrorTransaction } from "@/lib/utils";
import { AuthBottomBar } from "@/component/bottombar/bottombar";
import React, { useState } from "react";
import { Captcha } from "@/component/captcha";
import { ModalConfirmation } from "@/component/modal-confirmation/modal-confirmation";
import { dictLoad, dictRegist } from "@/lib/dict";
import { CheckBoxField } from "@/component/field/InputField copy";
import { useRegister } from "@/hooks/register/useAuth";

export function RegisterForm() {
  const initialValues = {
    email: "",
    lastName: "",
    password: "",
    repeatPassword: "",
    phone: "",
    termConditions: false,
  };

  const { register, isBusy } = useRegister();
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeShowModal = () => {
    setOpen(false);
  };

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [reloadCaptcha, setReloadCaptcha] = useState(false);

  const handleCaptchaVerify = (isVerified) => {
    setCaptchaVerified(isVerified);
  };

  const handleSubmit = (values) => {
    try {
      register(
        {
          username: values.email,
          email: values.email,
          firstname: values.phone ?? "-",
          lastname: `${values?.firstName} ${values.lastName}`,
          password: values.password,
        },
        () => setReloadCaptcha(true)
      );
    } catch (error) {
      getErrorTransaction(error);
    }
  };
  return (
    <div>
      <LogoEntuMovil />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="mt-5 flex flex-col items-center justify-center space-y-10">
            <div className="space-y-6">
              <InputField
                type="text"
                name="email"
                error={errors.email}
                placeholder="Inserte correo electrónico"
                label="Correo electrónico*"
              />

              <InputField
                type="text"
                error={errors.firstName}
                name="firstName"
                label="Nombre*"
                placeholder="Insertar nombre*"
              />

              <InputField
                type="text"
                error={errors.lastName}
                name="lastName"
                label="Apellidos*"
                placeholder="Insertar apellidos"
              />
              <PhoneInputField
                label="Teléfono"
                name="phone"
                error={errors.phone}
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

              <CheckBoxField
                name="termConditions"
                label="Aceptar términos y condiciones"
                error={errors.termConditions}
                onClick={openModal}
              />

              <div className=" flex flex-row justify-center">
                <Captcha
                  onVerify={handleCaptchaVerify}
                  reloadCaptcha={reloadCaptcha}
                  onReloadCaptcha={setReloadCaptcha}
                />
              </div>
              <div className="-mt-6 flex justify-center">
                <ButtonSubmit
                  type="submit"
                  disabled={!checkIfJSONisEmpty(errors) || !captchaVerified}
                  name={isBusy ? dictLoad : dictRegist}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ModalConfirmation
        open={open}
        onOpen={closeShowModal}
        isInformation={true}
        nameButtonCancel="Cerrar"
        message="Términos y condiciones"
      />
      <AuthBottomBar />
    </div>
  );
}
