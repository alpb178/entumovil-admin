import { APP_NAME, INMOCOR_HOME_PAGE } from "@/lib/constants";

import { Typography } from "@material-tailwind/react";
import {
  ArrowDownIcon,
  ArrowLongRightIcon,
  ChevronRightIcon,
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
          <div class=" ml-10 w-1/2  p-2 text-center">
            Enlaces
            <a className={styles.Icon} href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                ESPAÑA, POTENCIA TURÍSTICA
              </div>
            </a>
            <a className={styles.Icon} href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                BOOM INMOBILIARIO
              </div>
            </a>
            <a className={styles.Icon} href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                BRITÁNICOS COMPRAN MÁS
              </div>
            </a>
            <a className={styles.Icon} href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                INVERSIÓN EN ARGENTINA
              </div>
            </a>
            <a className={styles.Icon} href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                SITUACIÓN INMOBILIARIA
              </div>
            </a>
          </div>
          <div class=" ml-10 w-1/2  p-2 text-center">Enlaces</div>
          <div class=" ml-10 w-1/2  p-2 text-center">Contacto</div>
        </div>
      </div>
    </section>
  );
}
