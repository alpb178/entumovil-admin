import React from "react";
import { Card, Typography, CardBody } from "@material-tailwind/react";

import FooterSite from "@/component/footer";
import NavbarMenuPages from "@/component/navbars/NavbarMenuPages";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import TopImage from "@/component/topImage";

export function ManagmentInmocor() {
  return (
    <>
      <TopImage
        name="Macrocorpus INMOCOR"
        description="Legislación y Contratos"
        imageUrl="cabecera-legislacion-generalidades-inmocor.jpg"
      />
      <section className="bg-gray-50 -mt-14 px-4 pb-20 pt-4 text-xl">
        <div className="container mx-auto ">
          <Card className="shadow-gray-500/10 rounded-none shadow-lg">
            <CardBody className="px-8 text-left">
              <div className="m-5">
                <div className="flex sm:block md:block  lg:flex">
                  <div className="w-1/3">
                    <p
                      variant="h2"
                      className="m-5 mb-6 text-5xl font-black text-red"
                    >
                      Macrocorpus INMOCOR
                    </p>
                  </div>
                  <div className="m-5 w-full text-gray">
                    La presente herramienta pone a disposición el macrocorpus
                    INMOCOR, que contiene, por un lado, un corpus de legislación
                    aplicable a la compraventa inmobiliaria (INMOLAW) y, por
                    otro, un corpus de contratos de compraventa de viviendas
                    (INMOCOR). Con esta herramienta se pueden llevar a cabo
                    búsquedas terminológicas a partir de un gestor de consulta
                    que permite categorizar por lengua y variedad diatópica, a
                    saber, español (variedades de Argentina y España), inglés
                    (de Irlanda, EE.UU. y Reino Unido), alemán, francés,
                    italiano y catalán.
                  </div>
                </div>
                <div className="mt-28 text-ocre-red">
                  Para empezar, defina su búsqueda
                </div>
                <div className="from-group mt-5">
                  <div className="text-base">Su búsqueda</div>
                  <div className="mt-2">
                    <input
                      className="form-control w-full bg-legislation-gray p-4"
                      placeholder="Introduzca los términos de búsqueda..."
                    ></input>
                  </div>
                </div>
                <div className="mt-10 text-ocre-red">
                  Y a continuación, seleccione el/los corpus/subcorpus de su
                  interés:
                </div>
              </div>
              <div className="m-5 mb-4 mt-5 flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                ></input>
                <p
                  variant="h4"
                  className="m-2 mb-6 mt-6 text-2xl font-black text-ocre-red"
                >
                  Macrocorpus INMOCOR
                </p>
              </div>
              <p className="m-7">
                Realiza búsquedas en todos los textos, legislación y contratos,
                en todas las lenguas.
              </p>
              <div className="mb-10 flex sm:block md:block lg:flex">
                <div className="m-5 w-1/2 md:w-full">
                  <div className="mb-4 mt-5 flex items-center">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    ></input>
                    <p
                      variant="h4"
                      className="m-2 mb-6 mt-6 text-2xl font-black text-ocre-red"
                    >
                      CORPUS DE LEGISLACIÓN INMOLAW
                    </p>
                  </div>

                  <div className="mb-10 ">
                    Corpus de Legislación aplicable a la Compraventa
                    Inmobiliaria*
                  </div>
                  <div className="overflow-auto shadow-none">
                    <select
                      multiple
                      className="form-control mb-2 bg-legislation-gray px-5 py-4 shadow-none"
                      id="InmolawFormControlSelect"
                    >
                      <option>
                        Subcorpus INMOLAW comunitario Unión Europea
                      </option>
                      <option>
                        Subcorpus INMOLAW en español (variedad peninsular)
                      </option>
                      <option>
                        Subcorpus INMOLAW en español (variedad argentina)
                      </option>
                      <option>
                        Subcorpus INMOLAW en inglés (variedad británica)
                      </option>
                      <option>
                        Subcorpus INMOLAW en inglés (variedad estadounidense)
                      </option>
                      <option>
                        Subcorpus INMOLAW en inglés (variedad irlandesa)
                      </option>
                      <option>Subcorpus INMOLAW en francés</option>
                      <option>Subcorpus INMOLAW en italiano</option>
                      <option>Subcorpus INMOLAW en alemán</option>
                      <option>Subcorpus INMOLAW en catalán</option>
                    </select>
                    <p className="mt-5 text-justify">
                      Permite buscar, en todos los subcorpus de{" "}
                      <strong>INMOLAW</strong>, legislación en todas las
                      lenguas. Puede seleccionar más de un subcorpus pulsando
                      Crtl (Windows) o Cmd (MacOS).
                    </p>
                  </div>
                </div>
                <div className="m-5 w-1/2 md:w-full">
                  <div className="mb-4 mt-5 flex items-center">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    ></input>
                    <p
                      variant="h4"
                      className="m-2 mb-6 mt-6 text-2xl font-black text-ocre-red"
                    >
                      CORPUS DE CONTRATACIÓN INMOCOR
                    </p>
                  </div>

                  <div className="mb-10 ">
                    Corpus de Contratos de Compraventa Inmobiliaria*
                  </div>
                  <div className="overflow-auto shadow-none">
                    <select
                      multiple
                      className="form-control mb-2 bg-legislation-gray px-5 py-4 shadow-none"
                      id="InmolawFormControlSelect"
                    >
                      <option>
                        Subcorpus INMOCOR en español (variedad peninsular)
                      </option>
                      <option>
                        Subcorpus INMOCOR en español (variedad argentina)
                      </option>
                      <option>
                        Subcorpus INMOCOR en inglés (variedad británica)
                      </option>
                      <option>
                        Subcorpus INMOCOR en inglés (variedad estadounidense)
                      </option>
                      <option>
                        Subcorpus INMOCOR en inglés (variedad irlandesa)
                      </option>
                      <option>Subcorpus INMOCOR en francés</option>
                      <option>Subcorpus INMOCOR en italiano</option>
                      <option>Subcorpus INMOCOR en alemán</option>
                      <option>Subcorpus INMOCOR en catalán</option>
                    </select>
                    <p className="mt-5 text-justify">
                      Permite buscar, en todos los subcorpus de{" "}
                      <strong>INMOCOR</strong>, contratos en todas las lenguas.
                      Puede seleccionar más de un subcorpus pulsando Crtl
                      (Windows) o Cmd (MacOS).
                    </p>
                  </div>
                </div>
              </div>
              <p className="m-5 flex w-full">
                Si lo desea, puede seleccionar dos o más subcorpus de ambos
                bloques. Por ejemplo, puede que se pueda marcar "Subcorpus
                INMOCOR en italiano" y "Subcorpus INMOLAW en italiano"
              </p>
              <button className="flex-inline m-5 mt-5 flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white">
                Buscar
                <ArrowRightIcon className="mt flex-inline ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
              </button>
            </CardBody>
          </Card>
        </div>
      </section>

      <FooterSite />
    </>
  );
}

export default ManagmentInmocor;
