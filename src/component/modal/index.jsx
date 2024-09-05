/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { ButtonCancel, ButtonSubmit } from "../button";
import { LogoEntuMovil } from "../logo/logo";

export const Modal = (props) => {
  const { children, open, onOpen, onSubmit, hideButton } = props;
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => onOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-lg transition-all">
                <LogoEntuMovil />
                {children}
                {!hideButton && (
                  <div className=" border-t  text-center">
                    <ButtonSubmit
                      onClick={() => onSubmit()}
                      className="m-4 border-t p-4"
                      name="Aceptar"
                    />

                    <ButtonCancel
                      onClick={() => onOpen(false)}
                      className="m-4 border-t p-4"
                      name="Cancelar"
                    />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
