import { InputField } from "@/component/field/InputField";
import { PasswordField } from "@/component/field/PassworField";
import { Field } from "formik";

export function FieldsForm({ errors, touched }) {
  return (
    <div className=" justify-center space-y-10">
      <div className="space-y-6">
        <InputField
          type="text"
          name="email"
          error={errors.email}
          label="Correo electrónico*"
          placeholder="Insertar correo electrónico"
        />

        <InputField
          type="text"
          error={errors.name}
          name="lastName"
          label="Nombre*"
          placeholder="Insertar nombre*"
        />

        <InputField
          type="text"
          error={errors.lastName}
          name="lastName"
          label="Apellidos*"
          placeholder="Insertar apellidos*"
        />

        <PasswordField
          name="password"
          error={errors.password}
          label="Contraseña*"
          placeholder="Insertar contraseña"
        />

        <PasswordField
          name="passwordRepeat"
          label="Confirmar contraseña*"
          error={errors.passwordRepeat}
          placeholder="Insertar confirmación de la contraseña"
        />

        <InputField
          type="text"
          name="code"
          error={errors.code}
          label="Codigo de verificación*"
          placeholder="Insertar código de verificación"
        />
      </div>
    </div>
  );
}
