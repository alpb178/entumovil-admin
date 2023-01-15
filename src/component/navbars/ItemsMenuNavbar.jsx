import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

import styles from "./navbar.module.scss";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemsMenuNavbar({ title, items }) {
  return (
    <Popover className="relative rounded-none">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-red-500 rounded-none" : "text-gray-900",
              "group inline-flex items-center font-medium rounded-none  hover:text-red-500 "
            )}
          >
            {title}
            <ChevronDownIcon
              className={classNames(
                open ? "text-red-500 rounded-none" : "text-gray-900",
                "ml-2 h-5 w-5 rounded-none group-hover:text-red-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out rounded-none duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute rounded-none left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-none shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative rounded-none grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 block  p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <p className={styles.p}>
                        {item.name}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
