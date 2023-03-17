import FooterSite from "@/component/footer";

import Table from "@/component/table";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import TopImage from "@/component/topImage";
import { useState } from "react";
export default function Glosary() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="text-xl md:w-full">
      <TopImage name="Glosario" imageUrl="cabecera-glosario-inmocor.jpg" />
      <section className="bg-gray-50  bg-legislation-gray px-4 pb-20 pt-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="row px-md-4 m-0 pt-5 pb-1 md:w-full">
            <div className="col-12 mb-md-0 mb-4">
              <div className="section-title text-center">
                <p className="mb-6 text-4xl font-black text-ocre-red">
                  Un completo glosario multilingüe especializado
                </p>
                <p className="display-10 text-center">
                  La gestión del corpus INMOCOR ha dado como resultado un
                  glosario multilingüe para la traducción de los contratos de
                  compraventa de viviendas.
                  <br />
                  En concreto, incluye las siguientes lenguas y variedades
                  diatópicas:
                </p>
                <ul className="list-check inline-grid  grid-cols-3 text-2xl">
                  <li className="m-5">
                    <i className="fas fa-flag m-2 rounded-full bg-white text-red"></i>
                    <strong>Español(variedad peninsular)</strong>
                  </li>
                  <li className="m-5">
                    <i className="fas fa-flag m-2 rounded-full bg-white text-red"></i>
                    <strong>Español (variedad argentina)</strong>
                  </li>
                  <li className="m-5">
                    <i className="fas fa-flag m-2 rounded-full bg-white text-red"></i>
                    <strong>Inglés (variedad británica)</strong>
                  </li>
                  <li className="m-5">
                    <i className="fas fa-flag m-2 rounded-full bg-white text-red"></i>
                    <strong>Inglés (variedad estadounidense)</strong>
                  </li>
                  <li className="m-5">
                    <i className="fas fa-flag m-2 rounded-full bg-white text-red"></i>
                    <strong>Inglés (variedad irlandesa)</strong>
                  </li>
                  <li className="m-5">
                    <i className="fas fa-flag m-2 rounded-full bg-white text-red"></i>
                    <strong>Francés</strong>
                  </li>
                  <li className="m-5">
                    <i className="fas fa-flag m-2 rounded-full bg-white text-red"></i>
                    <strong>Italiano</strong>
                  </li>
                  <li className="m-5">
                    <i className="fas fa-flag m-2 rounded-full bg-white text-red"></i>
                    <strong>Alemán</strong>
                  </li>
                  <li className="m-5">
                    <i className="fas fa-flag m-2 rounded-full bg-white text-red"></i>
                    <strong>Catalán</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-4 pb-20 pt-4 text-xl text-gray">
        <div className="container mx-auto">
          <p className="mt-10 text-4xl  text-ocre-red">
            Seleccione la(s) lengua(s) en las que desee visualizar el Glosario:
          </p>

          <select
            multiple
            className="mb-2 mt-10 w-11/12 bg-legislation-gray px-5 py-4"
          >
            <option>Glosario en español (variedad peninsular)</option>
            <option>Glosario en español (variedad argentina)</option>
            <option>Glosario en inglés (variedad británica)</option>
            <option>Glosario en inglés (variedad estadounidense)</option>
            <option>Glosario en inglés (variedad irlandesa)</option>
            <option>Glosario en francés</option>
            <option>Glosario en italiano</option>
            <option>Glosario en alemán</option>
            <option>Glosario en catalán</option>
          </select>

          <p className="mt-10">
            Permite seleccionar varios glosarios pulsando Crtl (Windows) o Cmd
            (MacOS).
          </p>
          <button
            onClick={() => setVisible(!visible)}
            className="flex-inline mt-10 flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white"
          >
            Mostrar
            <ArrowRightIcon className="mt flex-inline ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
          </button>
        </div>
      </section>

      <section className="bg-gray-50 px-4 pb-20 pt-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="row px-md-4 m-0 pt-5 pb-1">
            <div className="col-12 mb-md-0 mb-4">
              <Table visible={visible} />
            </div>
          </div>
        </div>
      </section>

      <FooterSite />
    </div>
  );
}
