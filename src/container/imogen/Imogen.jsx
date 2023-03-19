import React from "react";
import FooterSite from "@/component/footer";

import {
  INMOCOR_CONTRACT_DRATER_ARG_PAGE,
  INMOCOR_CONTRACT_DRATER_DE_PAGE,
  INMOCOR_CONTRACT_DRATER_EEUU_PAGE,
  INMOCOR_CONTRACT_DRATER_ESP_PAGE,
  INMOCOR_CONTRACT_DRATER_FR_PAGE,
  INMOCOR_CONTRACT_DRATER_IR_PAGE,
  INMOCOR_CONTRACT_DRATER_IT_PAGE,
  INMOCOR_CONTRACT_DRATER_UK_PAGE,
} from "@/lib/constants";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import TopImage from "@/component/topImage";

export function Inmogen() {
  return (
    <>
      <TopImage
        name="INMOGEN"
        description="Redacción de Contratos de Compraventa"
        imageUrl="cabecera-contratos-inmocor.jpg"
      />
      <section className="bg-gray-50  bg-legislation-gray px-4 pb-20 pt-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="w-full text-gray">
            <p className="mb-6 mt-10 text-5xl font-black text-red">
              INMOGEN: Contratos de Compraventa Inmobiliaria
            </p>
            <a className="font-black">INMOGEN</a> es una herramienta para la
            redacción de contratos de compraventa de vivienda en español
            (variedades de Argentina y España), inglés (de Irlanda, EE.UU. y
            Reino Unido), alemán, francés, italiano y catalán. En aquellos casos
            con los que la Ley permite una redacción flexible, el usuario podrá
            elegir entre diferentes opciones. En otros, en los que la Ley exige
            una estructura fija (como es el caso de EE.UU, para el Estado de
            Luisiana, se ha elaborado una plantilla de redacción).
          </div>
        </div>
      </section>

      <section className=" mb-20 flex px-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="item-center content-center  ">
            <div className="row px-md-4 m-0 bg-white py-5">
              <div className="col-12 mb-md-0 mb-4">
                <div className="section-title mb-4">
                  <h1 className="mb-6 block font-sans text-5xl font-semibold leading-tight tracking-normal text-black antialiased">
                    Redactores disponibles
                  </h1>
                  <p className="mb-5">
                    Seleccione el ámbito legislativo de su interés. También
                    puede utilizar el menú superior para ello.
                  </p>
                  <p className="mb-12">
                    En el caso de EEUU existe una estructura fija, por lo que se
                    ofrece una plantilla con campos a cumplimentar. Lo mismo
                    sucede con el inglés de variedad irlandesa.
                  </p>
                </div>
                <ul className="list-check ">
                  <li className="border-bottom flex-inline mb-4 flex pb-3">
                    <div className="rounded-full bg-legislation-gray">
                      <i className="fas fa-check m-1 rounded-full text-red" />
                    </div>
                    <h5 className="flex-inline ml-5 flex ">
                      <a
                        href={INMOCOR_CONTRACT_DRATER_ESP_PAGE}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Redactor en español (variedad peninsular)
                        <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                      </a>
                    </h5>
                  </li>
                  <li className="border-bottom flex-inline mb-4 flex pb-3">
                    <div className="rounded-full bg-legislation-gray">
                      <i className="fas fa-check m-1 rounded-full text-red" />
                    </div>
                    <h5 className="ml-5">
                      <a
                        href={INMOCOR_CONTRACT_DRATER_ARG_PAGE}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Redactor en español (variedad argentina)
                        <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                      </a>
                    </h5>
                  </li>
                  <li className="border-bottom flex-inline mb-4 flex pb-3">
                    <div className="rounded-full bg-legislation-gray">
                      <i className="fas fa-check m-1 rounded-full text-red" />
                    </div>
                    <h5 className="ml-5">
                      <a
                        href={INMOCOR_CONTRACT_DRATER_UK_PAGE}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Redactor en inglés (variedad británica)
                        <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                      </a>
                    </h5>
                  </li>
                  <li className="border-bottom flex-inline mb-4 flex pb-3">
                    <div className="rounded-full bg-legislation-gray">
                      <i className="fas fa-check m-1 rounded-full text-red" />
                    </div>
                    <h5 className="ml-5">
                      <a
                        href={INMOCOR_CONTRACT_DRATER_EEUU_PAGE}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Redactor en inglés (variedad EEUU)
                        <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                      </a>
                    </h5>
                  </li>
                  <li className="border-bottom flex-inline mb-4 flex pb-3">
                    <div className="rounded-full bg-legislation-gray">
                      <i className="fas fa-check m-1 rounded-full text-red" />
                    </div>
                    <h5 className="ml-5">
                      <a
                        href={INMOCOR_CONTRACT_DRATER_IR_PAGE}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Redactor en inglés (variedad Irlanda)
                        <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                      </a>
                    </h5>
                  </li>
                  <li className="border-bottom flex-inline mb-4 flex pb-3">
                    <div className="rounded-full bg-legislation-gray">
                      <i className="fas fa-check m-1 rounded-full text-red" />
                    </div>
                    <h5 className="ml-5">
                      <a
                        href={INMOCOR_CONTRACT_DRATER_FR_PAGE}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Redactor en francés
                        <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                      </a>
                    </h5>
                  </li>
                  <li className="border-bottom flex-inline mb-4 flex pb-3">
                    <div className="rounded-full bg-legislation-gray">
                      <i className="fas fa-check m-1 rounded-full text-red" />
                    </div>
                    <h5 className="ml-5">
                      <a
                        href={INMOCOR_CONTRACT_DRATER_IT_PAGE}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Redactor en italiano
                        <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                      </a>
                    </h5>
                  </li>
                  <li className="border-bottom flex-inline mb-4 flex pb-3">
                    <div className="rounded-full bg-legislation-gray">
                      <i className="fas fa-check m-1 rounded-full text-red" />
                    </div>
                    <h5 className="ml-5">
                      <a
                        href={INMOCOR_CONTRACT_DRATER_DE_PAGE}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Redactor en alemán
                        <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSite />
    </>
  );
}

export default Inmogen;
