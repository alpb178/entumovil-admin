import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemsMenuNavbar({ title, items }) {
  return (
    <Popover className="relative text-lg ">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? " text-red" : "text-black",
              "group inline-flex items-center  hover:text-red "
            )}
          >
            {title}
            <ChevronDownIcon
              className={classNames(
                open ? " text-red" : "text-black",
                "ml-1 h-6 w-6  group-hover:text-red"
              )}
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out  duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-4 w-screen max-w-sm -translate-x-1/2 transform  px-2 sm:px-0">
              <div className="overflow-hidden  shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid rounded gap-6 mt-2  bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 block  p-3 transition duration-150 ease-in-out hover:text-red"
                    >
                      <p className="align-center flex content-center">
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
