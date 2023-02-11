
import FooterSite from "@/component/footer";
import TopImage from "@/component/topImage";

export default function LegislationES() {
  return (
    <>
      <TopImage
        name="Legislación España"
        imageUrl="cabecera-legislacion-espana-inmocor.jpg"
      />

      <section className="mt-10 mb-20 px-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="item-center content-center text-gray ">
            <p className="mb-6 text-5xl font-black text-red">
              Normativa de Compraventa Inmobiliaria en el Ordenamiento Jurídico
              de España
            </p>
            <p>
              El artículo 1445 del <a className=" text-red hover:text-link-red" href="https://boe.es/buscar/act.php?id=BOE-A-1889-4763">Código Civil</a>{" "}
              español establece que un contrato de compra y venta implica que
              «[…] uno de los contratantes se obliga a entregar una cosa
              determinada y el otro a pagar por ella un precio cierto en dinero
              o signo que lo represente», definición de la cual se pueden
              extraer los tres elementos formales y esenciales del contrato de
              compraventa, a saber, consentimiento, objeto y precio.
              Seguidamente, regula materias relativas a dichos documentos
              jurídicos en el Libro Cuarto De las obligaciones y contratos con
              el desarrollo de los siguientes títulos:
            </p>
            <p className="m-10">
              Título I De las obligaciones, la naturaleza y efecto de las
              obligaciones, concretamente el Capítulo II (arts. 1094 al 1112).
            </p>
            <p className="m-10">
              Título II De los contratos, con el desarrollo de los siguientes
              capítulos: Capítulo II (arts.1261-1277) que contempla los
              requisitos esenciales para la validez de los contratos, a saber,
              consentimiento, objeto y causa; Capítulo III con referencia a las
              condiciones necesarias que deben reunir dichos contratos para la
              eficacia (arts.1278-1280), interpretación (arts. 1281- 1289),
              rescisión (arts. 1290-1299) y causas de nulidad (arts. 1300-1314).
            </p>
            <p className="m-10">
              Título IV Del contrato de compra y venta con desarrollo Capítulo I
              (arts. 1445-1456); la capacidad para comprar y vender en el
              Capítulo II (arts. 1457-1459); las obligaciones del vendedor y
              comprador en los Capítulos IV (arts.1462-1499) y Capítulo V
              (arts.1500-1505) respectivamente y, finalmente, la resolución de
              la venta en el Capítulo VI (arts. 1506-1525).
            </p>
            <p>
              En cuanto a normativa específica en materia de contratos de
              compraventa de vivienda, destacan la Ley 26/1984, de 19 de junio,
              <a className="font-black italic text-red hover:text-link-red" href="https://boe.es/buscar/doc.php?id=BOE-A-1984-16737">
                General para la Defensa de los Consumidores y Usuarios
              </a>{" "}
              que ha sido modificada por la Ley 7/1998 de 13 de abril,
              <a className="font-black italic text-red hover:text-link-red" href="">
                sobre las Condiciones Generales de Contratación
              </a>{" "}
              (concretamente, el artículo 10 bis, en relación a las cláusulas
              abusivas) y por el{" "}
              <a className="font-black italic text-red hover:text-link-red" href="https://boe.es/buscar/act.php?id=BOE-A-2007-20555">
                Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que
                se aprueba el texto refundido de la Ley General para la Defensa
                de los Consumidores y Usuarios y otras leyes complementarias
              </a>{" "}
              . Asimismo, se ha visto afectada con la promulgación de la{" "}
              <a className="font-black italic text-red hover:text-link-red" href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-20855">
                Ley 39/2002, de 28 de octubre, de transposición al ordenamiento
                jurídico español de Directivas Comunitarias en materia de
                protección de intereses de los consumidores y usuarios
              </a>{" "}
              . Sobre esta misma materia, se ha aprobado la{" "}
              <a className="font-black italic text-red hover:text-link-red" href="https://www.boe.es/buscar/doc.php?id=BOE-A-2006-22950">
                Ley 44/2006, de 29 de diciembre, de mejora de la protección de
                los consumidores y usuarios y el Real Decreto 515/1989, de 21 de
                abril, sobre protección de los consumidores en cuanto a la
                información a suministrar en la compra-venta y arrendamiento de
                viviendas
              </a>
              ; así como, la
              <a className="font-black italic text-red hover:text-link-red" href="https://www.boe.es/diario_boe/txt.php?id=BOE-A-1979-3281">
                Orden de 26 de enero de 1979
              </a>{" "}
              , por la que se establecen las cláusulas de inclusión obligatoria
              en los contratos de compraventa y arrendamiento de viviendas de
              protección oficial de promoción privada, en cumplimiento de lo
              dispuesto en el artículo 13 del{" "}
              <a className="font-black italic text-red hover:text-link-red" href="https://www.boe.es/buscar/pdf/1979/BOE-A-1979-1217-consoli%20dado.pdf">
                Real Decreto 3146/1978
              </a>
              , de 10 de noviembre, por el que se desarrolla el{" "}
              <a className="font-black italic text-red hover:text-link-red" href="https://www.boe.es/buscar/doc.php?id=BOE-A-1978-27765">
                Real Decreto-ley 31/1978
              </a>
              , de 31 de octubre, sobre Política de Vivienda. Finalmente, y de
              muy reciente aprobación, el{" "}
              <a className="font-black italic text-red hover:text-link-red" href="https://www.boe.es/diario_boe/txt.php?id=BOE-A-2019-6299">
                Real Decreto 309/2019
              </a>
              , de 26 de abrilstrong, por el que se desarrolla parcialmente la
              Ley 5/2019, de 15 de marzostrong, reguladora de los contratos de
              crédito inmobiliario y se adoptan otras medidas en materia
              financiera.
            </p>
          </div>
        </div>
      </section>

      <FooterSite />
    </>
  );
}
