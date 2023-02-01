import {
  INMOCOR_CONTACT_PAGE,
  INMOCOR_GLOSARY_PAGE,
  INMOCOR_HOME_PAGE,
  INMOCOR_MANAGMENT_INMOCOR_PAGE,
  INMOCOR_MANAGMENT_INMOGEN_PAGE,
  legislation,
} from "@/lib/constants";

import { useEffect, useState } from "react";
import ItemsMenuNavbar from "./ItemsMenuNavbar";

export default function NavbarMenuPages() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4  mt-4 flex flex-col gap-2  font-black font-medium text-black  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <a href={INMOCOR_HOME_PAGE} className="hover:text-red">
        INICIO
      </a>

      <ItemsMenuNavbar title="LEGISLACIÓN" items={legislation} />

      <a href={INMOCOR_MANAGMENT_INMOCOR_PAGE} className="hover:text-red">
        MACROCORPUS INMOCOR
      </a>

      <a href={INMOCOR_MANAGMENT_INMOGEN_PAGE} className="hover:text-red">
        INMOGEN
      </a>

      <a href={INMOCOR_GLOSARY_PAGE} className="hover:text-red">
        GLOSARIO
      </a>

      <a href={INMOCOR_GLOSARY_PAGE} className="hover:text-red">
        PUBLICACIONES
      </a>

      <a href={INMOCOR_CONTACT_PAGE} className="hover:text-red">
        EQUIPO Y CONTACTOS
      </a>
    </ul>
  );

  return (
    <div className=" z-10 mb-10 h-20 bg-white">
      <div className="h-5 w-full bg-red"></div>

      <div className=" flex h-full w-full bg-white text-right">
        <div className="ml-5  flex h-5/6  w-1/4 content-center items-center text-center ">
          <img src="/img/logo.png" />
        </div>
        <div className=" ml-20 mt-5 flex h-full w-full content-center items-center lg:block">
          {navList}
        </div>
      </div>
    </div>
  );
}
