

import { useEffect, useState } from "react";
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
    <div className=" z-10 mb-10 h-20 w-full text-lg bg-white">
      <div className="h-5 w-full bg-ocre-red"></div>

      <div className=" flex h-full w-full bg-white text-right">
        <div className=" ml-3  flex h-full  w-1/6 content-center items-center text-center ">
          <img className="h-36 w-36" src="/img/inmocor-compraventa-logo.svg" />
        </div>
        <div className="flex h-full ml-12 w-6/6 content-center items-center">
          {navList}
        </div>
      </div>
    </div>
  );
}
