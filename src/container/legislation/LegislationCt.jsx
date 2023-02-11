import FooterSite from "@/component/footer";

import TopImage from "@/component/topImage";

export default function LegislationCt() {
  return (
    <>
      <TopImage
        name="Legislación en Cataluña"
        imageUrl="cabecera-legislacion-cataluna-inmocor.jpg"
      />
      <section className="mt-10 mb-20 px-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="item-center content-center text-gray ">
            <p className="mb-6 text-5xl font-black text-red">
              Normativa de Compraventa Inmobiliaria en el Ordenamiento Jurídico
              de Cataluña
            </p>
            <p>
              En materia de derecho privado, Cataluña dispone de una legislación
              específica establecida principalmente en el <a className=" text-red font-black italic hover:text-link-red" href="">Código civil de
              Cataluña</a> y, en concreto, en sus libros cinco y seis.
            </p>

            <p className="mt-5">
              Mediante la Ley 5/2006, de 10 de mayo, el Parlamento de Cataluña
              aprobó el libro quinto del Código Civil de Cataluña relativo a los
              derechos reales. Esta ley aporta una nueva regulación de la
              posesión, la propiedad y las situaciones de comunidad, en especial
              la propiedad horizontal.
            </p>
            <p className="mt-5">
            <a className=" text-red font-black italic hover:text-link-red" href=""> La Ley 3/2017, de 15 de febrero</a>, del libro sexto del Código civil
              de Cataluña, relativo a las obligaciones y los contratos, y de
              modificación de los libros primero, segundo, tercero, cuarto y
              quinto, supuso la aprobación del libro sexto del Código civil de
              Cataluña, relativo a las obligaciones y los contratos. Esta ley
              establece una regulación amplia y modernizadora del derecho
              catalán de los contratos. En concreto, el régimen de la
              compraventa se encuentra recogido en los artículos 621-11 y
              siguientes del Código civil catalán.
            </p>
            <p className="mt-5">
              El artículo 621-1 del Código civil catalán define la compraventa
              como «[…] el contrato por el que el vendedor se obliga a entregar
              un bien conforme al contrato y a transmitir su titularidad, ya sea
              del derecho de propiedad o de los otros derechos patrimoniales,
              según su naturaleza, y el comprador se obliga a pagar un precio en
              dinero y a recibir el bien». Este artículo introduce como novedad,
              con respecto a la definición recogida en el artículo 1445 del
              Código civil español, la obligación de conformidad del bien objeto
              de compraventa con lo pactado por las partes. El artículo 621-2
              introduce el concepto de la compraventa de consumo y el artículo
              621-3 establece que la compraventa «tiene por objeto los bienes
              materiales o inmateriales, incluidos los futuros, lo que tengan
              que ser producidos, manufacturados o fabricados, y los que
              incorporan o estén interconectados a contenidos o servicios
              digitales.» Otras novedades de esta regulación son la posibilidad
              de celebrar la compraventa sin necesidad de determinar el precio
              del bien (art. 621-5), y el deber de información (art. 621-7) que
              obliga al vendedor, antes de concluir el contrato, a facilitar
              toda la información relevante sobre las características del bien.
              La nueva regulación recoge en sus artículos 621-49 a 621-54 las
              especialidades de la compraventa de inmuebles entre las que
              destaca la inclusión de la previsión de financiación por tercero.
              En este caso, salvo pacto en contrario, se otorga al comprador la
              posibilidad de desistir del contrato y recuperar el importe del
              precio ya entregado, si puede justificar la denegación del
              préstamo bancario.
            </p>
            <p className="mt-5">
              Como leyes complementarias, en materia de derecho a la vivienda,
              <a className=" text-red font-black italic hover:text-link-red" href="">{" "}la Ley 18/2007, de 28 de diciembre, del derecho a la vivienda {" "}</a>
              regula, entre otros aspectos, los relativos a los requisitos de
              información en materia de protección de los consumidores y
              usuarios de viviendas en el mercado inmobiliario.
            </p>
          </div>
        </div>
      </section>
      <FooterSite />
    </>
  );
}
