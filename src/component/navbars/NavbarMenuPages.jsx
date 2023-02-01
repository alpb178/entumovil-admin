import {
  INMOCOR_CONTACT_PAGE,
  INMOCOR_GLOSARY_PAGE,
  INMOCOR_HOME_PAGE,
  INMOCOR_MANAGMENT_INMOCOR_PAGE,
  legislation,
  templates,
} from "@/lib/constants";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import ItemsMenuNavbar from "./ItemsMenuNavbar";
import styles from "./navbar.module.scss";

export default function NavbarMenuPages() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4  mt-4 flex flex-col gap-2 font-medium text-gray-900 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <a href={INMOCOR_HOME_PAGE} className={styles.items}>
        INICIO
      </a>

      <ItemsMenuNavbar title="LEGISLACIÓN" items={legislation} />

      <a href={INMOCOR_MANAGMENT_INMOCOR_PAGE} className={styles.items}>
        MACROCORPUS INMOCOR
      </a>

      <a href={INMOCOR_MANAGMENT_INMOCOR_PAGE} className={styles.items}>
        INMOGEN
      </a>

      <a href={INMOCOR_GLOSARY_PAGE} className={styles.items}>
        GLOSARIO
      </a>

      <a href={INMOCOR_GLOSARY_PAGE} className={styles.items}>
        PUBLICACIONES
      </a>

      <a href={INMOCOR_CONTACT_PAGE} className={styles.items}>
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
