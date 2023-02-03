import FooterSite from "@/component/footer";
import MenuFooterPage from "@/component/menuFooterPage";
import TopImage from "@/component/topImage";
import {
  INMOCOR_LEGISLATION_AL,
  INMOCOR_LEGISLATION_AR,
  INMOCOR_LEGISLATION_CA,
  INMOCOR_LEGISLATION_ES,
  INMOCOR_LEGISLATION_EU,
  INMOCOR_LEGISLATION_FR,
  INMOCOR_LEGISLATION_IR,
  INMOCOR_LEGISLATION_IT,
  INMOCOR_LEGISLATION_RU,
  INMOCOR_LEGISLATION_UE,
} from "@/lib/constants";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
export default function LegislationIntroduction() {
  return (
    <>
      <TopImage
        name="Legislación"
        description="Normativa de los diferentes ordenamientos jurídicos"
        imageUrl="cabecera-legislacion-inmocor.jpg"
      />
      <section className="bg-gray-50  bg-legislation-gray px-4 pb-20 pt-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="w-full text-gray">
            <h1 className="mb-6 mt-10 block font-sans text-5xl font-semibold leading-tight tracking-normal text-red antialiased">
              INMOLAW: Un corpus legislativo especializado
            </h1>
            <p>
              El presente apartado recoge la{" "}
              <strong>
                legislación aplicable a los contratos de compraventa de
                viviendas
              </strong>{" "}
              relativa a <strong>España, Argentina, Reino Unido</strong> (con
              especial referencia a <strong>Inglaterra y Gales</strong>),
              Irlanda, <strong>Estados Unidos</strong> (concretamente, en el
              Estado de <strong>Luisiana</strong>), Francia, Italia, Alemania y
              Cataluña; así como la{" "}
              <strong>normativa comunitaria europea</strong>. La identificación
              de dicha normativa ha hecho posible la creación de un corpus
              legislativo, al que hemos denominado <strong>INMOLAW</strong>, un
              recurso de gran utilidad para responder a las necesidades
              documentales de profesionales como los traductores jurídicos,
              agentes inmobiliarios, notarías o juristas, entre otros. Desde los
              diferentes apartados de esta sección se puede acceder a la
              normativa de los ordenamientos jurídicos implicados en el estudio,
              además de a la publicación original donde se recogen los textos
              jurídicos en cuestión gracias a los hipervínculos presentes en
              cada texto.
            </p>
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
                    Legislaciones incluidas
                  </h1>
                  <p className="mb-12">
                    Seleccione el ámbito legislativo de su interés. También
                    puede utilizar el menú superior para ello.
                  </p>
                </div>
                <ul className="list-check ">
                  <li className="border-bottom flex-inline mb-4 flex pb-3">
                    <div className="rounded-full bg-legislation-gray">
                      <i className="fas fa-check m-1 rounded-full text-red" />
                    </div>
                    <h5 className="flex-inline ml-5 flex ">
                      <a
                        href={INMOCOR_LEGISLATION_UE}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Legislación en la Unión Europea
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
                        href={INMOCOR_LEGISLATION_ES}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Legislación en España<span></span>
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
                        href={INMOCOR_LEGISLATION_AR}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Legislación en Argentina<span></span>
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
                        href={INMOCOR_LEGISLATION_RU}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Legislación en Reino Unido<span></span>
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
                        href={INMOCOR_LEGISLATION_EU}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Legislación en EE. UU.<span></span>
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
                        href={INMOCOR_LEGISLATION_IR}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Legislación en Irlanda<span></span>
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
                        href={INMOCOR_LEGISLATION_AL}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Legislación en Alemania<span></span>
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
                        href={INMOCOR_LEGISLATION_FR}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Legislación en Francia<span></span>
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
                        href={INMOCOR_LEGISLATION_IT}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Legislación en Italia<span></span>
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
                        href={INMOCOR_LEGISLATION_CA}
                        className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                      >
                        Legislación en Cataluña<span></span>
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

      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
