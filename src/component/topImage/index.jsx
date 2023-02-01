import { Typography } from "@material-tailwind/react";
import NavbarMenuPages from "../navbars/NavbarMenuPages";

export default function TopImage({ name, imageUrl, color }) {
  return (
    <div className=" top-0 h-80 w-full bg-center">
      <div className="absolute top-0 h-80 w-full bg-center">
        <img alt="Card Image" className="h-80 w-full" src={`/img/bg/${imageUrl}.jpg`} />
      </div>

      <div className="max-w-8xl container relative mx-auto mt-20">
        <NavbarMenuPages />
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <Typography variant="h1" color="white" className="mb-6 font-black">
              {name}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
