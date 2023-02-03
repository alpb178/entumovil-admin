import FooterSite from "@/component/footer";
import MenuFooterPage from "@/component/menuFooterPage";
import TopImage from "@/component/topImage";
export default function LegislationFr() {
  return (
    <>
      <TopImage
        name="Legislación en Francia"
        imageUrl="cabecera-legislacion-francia-inmocor.jpg"
      />
      <section className="mt-10 mb-20 px-4 text-xl text-gray">
        <div className="container mx-auto">
          <div className="item-center content-center text-gray ">
            <p className="mb-6 text-5xl font-black text-red">
              Legislación francesa sobre contratos de venta de un bien
              inmobiliario
            </p>
            <p>
              El contrato de venta de cualquier bien inmobiliario en Francia
              está regulado por un conjunto de leyes que exponemos a
              continuación.
            </p>
            <p className="mt-5">
              En primer lugar, destaca el{" "}
              <a className="font-black italic text-red">
                Código Civil de Francia
              </a>{" "}
              (Code Civil) que regula todo lo que corresponde a las personas
              físicas y jurídicas, así como a los bienes y a las relaciones
              entre los ciudadanos de este país. En lo que concierne a las
              acciones de compra-venta de un bien inmobiliario, el Code Civil
              dedica su
              <a className="font-black italic text-red">
                Livre III a la adquisición de una propiedad: Livre III: Des
                différentes manières dont on acquiert la propriété (Articles 711
                à 2278)
              </a>
              . La información de este libro abarca desde la definición del
              concepto de venta (vente) de forma general hasta cada una de las
              obligaciones y derechos de cualquier comprador y vendedor, así
              como los tipos de contrato, por ejemplo, con el{" "}
              <a className="font-black italic text-red"></a>Titre VI: De la
              vente (Articles 1582 à 1701-1). También se puede mencionar el
              <a className="font-black italic text-red">
                Titre III: Des sources d’obligations (Articles 1100 à 1303-4)
              </a>{" "}
              y
              <a className="font-black italic text-red">
                Titre IV: Du régime général des obligations (Articles 1304 à
                1352-9)
              </a>
              , donde se especifica la formación del contrato y todas las
              posibles obligaciones y extinciones de estas.
            </p>
            <p className="mt-5">
              Para continuar, cabe citar el{" "}
              <a className="font-black italic text-red">
                Code de la construction et de l’habitation
              </a>
              , cuyos artículos se orientan hacia la regulación de la
              construcción de edificios y bienes inmuebles, el estado de los
              constructores y las medidas de protección relativas a estos bienes
              inmobiliarios con el{" "}
              <a className="font-black italic text-red">
                Livre II: Statut de constructeurs (Articles L200-1 à L291-4)
              </a>
              . Y, dentro de este Código, hemos de mencionar también el{" "}
              <a className="font-black italic text-red">
                Livre V: Lutte contre l’habitat indigne (Articles L411 à L551-1)
              </a>{" "}
              ya que sus artículos se centran en el derecho a tener una vivienda
              digna: seguridad, salubridad y protección.
            </p>
            <p className="mt-5">
              Todos estos ordenamientos mencionados son igual de necesarios que
              la regulación de la práctica comercial que se pueda llevar a cabo
              en alguno de estos contratos inmobiliarios, así como el control de
              las obligaciones que tienen los vendedores para con sus clientes.
              Esto, entre otros muchos puntos, se regulariza con el{" "}
              <a className="font-black italic text-red">
                Code de la consommation
              </a>
              , del que subrayamos el{" "}
              <a className="font-black italic text-red">
                Livre III: Crédit (Articles L311-1 à L354-6)
              </a>{" "}
              y, dentro de este libro, el{" "}
              <a className="font-black italic text-red">
                Chapitre III: Crédit immobilier (Articles L313-1 à L313-64)
              </a>{" "}
              cuyos artículos están dedicados a la financiación de la compra
              mediante hipoteca.
            </p>
            <p className="mt-5">
              Finalmente, con respecto al establecimiento de las reglas que
              rigen el proceso civil, es decir, cualquier solicitud, citación,
              juicio, condición de admisibilidad o los plazos entre las partes
              de cualquier tipo de contrato viene normalizado por el{" "}
              <a className="font-black italic text-red">
                Code de la procédure civile
              </a>
              , lo que en España sería el Código procesal civil.
            </p>
            <p className="mt-5">
              En conclusión, todas estos artículos, títulos, capítulos, leyes y
              códigos configuran un marco teórico jurídico francés que nos
              ofrece el conocimiento necesario para trabajar con los documentos
              contractuales inmobiliarios franceses.
            </p>
          </div>
        </div>
      </section>
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
