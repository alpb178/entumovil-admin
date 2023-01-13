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

export default function MenuFooterPage() {
  return (
    <section className="px-4 pt-0 pb-10">
      <div className="container mx-auto">
        <div className="item-center flex">
          <div class="w-1/2  p-2 text-center">
            <img alt="Card Image" src="/img/sticky-logo.png" height={581} />
          </div>
          <div class=" ml-10 w-1/2  p-2 text-center">Enlaces</div>
          <div class=" ml-10 w-1/2  p-2 text-center">Enlaces</div>
          <div class=" ml-10 w-1/2  p-2 text-center">Contacto</div>
        </div>
      </div>
    </section>
  );
}
