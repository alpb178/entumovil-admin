import { APP_NAME, INMOCOR_HOME_PAGE } from "@/lib/constants";

import { Typography } from "@material-tailwind/react";
import {
  ArrowDownIcon,
  ArrowLongRightIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import styles from "./topImage.module.scss";
import NavbarMenu from "../navbars/NavbarMenu";
import NavbarMenuPages from "../navbars/NavbarMenuPages";

export default function TopImage({ name, imageUrl }) {
  return (
    <div className="relative flex h-96">
      <div
        className={`absolute top-0 h-5/6 w-full bg-[url('/img/${imageUrl}')]  bg-center`}
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
        <div className="flex flex-wrap content-center items-center">
          <div className="ml-auto mr-auto w-full px-4  text-center lg:w-8/12">
            <Typography variant="h6" color="black" className="mb-6">
              <a className={styles.Icon} href={INMOCOR_HOME_PAGE}>
                <div className="flex content-center">
                  <HomeIcon className="mr-2 h-5 w-5" />
                  Inicio / {name}
                </div>
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
