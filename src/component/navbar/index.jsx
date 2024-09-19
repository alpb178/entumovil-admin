import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

import { Disclosure } from "@headlessui/react";
import { MenuItemNavbar } from "./item-navbar";
import { ModalConfirmation } from "../modal-confirmation/modal-confirmation";

export function NavbarUserLoggued() {
  const { logout } = useAuth();

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

  return (
    <Disclosure as="nav">
      <>
        <div className="mx-auto  border-b px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="/public/img/favicon-32x32.png"
                  alt="Your Company"
                />
              </div>
            </div>

            <MenuItemNavbar openModalLogout={openModalLogout} />
          </div>
        </div>
      </>
      <ModalConfirmation
        open={open}
        onOpen={closeShowModal}
        onSubmit={handlelogout}
        message="¿Está seguro que desea cerrar sesión?"
      />
    </Disclosure>
  );
}
