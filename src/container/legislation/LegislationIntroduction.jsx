import FooterSite from "@/component/footer";
import MenuFooterPage from "@/component/menuFooterPage";
import TopImage from "@/component/topImage";
import { INMOCOR_LEGISLATION_AL, INMOCOR_LEGISLATION_AR, INMOCOR_LEGISLATION_CA, INMOCOR_LEGISLATION_ES, INMOCOR_LEGISLATION_EU, INMOCOR_LEGISLATION_FR, INMOCOR_LEGISLATION_IR, INMOCOR_LEGISLATION_IT, INMOCOR_LEGISLATION_RU, INMOCOR_LEGISLATION_UE } from "@/lib/constants";
export default function LegislationIntroduction() {
  return (
    <>
      <TopImage name="Legislación" description="Normativa de los diferentes ordenamientos jurídicos" imageUrl="cabecera-legislacion-inmocor.jpg" />
     
      <section className=" text-xl text-gray bg-legislation-gray h-80" >
        <div className="container mx-auto">
          <div className="item-center content-center  ">
          <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight mb-6 text-red">INMOLAW: Un corpus legislativo especializado</h1>
          <p>El presente apartado recoge la <strong>legislación aplicable a los contratos de compraventa de viviendas</strong> relativa a <strong>España, Argentina, Reino Unido</strong> (con especial referencia a <strong>Inglaterra y Gales</strong>), Irlanda, <strong>Estados Unidos</strong> (concretamente, en el Estado de <strong>Luisiana</strong>), Francia, Italia, Alemania y Cataluña; así como la <strong>normativa comunitaria europea</strong>. La identificación de dicha normativa ha hecho posible la creación de un corpus legislativo, al que hemos denominado <strong>INMOLAW</strong>, un recurso de gran utilidad para responder a las necesidades documentales de profesionales como los traductores jurídicos, agentes inmobiliarios, notarías o juristas, entre otros.
            Desde los diferentes apartados de esta sección se puede acceder a la normativa de los ordenamientos jurídicos implicados en el estudio, además de a la publicación original donde se recogen los textos jurídicos en cuestión gracias a los hipervínculos presentes en cada texto.
          </p>
        </div>
        </div>
      </section>


      <section className="mt-10 mb-20 flex text-xl text-gray px-4">
        <div className="container mx-auto">
          <div className="item-center content-center  ">
            <div className="row bg-white m-0 px-md-4 py-5">
              <div className="col-12 mb-4 mb-md-0">
                <div className="section-title mb-4">
                  <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight mb-6 text-black">Legislaciones incluidas</h1>
                  <p>Seleccione el ámbito legislativo de su interés. También puede utilizar el menú superior para ello.
                  </p>
                </div>
                <ul className="list-check ">
                  <li className="border-bottom flex-inline flex pb-3">
                    <i className="fas fa-check m-1"></i>
                    <h5 className="d-inline"><a href={INMOCOR_LEGISLATION_UE} className="icon-btn btn-link btn-arrow text-dark">Legislación en la Unión Europea<span></span></a></h5>
                  </li>
                  <li className="border-bottom flex-inline flex pb-3">
                    <i className="fas fa-check m-1"></i><h5 className="d-inline"><a href={INMOCOR_LEGISLATION_ES} className="icon-btn btn-link btn-arrow text-dark">Legislación en España<span></span></a></h5>
                  </li>
                  <li className="border-bottom flex-inline flex pb-3">
                    <i className="fas fa-check m-1"></i><h5 className="d-inline"><a href={INMOCOR_LEGISLATION_AR} className="icon-btn btn-link btn-arrow text-dark">Legislación en Argentina<span></span></a></h5>
                  </li>
                  <li className="border-bottom flex-inline flex pb-3">
                    <i className="fas fa-check m-1"></i><h5 className="d-inline"><a href={INMOCOR_LEGISLATION_RU} className="icon-btn btn-link btn-arrow text-dark">Legislación en Reino Unido<span></span></a></h5>
                  </li>
                  <li className="border-bottom flex-inline flex pb-3">
                    <i className="fas fa-check m-1"></i><h5 className="d-inline"><a href={INMOCOR_LEGISLATION_EU} className="icon-btn btn-link btn-arrow text-dark">Legislación en EE. UU.<span></span></a></h5>
                  </li>
                  <li className="border-bottom flex-inline flex pb-3">
                    <i className="fas fa-check m-1"></i><h5 className="d-inline"><a href={INMOCOR_LEGISLATION_IR} className="icon-btn btn-link btn-arrow text-dark">Legislación en Irlanda<span></span></a></h5>
                  </li>
                  <li className="border-bottom flex-inline flex pb-3">
                    <i className="fas fa-check m-1"></i><h5 className="d-inline"><a href={INMOCOR_LEGISLATION_AL} className="icon-btn btn-link btn-arrow text-dark">Legislación en Alemania<span></span></a></h5>
                  </li>
                  <li className="border-bottom flex-inline flex pb-3">
                    <i className="fas fa-check m-1"></i><h5 className="d-inline"><a href={INMOCOR_LEGISLATION_FR} className="icon-btn btn-link btn-arrow text-dark">Legislación en Francia<span></span></a></h5>
                  </li>
                  <li className="border-bottom flex-inline flex pb-3">
                    <i className="fas fa-check m-1"></i><h5 className="d-inline"><a href={INMOCOR_LEGISLATION_IT} className="icon-btn btn-link btn-arrow text-dark">Legislación en Italia<span></span></a></h5>
                  </li>
                  <li className="border-bottom flex-inline flex pb-3">
                    <i className="fas fa-check m-1"></i><h5 className="d-inline"><a href={INMOCOR_LEGISLATION_CA} className="icon-btn btn-link btn-arrow text-dark">Legislación en Cataluña<span></span></a></h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-0 text-xl text-gray pb-10">
        <div className="container mx-auto">
          <div className="item-center flex">
          </div>
        </div>
      </section>
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
