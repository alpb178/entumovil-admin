/*import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemsMenuNavbar({ title, items }) {
  return (
    <Popover className="relative text-lg  ">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? " text-red " : "text-black",
              "group inline-flex items-center  hover:text-red  "
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
                <div className="relative mt-2 grid gap-6 rounded  bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="transition duration-150 ease-in-out hover:text-red"
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
}*/

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

export default function ItemsMenuNavbar({ title, items }) {
  return (
    <Popover placement="bottom-start">
      <PopoverHandler>
        <Button className="shadow-none mr-4 bg-white text-black text-lg flex text-left font-black hover:shadow-none hover:text-red">
          {title} <i class="fas mr-6 mt-3  ml-1 fa-chevron-down fa-xs"/>
        </Button>
      </PopoverHandler>
      <PopoverContent className="mt-2">
        <div className="relative grid gap-6 text-black text-lg font-medium  bg-white px-5 py-6 sm:gap-8 sm:p-8">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition duration-150 ease-in-out hover:text-red "
            >
              <p className={`align-center flex content-center  hover:before:content-['-']`}>{item.name}</p>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
