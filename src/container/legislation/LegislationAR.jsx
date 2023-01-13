import FooterSite from "@/component/footer";
import MenuFooterPage from "@/component/menuFooterPage";
import TopImage from "@/component/topImage";
import styles from "./legislation.module.scss";
export default function LegislationAr() {
  return (
    <>
      <TopImage name={"Legislación Argentina"} />
      <section className="px-4 pt-0 pb-10">
        <div className="container mx-auto">
          <div className="item-center flex">
            <div class="w-1/2  p-2 text-center">
              <img
                alt="Card Image"
                src="/img/KYR4GDVKXZHK5I542RZKNKFHMY.jpg"
                height={581}
              />
            </div>
            <div class="mt-20 ml-10 w-1/2  p-2 text-center">
              <h5 className={styles.h5Title}>
                En lo que a contratos de compraventa en general se refiere{" "}
              </h5>
              <p className={styles.p}>
                destaca la regulación que establece el{" "}
                <a
                  href="https://www.oas.org/dil/esp/Codigo_Civil_de_la_Republica_Argentina.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <em>
                    Libro II De los derechos personales en las relaciones
                    civiles
                  </em>{" "}
                  en su <em>Sección tercera</em>{" "}
                  <em>De las obligaciones que nacen de los contratos</em> del{" "}
                  <em>Código Civil de Argentina</em>.
                </a>{" "}
                Concretamente, los Títulos dedicados a la regulación de nuestro
                objeto de estudio son los siguientes:
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-0 pb-10">
        <div className="container mx-auto">
          <ul className="ml-10">
            <li className={styles.p}>
              <em>Título I De los contratos en general</em>
              que sienta las bases del concepto de contrato. Dentro de este
              título, se recogen los siguientes capítulos en relación a los
              contratos, a saber, <em>Capítulo I</em>{" "}
              <em>Del consentimiento de los contratos</em> (arts.1144-1159),{" "}
              <em>Capítulo II De los que pueden contratar </em>(arts.1160-1166),{" "}
              <em>Capítulo III Del objeto de los contratos</em> (arts.
              1167-1179), <em>Capítulo IV De la forma de los contratos</em>{" "}
              (arts.1180-1189),{" "}
              <em>Capítulo V De la prueba de los contratos</em> (arts.
              1190-1194) y <em>Capítulo VI De los efectos de los contratos</em>{" "}
              (arts.1195-1216).
            </li>
            <li className={styles.p}>
              <em>Título III Del contrato de compra y venta</em>
              regula de manera sustantiva este tipo de documentos jurídicos
              privados. En primer lugar, es el artículo 1323 el que define el
              concepto de contrato de compra y venta al establecer «[…] habrá
              compra y venta cuando una de las partes se obligue a transferir a
              la otra la propiedad de una cosa, y esta se obligue a recibirla y
              a pagar por ella un cierto precio en dinero […]». En este Título,
              son de especial importancia:{" "}
              <em>Capítulo I De la cosa vendida</em> (arts.1327-1348),{" "}
              <em>Capítulo II Del precio</em> (arts. 1349-1356),{" "}
              <em>Capítulo III De los que pueden comprar y vender</em> (arts.
              1357-1362),{" "}
              <em>
                Capítulo IV De las cláusulas especiales que pueden ser agregadas
                al contrato de compra y venta
              </em>{" "}
              (arts. 1363-1407),{" "}
              <em>Capítulo V De las obligaciones del vendedor</em> (arts.
              1408-1423) y{" "}
              <em>Capítulo VI De las obligaciones del comprador </em>(arts.
              1424-1433).
            </li>
          </ul>
          <p className={styles.p}>
            <strong>
              En lo que a materia de protección de datos se refiere,
            </strong>{" "}
            cabe mencionar la{" "}
            <a
              href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/638/texact.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Ley n.º 24 240</em>
            </a>
            ,{" "}
            <em>
              relativa a las normas de protección y defensa de los consumidores,
              autoridad de aplicación, procedimiento y sanciones
            </em>
            ; reformada por la <em>Ley n.º 26 361 de Normas de </em>
            <em>
              Protección y Defensa de los Consumidores.
              <a
                href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/135000-139999/139252/norma.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Autoridad de Aplicación. Procedimiento y Sanciones
              </a>
            </em>
            . Asimismo, y en relación a los contratos de compraventa de
            viviendas, se encuentra la{" "}
            <a
              href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/185000-189999/189846/norma.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Ley 14 005</em>
            </a>{" "}
            <em>de Venta de Inmuebles fraccionados en lotes y a plazos</em>.
            Finalmente, se ha aprobado la{" "}
            <a
              href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/265000-269999/268322/norma.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Ley 27 328 de Contratos de Participación Pública-Privada</em>
            </a>
            , en aras a regular los aspectos esenciales del contrato de
            participación público privada que se celebra entre el estado, como
            contratante, y el sector privado, como contratista. Concretamente,
            se pretende el establecimiento de un marco jurídico estable que
            incentive la inversión privada en sectores como la infraestructura o
            la vivienda.
          </p>
        </div>
      </section>
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
