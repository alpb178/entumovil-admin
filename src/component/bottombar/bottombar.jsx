import { URL_LOGIN, URL_REGISTER } from "@/lib/constant";
import { Link } from "react-router-dom";

export const AuthBottomBar = ({ isLogin }) => {
  return (
    <div className=" mt-2 w-full bg-white lg:relative">
      <div className="relative my-6 flex flex-col items-center justify-center space-y-2 text-base md:flex-row md:space-y-0">
        <span className="px-2 text-gray-700">
          {isLogin
            ? "Crear nueva cuenta en el Portal de cuentas"
            : "Ya tienes una cuenta"}
        </span>

        <Link
          to={isLogin ? URL_REGISTER : URL_LOGIN}
          className="inline-flex justify-center px-1 font-medium"
        >
          <span className="text-primary-600">
            {isLogin ? "Registrarse" : "Iniciar Sesión"}
          </span>
        </Link>
      </div>
    </div>
  );
};
