import React from "react";
import { HeaderPage } from "@/component/header";

import { TableProfile } from "./table-profile";

export function Profile() {
  return (
    <div className="m-5 mt-10 flex flex-col items-center justify-center space-y-10">
      <HeaderPage
        className="items-center justify-center"
        name="Usted se ha autenticado en el Administracion del Sistema de Administración de Cuentas, aquí podrá seguir editando su perfil. Gracias por elegirnos"
      />
      <TableProfile />
    </div>
  );
}
