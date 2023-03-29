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
      <PopoverContent className="mt-3">
        <div className="relative bg-white text-lg font-black text-black sm:gap-8 sm:p-8">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-red "
            >
              <p
                className={`align-center mb-5 flex content-center  hover:before:content-['-']`}
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
