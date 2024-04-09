import { HeaderPage } from "@/component/header";
import TableAdmin from "./table-admin";

export function ProfileAdmin() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center space-y-10">
      <HeaderPage name="Usted se ha autenticado e el sistema cuentas, aquí podra seguir editado su perfil. Gracias por elegirnos" />
      <TableAdmin />
    </div>
  );
}
