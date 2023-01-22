import { INMOCOR_HOME_PAGE } from "@/lib/constants";

import { Typography } from "@material-tailwind/react";
import {
  ChevronRightIcon,
  InboxIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export default function MenuFooterPage() {
  return (
    <section className="px-4 pt-0 pb-10">
      <div className="container mx-auto">
        <div className="item-center flex">
          <div class="w-1/2  p-2">
            <img alt="Card Image" src="/img/sticky-logo.png" height={581} />
            <div className="content-left mt-5">
              <p className="text-red-500">    
                Análisis, redacción y traducción (inglés-español)
              </p>
              <p className="text-gray-600">
                
                del contrato de compraventa de vivienda basados en corpus: un
                estudio aplicado a España, Argentina, Estados Unidos, Reino
                Unido
              </p>
            </div>
          </div>
          <div className="w-1/2 ">
            <Typography variant="h5" color="black" className="mb-6">
              Enlaces
            </Typography>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="content-left mt-5  flex text-gray-600">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                ESPAÑA, POTENCIA TURÍSTICA
              </div>
            </a>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center text-gray-600">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                BOOM INMOBILIARIO
              </div>
            </a>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="mt-5  flex content-center text-gray-600">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                BRITÁNICOS COMPRAN MÁS
              </div>
            </a>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center text-gray-600">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                INVERSIÓN EN ARGENTINA
              </div>
            </a>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center text-gray-600">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                SITUACIÓN INMOBILIARIA
              </div>
            </a>
          </div>
          <div className="w-1/2 ">
            <Typography variant="h5" color="black" className="mb-6">
              Enlaces
            </Typography>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="content-left mt-5  flex text-gray-600">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                ESPAÑA, POTENCIA TURÍSTICA
              </div>
            </a>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center text-gray-600">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                BOOM INMOBILIARIO
              </div>
            </a>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="mt-5  flex content-center text-gray-600">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                BRITÁNICOS COMPRAN MÁS
              </div>
            </a>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center text-gray-600">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                INVERSIÓN EN ARGENTINA
              </div>
            </a>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="mt-5 flex content-center text-gray-600">
                <ChevronRightIcon className="mr-2 h-5 w-5" />
                SITUACIÓN INMOBILIARIA
              </div>
            </a>
          </div>
          <div className="w-1/2 ">
            <Typography variant="h5" color="black" className="mb-6">
              Contacto
            </Typography>
            <a className="" href={INMOCOR_HOME_PAGE}>
              <div className="content-left mt-5  flex text-gray-600">
                <MapPinIcon className="mr-2 h-5 w-5" />
                Campus de, Bulevar Louis Pasteur, 27, Facultad Filosofía y
                Letras (Departamento de Traducción e Interpretación, 29010
                Málaga)
              </div>
            </a>
            <a className="" href={INMOCOR_HOME_PAGE}>
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
