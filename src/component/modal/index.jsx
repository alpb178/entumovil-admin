import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@material-tailwind/react";
//import { Form, Formik } from "formik";
import React, { Fragment, useEffect, useState } from "react";

const Modal = ({ children, open, onOpen, isNewData }) => {
  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle("Modal");
  }, [isNewData]);

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
                {children}
                <div className=" border-t  text-center">
                  <Button
                    variant="gradient"
                    size="sm"
                    onClick={() => onOpen(false)}
                    className="mt-2 border-t"
                  >
                    <span>Cerrar</span>
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
