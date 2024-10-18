/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { ButtonCancel, ButtonSubmit } from "../button";

import { dictButtonAccept, dictButtonCancel, dictNamePortal } from "@/lib/dict";

export const Modal = (props) => {
  const {
    children,
    open,
    onOpen,
    onSubmit,
    hideButton,
    isInformation,
    nameButtonConfirm,
    nameButtonCancel,
    nameSection,
    height,
  } = props;
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
              <div className="flex h-screen items-center justify-center">
                <div className="flex h-full items-center justify-center">
                  <div
                    className={`border-1 flex h-[${
                      height ?? "100px"
                    }] w-[437px] border-b flex-col items-center justify-center rounded-lg border border-custom-border bg-field`}
                  >
                    <div
                      className="flex w-404px  flex-col border-b mb-[15px]
               text-left"
                    >
                      <div className=" flex w-404px flex-row">
                        <img
                          className="mt-[15px] h-8 w-auto"
                          src="/public/img/logotipo.svg"
                          alt={dictNamePortal}
                        />
                        <div className="flex flex-col">
                          <a className="mt-[15px] font-humanst text-24px font-light">
                            {nameSection}
                          </a>
                          <a className="mb-[5px] font-humanst text-24px font-bold">
                          Administración de cuentas
                          </a>
                        </div>
                      </div>
                    </div>

                    {children}
                    {!hideButton && (
                      <div className="mb-[15px] mt-[15px] w-404px">
                        <ButtonCancel
                          onClick={() => onOpen(false)}
                          className="m-4 border-t p-4"
                          name={nameButtonCancel ?? dictButtonCancel}
                           witdh="[189px]"
                          height="[48px]"
                        />
                        {!isInformation && (
                          <ButtonSubmit
                            onClick={() => onSubmit()}
                            name={nameButtonConfirm ?? dictButtonAccept}
                            witdh={!hideButton ? "[189px]" : "[404px]"}
                            height="[48px]"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
