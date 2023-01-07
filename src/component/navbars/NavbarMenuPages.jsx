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
      <a href={INMOCOR_HOME_PAGE} className={styles.itemsHome}>
        INICIO
      </a>

      <ItemsMenuNavbar title="LEGISLACIÓN" items={legislation} />

      <a href={INMOCOR_MANAGMENT_INMOCOR_PAGE} className={styles.items}>
        GESTOR INMOCOR
      </a>

      <ItemsMenuNavbar title="PLANTILLA" items={templates} />

      <a href={INMOCOR_GLOSARY_PAGE} className={styles.a}>
        GLOSARIO
      </a>

      <a href={INMOCOR_CONTACT_PAGE} className={styles.a}>
        CONTACTOS
      </a>
    </ul>
  );

  return (
    <div className=" z-10 h-32 mb-10  flex bg-white">
      <div class="h-5/6  w-1/4  flex text-center content-center ">
        <img className="h-20 w-15" src="/img/logo.png" />
      </div>
      <div class=" h-full w-full">
        <div className='h-12 bg-red-500 text-right content-center text-white w-full'> 
        <div className="flex flex-wrap items-center"></div>info@inmocor.com</div>
        <div className="hidden h-full w-full content-center items-center lg:block">{navList}</div>
      </div>
    </div>
  );
}
