import { INMOCOR_CONTACT_PAGE, INMOCOR_GLOSARY_PAGE, INMOCOR_HOME_PAGE, INMOCOR_MANAGMENT_INMOCOR_PAGE, INMOCOR_MANAGMENT_INMOGEN_PAGE, INMOCOR_MANAGMENT_PUBLICATIONS_PAGE, legislation } from "@/lib/constants";
import { useEffect, useState } from "react";
import ItemsMenuNavbar from "./ItemsMenuNavbar";

export const navList = (
  <ul className="mb-4 mr-8 flex flex-col justify-items-center gap-2 text-left  text-lg font-black text-black  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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

export default function NavbarMenuPages() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className=" z-10 mb-10 h-20 w-full bg-white text-lg">
      <div className="h-5 w-full bg-ocre-red"></div>

      <div className=" flex h-full w-full bg-white text-right">
        <div className=" flex content-center items-center align-center mt-15 text-center ">
          <img className="w-80 ml-3 " src="/img/inmocor-compraventa-logo.svg" />
        </div>
        <div className="w-6/6 ml-12 flex h-full content-center items-center">
          {navList}
        </div>
      </div>
    </div>
  );
}
