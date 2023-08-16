import keycloak from "@/keycloack";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { useProfile } from "@/hooks/useProfile";
import useAuth from "@/hooks/useAuth";
import { URL_HOME } from "@/lib/constant";
import SitesAvailables from "@/component/sites";

export default function ProtectedPage() {
  const [openNav, setOpenNav] = useState(false);
  const isLogin = useAuth();

  const { userLogged } = useProfile();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Portal Entumovil
          </Typography>
          <div className="flex items-center gap-4">
            <a
              href={URL_HOME}
              className="flex content-center items-center hover:text-red"
            >
              <Button
                size="sm"
                onClick={() => keycloak.logout()}
                className="hidden rounded-none lg:inline-block lg:bg-button"
              >
                <span>Cerrar Sesión</span>
              </Button>
            </a>

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
        </div>
        <MobileNav open={openNav}>
          <a
            href={URL_HOME}
            className="flex content-center items-center hover:text-red"
          >
            <Button
              size="sm"
              onClick={() => keycloak.logout()}
              className="hidden rounded-none lg:inline-block lg:bg-button"
            >
              <span>Cerrar Sesión</span>
            </Button>
          </a>
        </MobileNav>
      </Navbar>

      {isLogin && (
        <div className="align-center flex content-center">
          <div className="mx-auto w-1/2 py-5">
            <div className="mx-auto max-w-screen-md">
              <Typography variant="h2" color="blue-gray" className="ml-24">
                Usuario {userLogged.username} Autenticado
              </Typography>
            </div>
          </div>
          <div className="w-1/4 p-10 ">
            <SitesAvailables />
          </div>
        </div>
      )}
    </>
  );
}
