import {
  INMOCOR_CONTACT_PAGE,
  INMOCOR_GLOSARY_PAGE,
  INMOCOR_HOME_PAGE,
  INMOCOR_MANAGMENT_INMOCOR_PAGE,
  INMOCOR_MANAGMENT_INMOGEN_PAGE,
  INMOCOR_MANAGMENT_PUBLICATIONS_PAGE,
  legislation,
} from "@/lib/constants";
import ItemsMenuNavbar from "./ItemsMenuNavbar";
import NavbarMenuPages from "./NavbarMenuPages";

export const navList = (
  <ul className="mb-4 mr-8 flex flex-col justify-items-center gap-2 text-left  font-black text-black  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <a href={INMOCOR_HOME_PAGE} className="text-red">
      INICIO
    </a>

    <ItemsMenuNavbar title="LEGISLACIÓN" items={legislation} />

    <a
      href={INMOCOR_MANAGMENT_INMOCOR_PAGE}
      className="flex content-center items-center hover:text-red"
    >
      MACROCORPUS INMOCOR
    </a>

    <a href={INMOCOR_MANAGMENT_INMOGEN_PAGE} className="hover:text-red">
      INMOGEN
    </a>

    <a href={INMOCOR_GLOSARY_PAGE} className="hover:text-red">
      GLOSARIO
    </a>

    <a href={INMOCOR_MANAGMENT_PUBLICATIONS_PAGE} className="hover:text-red">
      PUBLICACIONES
    </a>

    <a href={INMOCOR_CONTACT_PAGE} className="hover:text-red">
      EQUIPO Y CONTACTOS
    </a>
  </ul>
);

export default function NavbarHome() {
  return (
    <div className="absolute top-0 left-0 right-0">
      <NavbarMenuPages />
    </div>
  );
}
