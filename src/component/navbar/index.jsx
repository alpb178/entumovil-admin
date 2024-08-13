import React from "react";
import { useNavigate } from "react-router-dom";
import { URL_LOGIN } from "@/lib/constant";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { ModalLogout } from "../modal-confirmation/modal-logout-confirmation";

import { Disclosure } from "@headlessui/react";
import { useFindRoles } from "@/hooks/useRoles";
import { Loader } from "../loader";
import { MenuItemNavbar } from "./item-navbar";

export function NavbarUserLoggued() {
  const navigate = useNavigate();

  const { logout, getId, getUsername } = useAuth();

  const { data, isLoading, isError } = useFindRoles({
    args: { id: getId() },
    options: {
      keepPreviousData: true,
    },
  });

  const initialLetters = getUsername()?.substring(0, 1).toUpperCase();

  const [open, setOpen] = useState(false);

  const handlelogout = () => {
    logout();
    setOpen(false);
  };

  const openModalLogout = () => {
    setOpen(true);
  };

  const closeShowModal = () => {
    setOpen(false);
  };

  const isAdmin = !!data?.find((m) => m.name.includes("admin"));
  return (
    <>
      {isError ? (
        <>{navigate(URL_LOGIN)}</>
      ) : (
        <Disclosure as="nav">
          <>
            <div className="mx-auto  border-b px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="/images/autenticar_usuario/u2.png"
                      alt="Your Company"
                    />
                  </div>
                </div>
                {isLoading ? (
                  <Loader />
                ) : (
                  <MenuItemNavbar
                    openModalLogout={openModalLogout}
                    isAdmin={isAdmin}
                    letter={initialLetters}
                  />
                )}
              </div>
            </div>
          </>
          <ModalLogout
            open={open}
            onOpen={closeShowModal}
            onSubmit={handlelogout}
          />
        </Disclosure>
      )}
    </>
  );
}
