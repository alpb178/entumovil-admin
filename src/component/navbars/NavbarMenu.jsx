import {
  INMOCOR_CONTACT_PAGE,
  INMOCOR_GLOSARY_PAGE,
  INMOCOR_HOME_PAGE,
  INMOCOR_MANAGMENT_INMOCOR_PAGE,
  INMOCOR_MANAGMENT_INMOGEN_PAGE,
  legislation,
} from "@/lib/constants";
import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import ItemsMenuNavbar from "./ItemsMenuNavbar";

export const navList = (
  <ul className="mb-4 mr-8 flex text-left flex-col justify-items-center gap-2  text-lg font-medium text-black  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <a href={INMOCOR_HOME_PAGE} className="hover:text-red">
      INICIO
    </a>

    <ItemsMenuNavbar title="LEGISLACIÓN" items={legislation} />

    <a href={INMOCOR_MANAGMENT_INMOCOR_PAGE} className="hover:text-red items-center content-center flex">
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

export default function NavbarMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

 

  return (
    <Navbar className="relative z-10 rounded-none" color="white">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <img
          src="/img/sticky-logo.png"
          className="block w-40 "
          alt="Motorbike Smoke"
        />
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
