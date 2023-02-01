import { Typography } from "@material-tailwind/react";
import NavbarMenuPages from "../navbars/NavbarMenuPages";

export default function TopImage({ name, imageUrl }) {
  return (
    <div className="relative flex h-96">
    <div
      className={`absolute top-0 h-5/6 w-full bg-[url('/img/bg/${imageUrl}')]  bg-center`}
    />
    <div className="absolute top-0 h-full w-full  bg-center" />
    <div className="max-w-8xl container relative mx-auto">
    <NavbarMenuPages/>
      <div className="flex flex-wrap items-center">
        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
          <Typography variant="h1" color="black" className="mb-6 font-black">
            {name}
          </Typography>
        </div>
      </div>
     
    </div>
    </div>
  );
}


