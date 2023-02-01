import { Typography } from "@material-tailwind/react";
import NavbarMenuPages from "../navbars/NavbarMenuPages";

export default function TopImage({ name, imageUrl }) {
  const path=`url('/img/bg/cabecera-legislacion-espana-inmocor.jpg')`
  return (
    <div className="h-80 w-full">
      {console.log(path)}
      <div
        className={`absolute top-0 h-80 w-full bg-[${path}] bg-center`}
      />
      <div className="absolute top-0 h-full w-full  bg-center" />
      <div className="max-w-8xl mt-20 container relative mx-auto">
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
