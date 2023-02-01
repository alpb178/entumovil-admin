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
import { navList } from "./NavbarMenu";

export default function NavbarMenuPages() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className=" z-10 mb-10 h-20 text-lg bg-white">
      <div className="h-5 w-full bg-red"></div>

      <div className=" flex h-full w-full bg-white text-right">
        <div className="mr-5 ml-10  flex h-5/6  w-1/6 content-center items-center text-center ">
          <img src="/img/logo.png" />
        </div>
        <div className=" m-25 mt-1 flex h-full w-5/6 content-center items-center">
          {navList}
        </div>
      </div>
    </div>
  );
}
