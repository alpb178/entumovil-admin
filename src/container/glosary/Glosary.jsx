import FooterSite from "@/component/footer";
import TopImage from "@/component/topImage";
import MenuFooterPage from "@/component/menuFooterPage";
import Table from "@/component/table";
import styles from "./glosary.module.scss";
import { Typography } from "@material-tailwind/react";
import NavbarMenuPages from "@/component/navbars/NavbarMenuPages";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
export default function Glosary() {
  return (
    <div className="text-xl">
      <div className="relative flex h-96 content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg/cabecera-glosario-inmocor.jpg')] bg-cover bg-center" />
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
                Glosario
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-50  bg-legislation-gray px-4 pb-20 pt-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="row px-md-4 m-0 pt-5 pb-1">
            <div className="col-12 mb-md-0 mb-4">
              <div className="section-title text-center">
                <Typography variant="h2" className="mb-6 font-black text-red">
                  Un completo glosario multilingüe especializado
                </Typography>
                <p className="display-10 text-center">
                  La gestión del corpus INMOCOR ha dado como resultado un
                  glosario multilingüe para la traducción de los contratos de
                  compraventa de viviendas.
                  <br />
                  En concreto, incluye las siguientes lenguas y variedades
                  diatópicas:
                </p>
                <ul className="list-check text-2xl  inline-grid grid-cols-3">
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
                  </li >
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
          <div className="row m-0 px-md-4 pt-5 pb-1">
            <div className="col-12 mb-4 mb-md-0">
              <fieldset>
                <div className="section-title">
                  <legend variant="h4" className="ml-0 text-ocre-red">
                    Seleccione la(s) lengua(s) en las que desee visualizar el
                    Glosario:
                  </legend>
                </div>
                <div className="overflow-auto shadow-none">
                  <select multiple className="form-control mb-2 w-11/12 px-5 py-4 bg-legislation-gray shadow-none" id="InmolawFormControlSelect">
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
                  <p>Permite seleccionar varios glosarios pulsando Crtl (Windows) o Cmd (MacOS).</p>
                </div>
                <button class="bg-gradient-to-r from-gradient-for-footer to-gradient-to text-white font-bold py-2 px-4 rounded mt-5 flex-inline flex">
                  Mostrar<ArrowRightIcon className="mt ml-2 flex-inline flex h-7 w-10  font-black text-red hover:w-20" />
                </button>
              </fieldset>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <Table/>
      <MenuFooterPage />
      <FooterSite />
    </div>
  );
}
