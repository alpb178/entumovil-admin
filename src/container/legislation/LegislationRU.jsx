import FooterSite from "@/component/footer";
import TopImage from "@/component/topImage";
import styles from "./legislation.module.scss";
import MenuFooterPage from "@/component/menuFooterPage";

export default function LegislationRU() {
  return (
    <>
      <TopImage name="Legislación Reino Unido" imageUrl="cabecera-legislacion-union-europea-inmocor.jpg" />

      <section className="px-4 pt-0 pb-10">
        <div className="container mx-auto">
          <div className="item-center flex">
            <div className="w-1/2  p-2 text-center">
              <img
                alt="Card Image"
                src="/img/Gales-Inglaterra.jpg"
                height={581}
              />
            </div>
            <div className="w-1/2  p-2 text-left">
              <span className={styles.span}>
                El derecho del Reino Unido deriva del{" "}
              </span>

              <h6 className="divider-title">
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
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
