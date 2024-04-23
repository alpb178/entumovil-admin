import { LogoEntuMovil } from "@/component/logo/logo";
import { URL_LOGIN } from "@/lib/constant";
import { Link } from "react-router-dom";

export function RegisterComplete() {
  return (
    <div className=" flex flex-col items-center justify-center space-y-5 m-5">
      <LogoEntuMovil />
      <a className="text-2xl">
        Usted se ha registrado en el portal de cuentas. Hemos Enviado un Correo
        con los pasos a seguir para activar su cuenta.
      </a>
      <Link
        to={URL_LOGIN}
        className="inline-flex justify-center px-1 font-medium"
      >
        <span className="text-primary-600">Iniciar Sesión</span>
      </Link>
    </div>
  );
}
