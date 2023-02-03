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
        <Button className="flex bg-white text-left text-lg font-black text-black shadow-none hover:text-red hover:shadow-none">
          {title} <i className="fas fa-chevron-down fa-xs  mr-6 mt-3 ml-1" />
        </Button>
      </PopoverHandler>
      <PopoverContent className="mt-5">
        <div className="relative grid gap-6 bg-white px-5 py-6  text-lg font-medium text-black sm:gap-8 sm:p-8">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition duration-150 ease-in-out hover:text-red "
            >
              <p
                className={`align-center flex content-center  hover:before:content-['-']`}
              >
                {item.name}
              </p>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
