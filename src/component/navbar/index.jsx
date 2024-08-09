import React from "react";
import { useNavigate } from "react-router-dom";
import { URL_HOME, URL_LOGIN, URL_PROFILE_ADMIN } from "@/lib/constant";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import {ModalLogout} from "../modal-confirmation/modal-logout-confirmation";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useFindRoles } from "@/hooks/useRoles";
import {Loader} from "../loader";

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
  const closeShowModal = () => {
    setOpen(false);
  };

  const handleViewAdmin = () => {
    navigate(URL_PROFILE_ADMIN);
  };

  const handleViewProfile = () => {
    navigate(URL_HOME);
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
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <a className="ml-3 mr-3 mt-2 mb-2 rounded-full text-lg text-white">
                            {initialLetters}
                          </a>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Items>
                            <div
                              className="flex cursor-pointer items-center justify-center p-2"
                              onClick={() => handleViewProfile()}
                            >
                              Perfil
                            </div>
                          </Menu.Items>

                          {isAdmin && (
                            <Menu.Items>
                              <div
                                className="flex cursor-pointer items-center justify-center p-2"
                                onClick={() => handleViewAdmin()}
                              >
                                Admin
                              </div>
                            </Menu.Items>
                          )}

                          <Menu.Items>
                            <div
                              className="flex cursor-pointer items-center justify-center p-2"
                              onClick={() => setOpen(true)}
                            >
                              Cerrar Sesión
                            </div>
                          </Menu.Items>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
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
