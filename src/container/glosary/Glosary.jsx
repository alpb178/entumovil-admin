import FooterSite from "@/component/footer";

import Table from "@/component/table";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import TopImage from "@/component/topImage";
import { useState } from "react";
export default function Glosary() {
  const [valueSelect, setValueSelect] = useState([]);

  const getValueSelect = () => {
    var selected = [];

    for (var option of document.getElementById("glosary").options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    return setValueSelect(selected);
  };

  const resetSelectElement = (selectElement) => {
    var options = selectElement.options;
    for (var i = 0, iLen = options.length; i < iLen; i++) {
      if (options[i].defaultSelected) {
        selectElement.selectedIndex = i;
        return;
      }
    }

    selectElement.selectedIndex = -1;
    getValueSelect()
  };

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
            id="glosary"
            className="mb-2 mt-10 w-11/12 bg-legislation-gray px-5 py-4"
          >
            <option value="ESP">
              Glosario en español (variedad peninsular)
            </option>
            <option value="ARG">
              Glosario en español (variedad argentina)
            </option>
            <option value="UK">Glosario en inglés (variedad británica)</option>
            <option value="US">
              Glosario en inglés (variedad estadounidense)
            </option>
            <option value="IR">Glosario en inglés (variedad irlandesa)</option>
            <option value="FR">Glosario en francés</option>
            <option value="IT">Glosario en italiano</option>
            <option value="DE">Glosario en alemán</option>
            <option value="CA">Glosario en catalán</option>
          </select>

          <p className="mt-10">
            Permite seleccionar varios glosarios pulsando Crtl (Windows) o Cmd
            (MacOS).
          </p>
          <div className="mt-7 flex w-11/12">
            <button
              onClick={() => getValueSelect()}
              className="flex-inline mr-auto flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white"
            >
              Mostrar Seleccionados
              <ArrowRightIcon className="mt flex-inline ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
            </button>
            <button
              onClick={() =>
                resetSelectElement(document.getElementById("glosary"))
              }
              className="flex-inline ml-auto flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white"
            >
               <ArrowLeftIcon className="mt flex-inline ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
              Mostrar Todos
             
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 pb-20 pt-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="row px-md-4 m-0 pt-5 pb-1">
            <div className="col-12 mb-md-0 mb-4">
              <Table visible={valueSelect} />
            </div>
          </div>
        </div>
      </section>

      <FooterSite />
    </div>
  );
}
