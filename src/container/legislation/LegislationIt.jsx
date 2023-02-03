import FooterSite from "@/component/footer";
import MenuFooterPage from "@/component/menuFooterPage";
import TopImage from "@/component/topImage";
import { Typography } from "@material-tailwind/react";
export default function LegislationIt() {
  return (
    <>
      <TopImage
        name="Legislación en Italia"
        imageUrl="cabecera-legislacion-italia-inmocor.jpg"
      />
      <section className="mt-10 mb-20 text-xl text-gray px-4">
        <div className="container mx-auto">
          <div className="item-center content-center text-gray ">
          <p className="mb-6 text-5xl font-black text-red">
              Normativa de Compraventa Inmobiliaria en el Ordenamiento Jurídico
              de Italia
            </p>
            <p>
              En el sistema italiano, el contrato de compraventa inmobiliario se
              rige por los artículos{" "}
              <a className="font-black italic text-red">1470</a> a{" "}
              <a className="font-black italic text-red">1509</a> del Codice
              Civile, que lo denomina simplemente venta ("vendita"). Así, el
              artículo 1470 establece que "la venta es el contrato que tiene por
              objeto la transmisión de la propiedad de una cosa o la transmisión
              de otro derecho a cambio de un precio" ("La vendita è il contratto
              che ha per oggetto il trasferimento della proprietà di una cosa o
              il trasferimento di un altro diritto verso il corrispettivo di un
              prezzo").
            </p>
            <p className="mt-5">
              El ordenamiento jurídico italiano establece con precisión los
              deberes y obligaciones del vendedor. Con el contrato de
              compraventa, el vendedor (art.{" "}
              <a className="font-black italic text-red">1476</a> del Codice
              Civile) se compromete a entregar la propiedad al comprador,
              transferir la propiedad u otro derecho real a favor del comprador
              y a garantizar al comprador contra el riesgo de desahucio y los
              defectos.
            </p>
            <p className="mt-5">
              Por su parte, el artículo{" "}
              <a className="font-black italic text-red">1477</a> del Codice
              Civile especifica que el bien que se vende debe entregarse "en el
              estado en que se encontraba en el momento de la venta". El
              vendedor también está obligado a entregar al comprador los
              accesorios y complementos de la unidad inmobiliaria.
            </p>
            <p className="mt-5">
              Asimismo, el vendedor está obligado a garantizar la transmisión
              del derecho real a favor del comprador. Por lo tanto, si en el
              momento del contrato preliminar de venta el inmueble no era
              propiedad del vendedor "... el vendedor está obligado a procurar
              su compra al comprador" (art.{" "}
              <a className="font-black italic text-red">1478</a> del Codice
              Civile).
            </p>
            <p className="mt-5">
              Como consecuencia de la constatación jurisdiccional del título de
              propiedad del vendedor, se produce el desahucio (art.{" "}
              <a className="font-black italic text-red">1485</a> del Codice
              Civile). De este modo, el comprador se ve privado de su derecho a
              la transferencia de los bienes. Las obligaciones del vendedor en
              este caso prevén: la indemnización del daño sufrido por el
              comprador, el pago del valor de los frutos y el reembolso de los
              gastos incurridos por el comprador.
            </p>
            Por otra parte, de acuerdo con el artículo{" "}
            <a className="font-black italic text-red">1490</a> del Codice
            Civile, el vendedor debe garantizar al comprador que la propiedad
            vendida está libre de defectos. Por su parte, el artículo{" "}
            <a className="font-black italic text-red">1477</a> establece
            expresamente que las obligaciones del vendedor incluyen la entrega
            de documentos y títulos relativos a la propiedad.
          </div>
        </div>
      </section>
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
