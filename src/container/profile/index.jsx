import { HeaderPage } from "@/component/header";
import TableProfile from "./table-profile";

export function Profile() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center space-y-10">
      <HeaderPage name="Usted se ha autenticado en el sistema cuentas,aqui podra seguir editado su perfil. Gracias por elegirnos" />
      <TableProfile />
    </div>
  );
}
