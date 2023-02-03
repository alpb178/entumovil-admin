import FooterSite from "@/component/footer";
import MenuFooterPage from "@/component/menuFooterPage";
import TopImage from "@/component/topImage";
export default function LegislationAr() {
  return (
    <>
      <TopImage
        name="Legislación en Argentina"
        imageUrl="cabecera-legislacion-argentina-inmocor.jpg"
      />
      <section className="mt-10 mb-20 px-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="item-center content-center text-gray ">
            <p className="mb-6 text-5xl font-black text-red">
              Normativa de Compraventa Inmobiliaria en el Ordenamiento Jurídico
              de Argentina
            </p>
            <p>
              En lo que a contratos de compraventa en general se refiere destaca
              la regulación que establece{" "}
              <a className="font-black italic text-red">
                el Libro II De los derechos personales en las relaciones civiles
                en su Sección tercera De las obligaciones que nacen de los
                contratos del Código Civil de Argentina
              </a>
              . Concretamente, los Títulos dedicados a la regulación de nuestro
              objeto de estudio son los siguientes:
            </p>
            <p className="m-10">
              Título I De los contratos en general que sienta las bases del
              concepto de contrato. Dentro de este título, se recogen los
              siguientes capítulos en relación a los contratos, a saber,
              Capítulo I Del consentimiento de los contratos (arts.1144-1159),
              Capítulo II De los que pueden contratar (arts.1160-1166), Capítulo
              III Del objeto de los contratos (arts. 1167-1179), Capítulo IV De
              la forma de los contratos (arts.1180-1189), Capítulo V De la
              prueba de los contratos (arts. 1190-1194) y Capítulo VI De los
              efectos de los contratos (arts.1195-1216).
            </p>
            <p className="m-10">
              Título III Del contrato de compra y venta regula de manera
              sustantiva este tipo de documentos jurídicos privados. En primer
              lugar, es el artículo 1323 el que define el concepto de contrato
              de compra y venta al establecer «[…] habrá compra y venta cuando
              una de las partes se obligue a transferir a la otra la propiedad
              de una cosa, y esta se obligue a recibirla y a pagar por ella un
              cierto precio en dinero […]». En este Título, son de especial
              importancia: Capítulo I De la cosa vendida (arts.1327-1348),
              Capítulo II Del precio (arts. 1349-1356), Capítulo III De los que
              pueden comprar y vender (arts. 1357-1362), Capítulo IV De las
              cláusulas especiales que pueden ser agregadas al contrato de
              compra y venta (arts. 1363-1407), Capítulo V De las obligaciones
              del vendedor (arts. 1408-1423) y Capítulo VI De las obligaciones
              del comprador (arts. 1424-1433).
            </p>

            <p>
              En lo que a materia de protección de datos se refiere, cabe
              mencionar la{" "}
              <a className="font-black italic text-red">Ley n.º 24 240</a>,
              relativa a las normas de protección y defensa de los consumidores,
              autoridad de aplicación, procedimiento y sanciones; reformada por
              la Ley n.º 26 361 de Normas de Protección y Defensa de los
              Consumidores.{" "}
              <a className="font-black italic text-red">
                Autoridad de Aplicación. Procedimiento y Sanciones
              </a>
              . Asimismo, y en relación a los contratos de compraventa de
              viviendas, se encuentra la
              <a className="font-black italic text-red">Ley 14 005</a> de Venta
              de Inmuebles fraccionados en lotes y a plazos. Finalmente, se ha
              aprobado la{" "}
              <a className="font-black italic text-red">
                Ley 27 328 de Contratos de Participación Pública-Privada
              </a>
              , en aras a regular los aspectos esenciales del contrato de
              participación público privada que se celebra entre el estado, como
              contratante, y el sector privado, como contratista. Concretamente,
              se pretende el establecimiento de un marco jurídico estable que
              incentive la inversión privada en sectores como la infraestructura
              o la vivienda.
            </p>
          </div>
        </div>
      </section>
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
