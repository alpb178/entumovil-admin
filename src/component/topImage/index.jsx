import { Typography } from "@material-tailwind/react";
import NavbarMenuPages from "../navbars/NavbarMenuPages";

export default function TopImage({ name, imageUrl, description }) {
  return (
    <div className="relative flex h-96">
      <div className="absolute   top-0 h-96 w-full  bg-center backdrop-brightness-50">
        <img
          alt="Card Image"
          className="h-full w-full backdrop-brightness-50"
          src={`/img/bg/${imageUrl}`}
        />
      </div>

      <div className="absolute   top-0 h-96 w-full  bg-center backdrop-brightness-50"/>

      <div className="max-w-8xl container relative mx-auto mt-10">
        <NavbarMenuPages />
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <Typography variant="h1" color="white" className="mb-6 font-black">
              {name}
            </Typography>
            <Typography variant="h5" color="white" className="mb-6 font-black">
              {description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
