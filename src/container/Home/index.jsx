import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import FooterSite from "@/component/footer";
import MenuFooterPage from "@/component/menuFooterPage";
import Carrousel from "@/component/carrousel";

export function HomeContainer() {
  return (
    <>
      <Carrousel />
      <section className="bg-gray-50 -mt-32 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <Card className=" shadow-gray-500/10 shadow-lg">
            <CardBody className="px-8 text-left">
              <p className="mb-6 text-5xl font-black text-red">INMOCOR</p>
              <p className="mb-6 text-2xl font-black">
                Compilación de un macrocorpus para la generación de recursos
                multilingües en al ámbito inmobiliario
                (español-inglés/francés/italiano)
              </p>
              <p className="mb-5 text-xl text-gray">
                INMOCOR es un proyecto de excelencia financiado por la Junta de
                Andalucía (N.º de ref. P20-00109, 2021-2023), de carácter
                transversal, plurinstitucional y multidisciplinar, aúna a
                profesionales e investigadores especialistas en tres disciplinas
                —Traducción (especializados en Lingüística de Corpus y
                Terminología), Derecho y Tecnología— para realizar avances
                relevantes en el ámbito de la compraventa inmobiliaria, y cuyos
                resultados serán de aplicación directa y gratuita para la
                investigación, el ámbito profesional y la enseñanza.
              </p>
              <p className="mb-5 text-xl text-gray">
                Así, en un mundo laboral cada vez más competitivo es fundamental
                que los profesionales cuenten con herramientas que puedan dar
                mayor rentabilidad a su negocio. No cabe duda de que un mercado
                como el español —y en particular el andaluz— la construcción y
                la compraventa inmobiliaria son los grandes artífices de la
                dinamización económica debido, principalmente, a las inversiones
                de capital extranjero (en particular británico, alemán,
                americano, irlandés, francés e italiano); de hecho, según datos
                de la Junta de Andalucía de 2019, la economía andaluza creció un
                2,5%, dos décimas más que la media española, gracias al sector
                servicios y la construcción, siendo este último el que más
                aumentó.
              </p>
              <p className="mb-5 text-xl text-gray">
                A ello se suma la inversión española en el ámbito inmobiliario y
                construcción en otros países, en particular Reino Unido, EE.UU.
                y Argentina (PIEL, 2016). Todo ello trae consigo un negocio de
                compraventa internacional de bienes inmuebles —con especial
                incidencia en España y, en particular, Andalucía— en el que
                intervienen no sólo lenguas sino sistemas jurídicos diferentes.
              </p>
              <p className="mb-5 text-xl text-gray">
                Con esta idea en mente, este proyecto persigue el siguiente
                objetivo principal: Compilar un macrocorpus para la generación
                de recursos multilingües (español-inglés/francés/italiano) para
                la compraventa inmobiliaria. A partir de este macrocorpus (que
                contiene legislación y contratos), se han generado glosarios
                multilingües y redactores de contratos de compraventa de
                viviendas para todas las lenguas y variedades diatópicas objeto
                de estudio de este proyecto, a saber, español (variedades de
                Argentina y España), inglés (de Irlanda, EE.UU. y Reino Unido),
                alemán, francés, italiano y catalán.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      <MenuFooterPage />
      <FooterSite />
    </>
  );
}

export default HomeContainer;
