import { useNavigate } from "react-router-dom";
import { LogoEntuMovil } from "../logo/logo";
import { URL_LOGIN, URL_PROFILE_ADMIN } from "@/lib/constant";

export function NavbarUserLoggued() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(URL_LOGIN);
  };

  const handleViewAdmin = () => {
    navigate(URL_PROFILE_ADMIN);
  };
  return (
    <div className="flex justify-center">
      <div className="ml-auto pl-36 ">
        <LogoEntuMovil isLogin={true} />
      </div>

      <div className="ml-auto pt-5 pr-8">
        <div className="flex flex-col items-center justify-center p-2">
          <img
            className="mr-2"
            src="/images/entrar_usuario_auntenticado_/u44.png"
            alt="autenticar_usuario"
            width={50}
            height={50}
          />
          Usuario Autenticado
        </div>
        <div
          className="flex items-center justify-center p-2"
          onClick={() => handleViewAdmin()}
        >
          <img
            src="/images/entrar_usuario_auntenticado_/u89.png"
            alt="autenticar_usuario"
            className="mr-2"
            width={25}
            height={25}
          />
          Vista Admin
        </div>
        <div
          className="flex items-center justify-center p-2"
          onClick={() => handleLogout()}
        >
          <img
            src="/images/entrar_usuario_auntenticado_/u48.png"
            alt="autenticar_usuario"
            className="mr-2"
            width={25}
            height={25}
          />
          Cerrar Sesión
        </div>
      </div>
    </div>
  );
}
