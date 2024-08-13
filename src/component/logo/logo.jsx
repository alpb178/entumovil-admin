/* eslint-disable react/prop-types */
import { HeaderPage } from "../header";
import React from "react";

export function LogoEntuMovil({ isLogin }) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center space-y-5">
      <img
        src="/images/autenticar_usuario/u2.png"
        alt="autenticar_usuario"
        width={100}
        height={100}
      />

      <HeaderPage
        name={isLogin ? "Bienvenido el Portal cuentas" : "Portal de cuentas"}
      />
    </div>
  );
}
