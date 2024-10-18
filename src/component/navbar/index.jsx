import React from "react";

import { useState } from "react";

import { Disclosure } from "@headlessui/react";
import { MenuItemNavbar } from "./item-navbar";

import { useLogout } from "@/hooks/logout/useLogout";
import { dictNamePortal } from "@/lib/dict";
import { Modal } from "../modal";

export function NavbarUserLoggued() {
  const { logout } = useLogout();

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
                  className="m-2 h-8 w-auto"
                  src="/public/img/logo_negro.svg"
                  alt={dictNamePortal}
                />
                {dictNamePortal}
              </div>
            </div>
            <MenuItemNavbar openModalLogout={openModalLogout} />
          </div>
        </div>
      </>
      <Modal
        open={open}
        onOpen={closeShowModal}
        onSubmit={handlelogout}
        message="¿Está seguro que desea cerrar sesión?"
        height="210px"
        nameSection="Cerrar sesión en:"
      >
        ¿Está seguro que desea cerrar sesión?
      </Modal>
    </Disclosure>
  );
}
