import React from "react";
import {
  Card,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  CardBody,
} from "@material-tailwind/react";

import { FeatureCard, TeamCard } from "@/widgets/cards";
import FooterSite from "@/component/footer";
import NavbarMenuPages from "@/component/navbars/NavbarMenuPages";
import MenuFooterPage from "@/component/menuFooterPage";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export function ManagmentInmocor() {
  return (
    <>
      <div className="relative flex h-96 content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg/cabecera-legislacion-generalidades-inmocor.jpg')] bg-cover bg-center" />
        <div className="absolute  top-0 h-full w-full backdrop-brightness-50" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="items-right flex flex-wrap text-right">
            <NavbarMenuPages />
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-black"
              >
                Macrocorpus INMOCOR
              </Typography>
              <Typography variant="h6" color="white" className="font-black">
                Legislación y Contratos
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-50 -mt-20 text-xl px-4 pb-20 pt-4">
        <div className="container mx-auto ">
          <Card className=" shadow-gray-500/10 shadow-lg">
            <CardBody className="px-8 text-left">
              <div className="flex">
                <div className="w-1/3">
                  <p variant="h2" className="mb-6 text-5xl font-black m-5 text-red">
                    Macrocorpus INMOCOR
                  </p>
                </div>
                <div className="w-full text-gray m-5">
                  La presente herramienta pone a disposición el macrocorpus
                  INMOCOR, que contiene, por un lado, un corpus de legislación
                  aplicable a la compraventa inmobiliaria (INMOLAW) y, por otro,
                  un corpus de contratos de compraventa de viviendas (INMOCOR).
                  Con esta herramienta se pueden llevar a cabo búsquedas
                  terminológicas a partir de un gestor de consulta que permite
                  categorizar por lengua y variedad diatópica, a saber, español
                  (variedades de Argentina y España), inglés (de Irlanda, EE.UU.
                  y Reino Unido), alemán, francés, italiano y catalán.
                </div>
              </div>
              <div className="text-ocre-red mt-28">Para empezar, defina su búsqueda</div>
              <div className="from-group mt-5">
                <div className="text-base">Su búsqueda</div>
                <div className="mt-2">
                  <input className="form-control p-4 bg-legislation-gray w-full" placeholder="Introduzca los términos de búsqueda..."></input>
                </div>
              </div>
              <div className="text-ocre-red mt-10">Y a continuación, seleccione el/los corpus/subcorpus de su interés:</div>

              <div class="flex items-center mb-4 mt-5">
                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 focus:ring-blue-500"></input>
                <p variant="h4" className="mb-6 text-2xl font-black text-ocre-red mt-6 m-2">
                  Macrocorpus INMOCOR
                </p>
              </div>
              <p>Realiza búsquedas en todos los textos, legislación y contratos, en todas las lenguas.</p>

              <div className="mb-10 flex ">

              
              
                <div class="w-1/2 m-5">
                  <div className="flex items-center mb-4 mt-5">
                  <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 focus:ring-blue-500"></input>
                  <p variant="h4" className="mb-6 text-2xl font-black text-ocre-red mt-6 m-2">
                    CORPUS DE LEGISLACIÓN INMOLAW
                  </p>
                  </div>
                 
                  <div className="mb-10 ">Corpus de Legislación aplicable a la Compraventa Inmobiliaria*</div>
                  <div className="overflow-auto shadow-none">
                    <select multiple className="form-control mb-2 px-5 py-4 bg-legislation-gray shadow-none" id="InmolawFormControlSelect">
                      <option>Subcorpus INMOLAW comunitario Unión Europea</option>
                      <option>Subcorpus INMOLAW en español (variedad peninsular)</option>
                      <option>Subcorpus INMOLAW en español (variedad argentina)</option>
                      <option>Subcorpus INMOLAW en inglés (variedad británica)</option>
                      <option>Subcorpus INMOLAW en inglés (variedad estadounidense)</option>
                      <option>Subcorpus INMOLAW en inglés (variedad irlandesa)</option>
                      <option>Subcorpus INMOLAW en francés</option>
                      <option>Subcorpus INMOLAW en italiano</option>
                      <option>Subcorpus INMOLAW en alemán</option>
                      <option>Subcorpus INMOLAW en catalán</option>
                    </select>
                    <p className="text-justify mt-5">Permite buscar, en todos los subcorpus de <strong>INMOLAW</strong>, legislación en todas las lenguas. Puede seleccionar más de un subcorpus pulsando Crtl (Windows) o Cmd (MacOS).</p>
                  </div>
                </div>
                <div class="w-1/2 m-5">
                  <div className="flex items-center mb-4 mt-5">
                  <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 focus:ring-blue-500"></input>
                  <p variant="h4" className="mb-6 text-2xl font-black text-ocre-red mt-6 m-2">
                    CORPUS DE LEGISLACIÓN INMOLAW
                  </p>
                  </div>
                 
                  <div className="mb-10 ">Corpus de Legislación aplicable a la Compraventa Inmobiliaria*</div>
                  <div className="overflow-auto shadow-none">
                    <select multiple className="form-control mb-2 px-5 py-4 bg-legislation-gray shadow-none" id="InmolawFormControlSelect">
                    <option>Subcorpus INMOCOR en español (variedad peninsular)</option>
                        <option>Subcorpus INMOCOR en español (variedad argentina)</option>
                        <option>Subcorpus INMOCOR en inglés (variedad británica)</option>
                        <option>Subcorpus INMOCOR en inglés (variedad estadounidense)</option>
                        <option>Subcorpus INMOCOR en inglés (variedad irlandesa)</option>
                        <option>Subcorpus INMOCOR en francés</option>
                        <option>Subcorpus INMOCOR en italiano</option>
                        <option>Subcorpus INMOCOR en alemán</option>
                        <option>Subcorpus INMOCOR en catalán</option>
                    </select>
                    <p className="text-justify mt-5">Permite buscar, en todos los subcorpus de <strong>INMOCOR</strong>, contratos en todas las lenguas. Puede seleccionar más de un subcorpus pulsando Crtl (Windows) o Cmd (MacOS).</p>
                  </div>
                </div>
                </div>
              <p className="flex w-full m-5">Si lo desea, puede seleccionar dos o más subcorpus de ambos bloques. Por ejemplo, puede que se pueda marcar "Subcorpus INMOCOR en italiano" y "Subcorpus INMOLAW en italiano"</p>
              <button class="bg-gradient-to-r from-gradient-for-footer to-gradient-to m-5 text-white font-bold py-2 px-4 rounded mt-5 flex-inline flex">
                  Buscar<ArrowRightIcon className="mt ml-2 flex-inline flex h-7 w-10  font-black text-red hover:w-20" />
                </button>
            </CardBody>
          </Card>
        </div>
      </section>

      <MenuFooterPage />
      <FooterSite />
    </>
  );
}

export default ManagmentInmocor;
