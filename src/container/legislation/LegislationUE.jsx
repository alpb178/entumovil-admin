import FooterSite from "@/component/footer";
import TopImage from "@/component/topImage";
import { Typography } from "@material-tailwind/react";
import styles from "./legislation.module.scss";
import MenuFooterPage from "@/component/menuFooterPage";

export default function LegislationUE() {
  return (
    <>
      <TopImage name={"Legislación en la Unión Europea"} imageUrl='cabecera-legislacion-irlanda-inmocor' />

      <section className="px-4 pb-10">
        <div className="container mx-auto">
          <div className="item-center flex">
            <div className="w-1/2  p-2 text-center">
              <p className={styles.p}>
                El ordenamiento jurídico de la Unión Europea, en materia de
                contratos internacionales, se apoya, con carácter general, en
                dos reglamentos, saber,{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX%3A32001R0044"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reglamento (CE) n.º 44/2001 del Consejo, de 22 de diciembre
                  del 2002, relativo a la competencia judicial, el
                  reconocimiento y la ejecución de resoluciones judiciales en
                  materia civil y mercantil
                </a>{" "}
                (conocido como Bruselas I) y{" "}
                <a
                  href="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:177:0006:0016:ES:PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reglamento (CE) n.º 593/2008 del Parlamento Europeo y del
                  Consejo de 17 de junio de 2008 sobre la ley aplicable a las
                  obligaciones contractuales
                </a>
                (Roma I). Asimismo, en aras a la creación de una «Comunidad de
                Derecho» con una base jurídica armonizada y estable, tanto desde
                el punto de vista legislativo como terminológico, en
                cumplimiento del Tratado de Lisboa (2007) que modifica el
                Tratado Constitutivo de la Unión, se han aprobado las siguientes
                directivas:
              </p>
            </div>
            <div className="w-1/2  p-2 text-center">
              <img
                alt="Card Image"
                src="/img/union-europea.jpg"
                className="ml-5 mt-8"
                height={581}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-10">
        <div className="container mx-auto">
          <ul className="ml-20">
            <li className={styles.p}>
              <a
                href="https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=celex:31994L0047"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directiva 94/47/CE
              </a>
              del Parlamento Europeo y del Consejo, de 26 de octubre de 1994,
              relativa a la protección de los adquirientes en lo relativo a
              determinados aspectos de los contratos.
            </li>
            <li className={styles.p}>
              <a
                href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32011L0083"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directiva 2011/83/UE
              </a>
              del Parlamento Europeo y del Consejo de, 25 de octubre de 2011,
              sobre los derechos de los consumidores, por la que se modifican la{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=celex%3A31993L0013"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directiva 93/13/CEE
              </a>{" "}
              del Consejo, de 5 de abril de 1993, sobre las cláusulas abusivas
              en los contratos celebrados con consumidores y{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=celex%3A31999L0044"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directiva 1999/44/CE
              </a>
              del Parlamento Europeo y del Consejo, de 25 de mayo de 1999, sobre
              determinados aspectos de la venta y las garantías de los bienes de
              consumo y se derogan la{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX%3A31985L0577"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directiva 85/577/CEE
              </a>
              del Consejo, de 20 de diciembre de 1985, referente a la protección
              de los consumidores en el caso de contratos negociados fuera de
              los establecimientos comerciales y la{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX%3A31997L0007"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directiva 97/7/CE
              </a>
              del Parlamento Europeo y del Consejo de 20 de mayo de 1997,
              relativa a la protección de los consumidores en materia de
              contratos a distancia.
            </li>
            <li className={styles.p}>
              <a
                href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=celex%3A32014L0055"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directiva 2014/55/UE
              </a>
              del Parlamento Europeo y del Consejo, de 16 de abril de 2014,
              relativa a la facturación electrónica en la contratación pública .
            </li>
          </ul>
          <p className={styles.p}>
            Asimismo, de manera más general, cabe poner de relieve la
            importancia de los <em>Principios UNIDROIT</em> sobre los contratos
            comerciales internacionales y los{" "}
            <em>Principios Europeos del Derecho de Contratos.</em>
          </p>
        </div>
      </section>
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
