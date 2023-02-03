import FooterSite from "@/component/footer";
import TopImage from "@/component/topImage";
import MenuFooterPage from "@/component/menuFooterPage";


export default function LegislationRU() {
  return (
    <>
      <TopImage
        name="Legislación Reino Unido"
        imageUrl="cabecera-legislacion-reino-unido-inmocor.jpg"
      />

      <section className="mt-10 mb-20 text-xl text-gray px-4">
        <div className="container mx-auto">
          <div className="item-center content-center ">
          <p className="mb-6 text-5xl font-black text-red">
              Normativa de Compraventa Inmobiliaria en el Ordenamiento Jurídico
              de Reino Unido
            </p>
            <p>
              El derecho del reino unido deriva del common law o derecho
              consuetudinario (muy diferente a las concepciones de Europa
              continental, cuyo eje es el civil law) y, en consecuencia, se basa
              en precedentes judiciales, costumbres y usos imprecisos, por lo
              que no existen códigos escritos en sentido estricto. El Reino
              Unido es una monarquía parlamentaria en la que conviven diversos
              ordenamientos jurídicos, a saber, el inglés, el galés, el escocés
              y el norirlandés. En este contexto, la supremacía absoluta del
              Westminster (del que emanan leyes primarias) se impone sobre las
              normativas nacionales mencionadas (leyes secundarias) y se
              corresponde, por lo tanto, con derecho común y particular
              respectivamente.
            </p>
            <p className="mt-5">
              Debido a la delimitación diatópica realizada, nos centraremos en
              Inglaterra y Gales. Para ello, se ha identificado la normativa
              primaria (que rige todo el Reino Unido), a saber,{" "}
              <a className="font-black italic text-red">
                Sale of Goods Act 1979
              </a>{" "}
              y{" "}
              <a className="font-black italic text-red">
                Consumer Credit Act 1974
              </a>
              , posteriormente modificada por
              <a className="font-black italic text-red">
                Consumer Credit Act 2006
              </a>
              .
            </p>
            <p className="mt-5">
              La primera de ellas (Sale of Good Act 1979) recoge bajo Part II
              Formation of the Contract diversos apartados en materia de
              contratos de compraventa. En primer lugar, se aborda el contrato
              de compraventa de forma general; Contract of sale (2) en el cual
              se define el contrato de compraventa como «A contract of sale of
              goods is a contract by which the seller transfer or agrees to
              transfer the property in goods to the buyer for money
              consideration, called the price» y (3) Capacity to buy and sell.
              Seguidamente, se detallan las formalidades del contrato, (4) How
              contract of sale is made; el objeto de estudio del contrato en los
              apartados (5) Existing or future goods, (6) Goods which have
              perishes y (7) Good pershing before sale but after agreement to
              sell, así como el precio (8) Ascertainment of price y (9)
              Agreement to sell at valuation, entre los más generales. En
              segundo lugar, Part III Effects of the contract; Part IV
              Performance of the Contract, en el que se regula (27) Duties of
              seller and buyer, (28) Payment and delivery are concurrent
              conditions, (29) Rules about delivery, (30) Delivery of wrong
              quantity, entre los más aspectos más relevantes y, finalmente,
              Part V Rights of unpaid seller agains the goods y Part VI Actions
              for Breach of the contract.
            </p>
            <p className="mt-5">
              En segundo lugar, Credict Consumer Act 1974, promulgada con el
              objetivo de regular tanto las compras realizadas con tarjeta de
              crédito como para la protección cuando se accede a un préstamo
              para la compra o alquiler de una vivienda, fue posteriormente
              modificada por Consumer Act 2006 destinada a aumentar la
              protección del consumidor en los casos previamente abordados.
            </p>
            <p className="mt-5">
              Como ley secundaria, de aplicación exclusiva en Inglaterra y
              Gales, destaca{" "}
              <a className="font-black italic text-red">
                Law of Property Act 1925
              </a>{" "}
              (modificada con fecha 5 de febrero de 2019), cuyo principal
              objetivo fue la modernización de la normativa inmobiliaria.
              Concretamente, en Part II Contract, Conveyances and other
              Instrument, se regulan, de manera sustantiva, los contratos de
              compraventa de viviendas, de especial interés (46) Forms of
              contracts and conditions of sale, sección que aborda los
              requisitos formales de los contratos de compraventa inmobiliaria,
              al tiempo que autoriza a la autoridad competente a prescribir y
              publicar formularios de contratos y condiciones de venta.
            </p>
          </div>
        </div>
      </section>
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
