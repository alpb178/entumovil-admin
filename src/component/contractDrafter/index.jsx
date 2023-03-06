import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ViewDoc from "../doc";

const ContractDrafterComponent = (props) => {
  return (
    <section className=" mb-20 flex px-2 text-xl leading-loose  text-gray">
      <div className="container mx-auto">
        <div className="item-center flex content-center  ">
          <div className="w-2/6">
            <ul className="list-check mt-7">
              <li className="border-bottom flex-inline mb-4 flex pb-3">
                <div className="rounded-full bg-legislation-gray">
                  <i className="fas fa-check m-1 rounded-full text-red" />
                </div>
                <h5 className="flex-inline ml-5 flex ">
                  <a
                    href=""
                    className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                  >
                    Titulo
                    <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                  </a>
                </h5>
              </li>
              <li className="border-bottom flex-inline mb-4 flex pb-3">
                <div className="rounded-full bg-legislation-gray">
                  <i className="fas fa-check m-1 rounded-full text-red" />
                </div>
                <h5 className="ml-5">
                  <a
                    href=""
                    className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                  >
                    Participantes
                    <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                  </a>
                </h5>
              </li>
            </ul>
          </div>
          <div className="w-4/6">
            {props.title}
            <ViewDoc textDoc="En XXX, a XXX de XXX de XXX" />
            <p className="mt-6">REUNIDOS</p>
            <ViewDoc textDoc={props?.partes} />
            EXPONEN
            <ViewDoc
              textDoc="PRIMERO: 
            Que XXX. son dueños en pleno dominio del inmueble sito en
            XXX. Según consta en escritura, de fecha XXX de XXX de XXX
            otorgada ante el Notario de XXX, con el nº XXX. de orden de su
            protocolo. Escritura cuya copia queda unida a este contrato .
            Dicho inmueble figura inscrito en el REGISTRO DE LA PROPIEDAD Nº
            XXX DE XXX, en el Tomo XXX, Libro XXX, Folio XXX, Finca nº XXX,
            Inscripción XXX. Figura con la referencia catastral número: XXX.
            Cuenta con XXX metros cuadrados construidos y XXX metros cuadrados
            útiles, correspondiéndole una cuota del XXX en los elementos
            comunes. Como ANEXOS cuenta con: Plaza de garaje de XXX metros
            cuadrados, situada en el garaje común, con el nº XXX, Trastero de
            XXX metros cuadrados, situado en la zona común de trasteros con el
            nº XXX SEGUNDO: El expresado inmueble se encuentra en edificio en
            régimen de COMUNIDAD, regulada por la Ley de Propiedad Horizontal.
            TERCERO.- D. XXX Y Dª. XXX. manifiesta que el citado inmueble se
            encuentra libre de cargas, así como de arrendatarios, ocupantes o
            precaristas. CUARTO.- La vivienda se encuentra al corriente en el
            pago de gastos de la Comunidad de Propietarios, según acredita la
            parte vendedora mediante certificado del Secretario de la
            Comunidad con el visto bueno del Presidente, emitida conforme al
            art. de la Ley de Propiedad Horizontal. QUINTO.- Expuesto cuanto
            antecede, las partes convienen en celebrar el presente contrato de
            compraventa de la vivienda y anexos descritos en el expositivo
            primero conforme a las siguientes:"
            />
            ESTIPULACIONES
            <ViewDoc
              textDoc="PRIMERA.- Objeto
            D. XXX Y Dª. XXX, VENDEN la vivienda y anexos reseñados a D. XXX,
            quien a su vez acepta y COMPRA. La venta se efectúa con cuantos
            derechos, usos, servicios y servidumbres le sean inherentes a la
            vivienda y anexos vendidos, incluida la parte proporcional que le
            corresponde en los elementos comunes del edificio y en las zonas
            comunes de la urbanización, libre de arrendatarios, ocupantes y
            cargas. SEGUNDA.- Precio Las partes acuerdan fijar el precio total
            de la compraventa en la cantidad de XXX EUROS. XXX (XXX) pesetas;
            según el siguientes detalle: Precio de la vivienda XXX ¤ (XXX
            ptas.) Precio del garaje XXX ¤ (XXX ptas.) Precio del trastero XXX
            ¤ (XXX ptas.) TERCERA.- Forma de pago En este acto D. XXX. entrega
            a D. XXX Y Dª. XXX. de la cantidad de XXX EUROS. XXX (XXX)
            pesetas, a cuenta del precio total. D. XXX.. Y Dª. XXX. dan por
            recibida la cantidad entregada en concepto de anticipo otorgando
            carta de pago mediante este documento formal. El resto de la
            cantidad convenida: XXX EUROS. XXX (XXX) pesetas, se abonará en el
            acto de entrega de llaves y otorgamiento de escritura pública,
            mediante cheque nominativo a nombre del vendedor, conformado por
            entidad bancaria. CUARTA.- Otorgamiento de escritura pública Ambas
            partes se obligan a otorgar escritura pública de compraventa en el
            plazo de XXX días naturales. La elección del Notario autorizante
            corresponderá a la parte compradora. QUINTA.- Entrega del inmueble
            D. XXX. Y Dª. XXX. se comprometen a hacer entrega a la parte
            compradora de la posesión y de las llaves de la vivienda y anexos
            en el acto de otorgamiento de escritura pública ante el Notario
            elegido por la parte compradora. SEXTA.- Pago de gastos e
            impuestos Los gastos e impuestos consecuencia del otorgamiento de
            la escritura pública de compraventa serán por cuenta de cada parte
            conforme a lo establecido legalmente. En consecuencia corresponden
            a la parte compradora los gastos de primera copia de la escritura
            y posteriores, los de la inscripción de la escritura en el
            Registro de la Propiedad, el pago del Impuesto de Transmisiones
            Patrimoniales y del Impuesto de Actos Jurídicos Documentados
            derivado de la escritura de compraventa. A la parte vendedora le
            corresponde abonar los gastos de la escritura matriz y el pago del
            Impuesto sobre el Incremento del Valor de los Terrenos de
            Naturaleza Urbana. A partir de la entrega, vendrá obligada la
            parte compradora a pagar todos los gastos, impuestos, tasas y
            arbitrios que se refieran a la vivienda y anexos objeto de este
            contrato , así como los proporcionales a los elementos comunes que
            le correspondan. Tambiénserán de cuenta de la parte compradora los
            gastos y tributos devengados desde la puesta a disposición de la
            vivienda y anexos si la entrega se demorase por causa que le sea
            imputable. SEPTIMA.- Comunidad de propietarios. La parte
            compradora, a partir del día en que se ponga a su disposición la
            vivienda, participará en la proporción que resulte de la
            aplicación de los coeficientes que le correspondan, en el
            mantenimiento de los gastos comunes del edificio y de la zona
            común de la urbanización. En este acto, la parte vendedora hace
            entrega a la parte compradora de los Estatutos de la Comunidad de
            Propietarios, así como del Reglamento de Régimen Interior.
            OCTAVA.- Fuero. Las partes se someten a los Juzgados y Tribunales
            de XXX, lugar donde radica la finca, para resolver cuantas
            divergencias pudieran surgir por motivo de la interpretación y
            cumplimiento de este contrato ."
            />
            <div className="mb-10 mt-10">
              {props.footer}
            </div>
            <div className="item-center mb-24 mt-24 flex content-center">
              <div className="w-1/2">Comprador</div>
              <div className="w-1/2">Vendedor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractDrafterComponent;
