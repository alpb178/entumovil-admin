import {
  BOOM_INMOBILIARIO,
  BRITANICOS_COMPRAN_MAS,
  ESPAñA_POTENCIA_TURISTICA,
  INMOCOR_HOME_PAGE,
  INVERSION_EN_ARGENTINA,
  SITUACION_INMOBILIARIA,
} from "@/lib/constants";

import { Typography } from "@material-tailwind/react";
import {
  ChevronRightIcon,
  InboxIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import styles from "./menuFooter.module.scss";

export default function MenuFooterPage() {
  return (
    <section className="bg-gradient-to-r from-gradient-for to-gradient-to px-4">
      <div className="container mx-auto">
        <div className="item-center flex">
          <div className="m-10  bg-white">
            <div className="flex">
              <div class="m-5 w-1/2  bg-white p-2">
                <img
                  alt="Card Image"
                  className="h-26 w-204"
                  src="/img/sticky-logo.png"
                />
                <div className="content-left mt-5">
                  <p className="text-black-600">
                    Compilación de un macrocorpus para la generación de recursos
                    multilingües en el ámbito inmobiliario
                    (español-inglés/francés/italiano) (Proyecto de excelencia
                    PAIDI 2020, ref. P20-109, Junta de Andalucía).
                  </p>
                </div>
              </div>
              <div className="m-8 w-1/2 ">
                <Typography variant="h5" color="black" className="mb-6">
                  Contacto
                </Typography>
            
                  <div className="content-left mt-5  flex text-gray-600">
                    <MapPinIcon className="mr-2 h-5 w-5 text-red" />
                    Campus de Teatinos. Bulevar Louis Pasteur, 27 Facultad
                    Filosofía y Letras (Departamento de Traducción e
                    Interpretación) 29010 Málaga
                  </div>
              
                  <div className="mt-5 flex content-center text-gray-600">
                    <InboxIcon className="mr-2 h-5 w-5 text-red" />
                    <p className="text-red">seghiri@uma.es</p>
                  </div>
               
                  <div className="mt-5 flex content-center text-gray-600">
                    <PhoneIcon className="mr-2 h-5 w-5 text-red" />
                    952 137 357
                  </div>
              
              </div>
            </div>
            <p className="text-black-600 content-left m-5 p-2  text-sm font-normal ">
              Editado en Málaga por Miriam Seghiri, Míriam Pérez-Carrasco y
              Lorena Arce Romeral. Esta base de datos está registrada en la
              Biblioteca Nacional con el ISSN XXXX-XXXX. El presente trabajo ha
              sido realizado en el seno del proyecto INMOCOR (Ref. P20-00109).
            </p>
            <div className="flex">
              <div class="m-5 w-1/2  bg-white p-2">
                <img
                  alt="Card Image"
                  className="h-92 w-231"
                  src="/img/logos/junta-andalucia-logo-inmocor-compraventa-inmuebles.jpg"
                />
              </div>
              <div class="m-5 w-1/2  bg-white p-2">
                <img
                  alt="Card Image"
                  className="h-92 w-231"
                  src="/img/logos/universidad-malaga-logo-inmocor-compraventa-inmuebles.jpg"
                />
              </div>
              <div class="m-5 w-1/2  bg-white p-2">
                <img
                  alt="Card Image"
                  className="h-92 w-231"
                  src="/img/logos/lexytrad-logo-inmocor-compraventa-inmuebles.jpg"
                />
              </div>
              <div class="m-5 w-1/2  bg-white p-2">
                <img
                  alt="Card Image"
                  className="h-92 w-231"
                  src="/img/logos/iuitlm-logo-inmocor-compraventa-inmuebles.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
