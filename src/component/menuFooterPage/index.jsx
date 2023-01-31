import { BOOM_INMOBILIARIO, BRITANICOS_COMPRAN_MAS, ESPAñA_POTENCIA_TURISTICA, INMOCOR_HOME_PAGE, INVERSION_EN_ARGENTINA, SITUACION_INMOBILIARIA } from "@/lib/constants";

import { Typography } from "@material-tailwind/react";
import {
  ChevronRightIcon,
  InboxIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import styles from "./menuFooter.module.scss";

export default function MenuFooterPage() {
  return (
    <section className="px-4 bg-footer-background pb-10">
      <div className="container mx-auto">
        <div className="item-center flex">
          <div class="w-1/2  p-2 m-5">
            <img alt="Card Image" className="h-26 w-204" src="/img/sticky-logo.png"/>
            <div className="content-left mt-5">
              <p className="text-hover">    
                Análisis, redacción y traducción (inglés-español)
              </p>
              <p className="text-gray-600">
                del contrato de compraventa de vivienda basados en corpus: un
                estudio aplicado a España, Argentina, Estados Unidos, Reino
                Unido
              </p>
            </div>
          </div>
          <div className="w-1/2 m-8 ">
            <Typography variant="h5" color="black" className="mb-6">
              Enlaces
            </Typography>
            <a  href={ESPAñA_POTENCIA_TURISTICA} className={styles.items} >
              <div className="content-left mt-5  flex text-gray-600 hover:text-hover">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                ESPAÑA, POTENCIA TURÍSTICA
              </div>
            </a>
            <a className={styles.items} href={BOOM_INMOBILIARIO}>
              <div className="mt-5 flex content-center text-gray-600 hover:text-hover">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                BOOM INMOBILIARIO
              </div>
            </a>
            <a className={styles.items} href={BRITANICOS_COMPRAN_MAS}>
              <div className="mt-5  flex content-center text-gray-600 hover:text-hover">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                BRITÁNICOS COMPRAN MÁS
              </div>
            </a>
            <a className={styles.items} href={INVERSION_EN_ARGENTINA}>
              <div className="mt-5 flex content-center text-gray-600 hover:text-hover">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                INVERSIÓN EN ARGENTINA
              </div>
            </a>
            <a className={styles.items} href={SITUACION_INMOBILIARIA}>
              <div className="mt-5 flex content-center text-gray-600 hover:text-hover">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                SITUACIÓN INMOBILIARIA
              </div>
            </a>
          </div>
          <div className="w-1/2 m-8 ">
            <Typography variant="h5" color="black" className="mb-6">
              Enlaces
            </Typography>
            <a className={styles.items} href={INMOCOR_HOME_PAGE}>
              <div className="content-left mt-5  flex text-gray-600 hover:text-hover">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                EMPRESAS ESPAÑOLAS
              </div>
            </a>
            <a className={styles.items} href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center text-gray-600 hover:text-hover">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                INVERSIÓN EXTRANJERA
              </div>
            </a>
            <a className={styles.items} href={INMOCOR_HOME_PAGE}>
              <div className="mt-5  flex content-center text-gray-600 hover:text-hover">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                USO DE CORPUS
              </div>
            </a>
            <a className={styles.items} href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center text-gray-600 hover:text-hover">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                TECNOLOGÍA Y TRADUCCIÓN
              </div>
            </a>
            <a className={styles.items} href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center text-gray-600 hover:text-hover">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                ALGORITMO N-COR
              </div>
            </a>
          </div>
          <div className="w-1/2 m-8 ">
            <Typography variant="h5" color="black" className="mb-6">
              Contacto
            </Typography>
            <a className={styles.items} href={INMOCOR_HOME_PAGE}>
              <div className="content-left mt-5  flex text-gray-600">
                <MapPinIcon className="mr-2 h-5 w-5" />
                Campus de, Bulevar Louis Pasteur, 27, Facultad Filosofía y
                Letras (Departamento de Traducción e Interpretación, 29010
                Málaga)
              </div>
            </a>
            <a className={styles.items} href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center text-gray-600">
                <InboxIcon className="mr-2 h-5 w-5" />
                info@inmocor.com
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
