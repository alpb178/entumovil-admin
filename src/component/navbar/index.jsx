import { useLocation, useNavigate } from "react-router-dom";
import { LogoEntuMovil } from "../logo/logo";
import { URL_HOME, URL_PROFILE_ADMIN } from "@/lib/constant";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import ModalLogout from "../modal-confirmation/modal-logout-confirmation";

export function NavbarUserLoggued() {
  const navigate = useNavigate();
  const location = useLocation();

  const { logout } = useAuth();

  const [open, setOpen] = useState(false);

  const handlelogout = () => {
    logout();
    setOpen(false);
  };
  const closeShowModal = () => {
    setOpen(false);
  };

  const handleViewAdmin = () => {
    navigate(URL_PROFILE_ADMIN);
  };

  const handleViewProfile = () => {
    navigate(URL_HOME);
  };
  return (
    <div className="flex justify-center">
      {console.log(location)}
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
        {location.pathname.includes('admin') ? (
          <div
            className="flex items-center justify-center p-2"
            onClick={() => handleViewProfile()}
          >
            <img
              src="/images/entrar_usuario_auntenticado_/u89.png"
              alt="autenticar_usuario"
              className="mr-2"
              width={25}
              height={25}
            />
            Vista Perfil
          </div>
        ) : (
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
        )}
        <div
          className="flex items-center justify-center p-2"
          onClick={() => setOpen(true)}
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
      <ModalLogout
        open={open}
        onOpen={closeShowModal}
        onSubmit={handlelogout}
      />
    </div>
  );
}
