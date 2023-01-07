import FooterSite from "@/component/footer";
import TopImage from "@/component/topImage";
import styles from "./legislation.module.scss";
export default function LegislationRU() {
  return (
    <>
      <TopImage name={"Legislación Reino Unido (Inglaterra/ Gales)"} />

      <section className="px-4 pt-0 pb-10">
        <div className="container mx-auto">
          <div className="item-center flex">
            <div class="w-1/2  p-2 text-center">
              <img
                alt="Card Image"
                src="/img/Gales-Inglaterra.jpg"
                height={581}
              />
            </div>
            <div class="w-1/2  p-2 text-left">
              <span className={styles.span}>
                El derecho del Reino Unido deriva del{" "}
              </span>

              <h6 class="divider-title" className={styles.h6}>
                common law o derecho consuetudinario
              </h6>
              <p className={styles.p}>
                (muy diferente a las concepciones de Europa continental, cuyo
                eje es el civil law) y, en consecuencia, se basa en precedentes
                judiciales, costumbres y usos imprecisos, por lo que no existen
                códigos escritos en sentido estricto. El Reino Unido es una
                monarquía parlamentaria en la que conviven diversos
                ordenamientos jurídicos, a saber, el inglés, el galés, el
                escocés y el norirlandés. En este contexto, la supremacía
                absoluta del Westminster (del que emanan leyes primarias) se
                impone sobre las normativas nacionales mencionadas (leyes
                secundarias) y se corresponde, por lo tanto, con derecho común y
                particular respectivamente.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4  pb-10">
        <div className="container mx-auto">
          <p className={styles.p}>
            Debido a la delimitación diatópica realizada, nos centraremos en
            Inglaterra y Gales. Para ello, se ha identificado la normativa
            primaria (que rige todo el Reino Unido), a saber,{" "}
            <a
              href="https://www.legislation.gov.uk/ukpga/1979/54"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Sale of Goods Act 1979</em>
            </a>{" "}
            y{" "}
            <a
              href="https://www.legislation.gov.uk/ukpga/1974/39/contents"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Consumer Credit Act 197</em>4
            </a>
            , posteriormente modificada por{" "}
            <a
              href="https://www.legislation.gov.uk/ukpga/2006/14/contents"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Consumer Credit Act 2006</em>
            </a>
            .
          </p>
          <p className={styles.p}>
            La primera de ellas (<em>Sale of Good Act 1979</em>) recoge bajo{" "}
            <em>Part II Formation of the Contract </em>diversos apartados en
            materia de contratos de compraventa. En primer lugar, se aborda el
            contrato de compraventa de forma general;{" "}
            <em>Contract of sale (2)</em>
            en el cual se define el contrato de compraventa como «A contract of
            sale of goods is a contract by which the seller transfer or agrees
            to transfer the property in goods to the buyer for money
            consideration, called the price» y{" "}
            <em>(3) Capacity to buy and sell</em>. Seguidamente, se detallan las
            formalidades del contrato, <em>(4) How contract of sale is made</em>
            ; el objeto de estudio del contrato en los apartados{" "}
            <em>(5) Existing or future goods</em>,{" "}
            <em>(6) Goods which have perishes</em> y
            <em> (7) Good pershing before sale but after agreement to sell</em>,
            así como el precio <em>(8) Ascertainment of price</em> y{" "}
            <em>(9) Agreement to sell at valuation, </em>entre los más
            generales. En segundo lugar,
            <em> Part III Effects of the contract</em>;{" "}
            <em>Part IV Performance of the Contract</em>, en el que se regula{" "}
            <em>(27) Duties of seller and buyer</em>,{" "}
            <em>(28) Payment and delivery are concurrent conditions</em>,{" "}
            <em>(29) Rules about delivery</em>,{" "}
            <em>(30) Delivery of wrong quantity</em>, entre los más aspectos más
            relevantes y, finalmente,{" "}
            <em>Part V Rights of unpaid seller agains the goods </em>y{" "}
            <em>Part VI Actions for Breach of the contract</em>.
          </p>
          <p className={styles.p}>
            En segundo lugar, <em>Credict Consumer Act 1974,</em>
            promulgada con el objetivo de regular tanto las compras realizadas
            con tarjeta de crédito como para la protección cuando se accede a un
            préstamo para la compra o alquiler de una vivienda, fue
            posteriormente modificada por <em>Consumer Act 2006</em> destinada a
            aumentar la protección del consumidor en los casos previamente
            abordados.
          </p>
          <p className={styles.p}>
            Como &nbsp;ley secundaria, de aplicación exclusiva en Inglaterra y
            Gales, destaca{" "}
            <a
              href="https://www.legislation.gov.uk/ukpga/Geo5/15-16/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Law of Property Act 1925</em>{" "}
            </a>
            (modificada con fecha 5 de febrero de 2019), cuyo principal objetivo
            fue la modernización de la normativa inmobiliaria. Concretamente, en{" "}
            <em>Part II Contract, Conveyances and other Instrument</em>, se
            regulan, de manera sustantiva, los contratos de compraventa de
            viviendas, de especial interés{" "}
            <em>(46) Forms of contracts and conditions of sale</em>, sección que
            aborda los requisitos formales de los contratos de compraventa
            inmobiliaria, al tiempo que autoriza a la autoridad competente a
            prescribir y publicar formularios de contratos y condiciones de
            venta.
            <a href="#_ftnref1" name="_ftn1">
              <u></u>
            </a>
            <u></u>
          </p>
        </div>
      </section>

      <FooterSite />
    </>
  );
}
