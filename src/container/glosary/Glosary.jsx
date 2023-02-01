import FooterSite from "@/component/footer";
import TopImage from "@/component/topImage";
import MenuFooterPage from "@/component/menuFooterPage";


import styles from "./glosary.module.scss";
export default function Glosary() {
  return (
    <>
      <TopImage name={"Glosario"} />;
      <section className="px-4 pt-0 pb-10">
        <div className="container mx-auto">
          <p className={styles.p}>
            La gestión del corpus VENTACOR ha dado, como resultado, un glosario
            bilingüe y delimitado diatópicamente a las{" "}
            <strong>variedades peninsular y argentina</strong> (para el{" "}
            <strong>español</strong>) y{" "}
            <strong>británica y estadounidense</strong> (para el{" "}
            <strong>inglés</strong>) para la traducción de los contratos de
            compraventa de viviendas.
          </p>
        </div>
      </section>    
      <section className="px-4 pt-0 pb-10">
      <div>
        <h6 style={{textAlign: "center"}}>
        <strong style={{textAlign: "center"}}>
          GLOSARO PARA LA TRADUCCIÓN DE LOS CONTRATOS DE COMPRAVENTA DE VIVIENDAS
        </strong>
        </h6>
      </div> 
        <div className="container mx-auto">
          <div>
            <table className={styles.table} width="full">
              <tbody>
                <tr className="">
                  <td colSpan="2" width={300}>
                    <h6 className={styles.p}>
                      <strong color="black">ESPAÑOL</strong>
                    </h6>
                  </td>
                  <td className={styles.p} colSpan="2" width="340">
                    <h6 className={styles.p}>
                      <strong color="black">INGLÉS</strong>
                    </h6>
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <p className={styles.p}>
                      <strong>VARIEDAD PENINSULAR</strong>
                    </p>
                  </td>
                  <td>
                    <p className={styles.p}>
                      <strong>VARIEDAD ARGENTINA</strong>
                    </p>
                  </td>
                  <td>
                    <p className={styles.p}>
                      <strong>VARIEDAD BRITÁNICA</strong>
                    </p>
                  </td>
                  <td>
                    <p className={styles.p}>
                      <b>VARIEDAD ESTADOUNIDENSE</b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Abogado</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Abogado
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Advocate/</strong>
                    <p></p>
                    <p>
                      <strong>Solicitor/</strong>
                    </p>
                    <p>
                      <strong>Lawyer</strong>
                    </p>
                    <p>&nbsp;</p>
                  </td>
                  <td className={styles.p} width="161">
                    Advocate/<p></p>
                    <p>Lawyer/</p>
                    <p>
                      <strong>Attorney/</strong>
                    </p>
                    <p>
                      <strong>Attorney-at-law</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Acreedor</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Acreedor
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Creditor</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Creditor
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Acto</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Acto
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Event/</strong>
                    <p></p>
                    <p>
                      <strong>Occurrence</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Event/<p></p>
                    <p>Occurrence</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Acta notarial</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Acta notarial
                  </td>
                  <td width="180">
                    <p className={styles.p}>
                      <strong>Notarial certificate</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Notarial certificate</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Acuerdo legal informal</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Acuerdo legal informal
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Memorandum</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Memorandum
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Acuerdo/</strong>
                    <p></p>
                    <p>
                      <strong>Pacto</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Acuerdo/</p>
                    <p className={styles.p}>Pacto</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Agreement/</strong>
                    <p></p>
                    <p>
                      <strong>Contract</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Agreement/</p>
                    <p className={styles.p}>Contract</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Administrador</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Administrador
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Administrator</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Administrator
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Adquiriente/</strong>
                    <p></p>
                    <p>
                      <strong>Comprador/</strong>
                    </p>
                    <p>
                      <strong>Parte compradora</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Adquiriente/</p>
                    <p className={styles.p}>Comprador/</p>
                    <p className={styles.p}>Parte compradora</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Acquirer/</strong>
                    <p></p>
                    <p>
                      <strong>Buyer/</strong>
                    </p>
                    <p>
                      <strong>Purchaser</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Acquirer/</p>
                    <p className={styles.p}>Buyer/</p>
                    <p className={styles.p}>Purchaser</p>
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Adquirir/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Comprar</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Adquirir/<p></p>
                    <p>Comprar</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>To acquire/</strong>
                    <p></p>
                    <p>
                      <strong>To purchase/</strong>
                    </p>
                    <p>
                      <strong>To buy</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    To acquire/<p></p>
                    <p>To purchase/</p>
                    <p>To buy</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Agente inmobiliario</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Agente inmobiliario
                  </td>
                  <td className={styles.p} width="180">
                    Real (-) estate browker/<p></p>
                    <p>Broker</p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Real (-) estate browker/</p>
                    <p className={styles.p}>Broker/</p>
                    <p className={styles.p}>
                      <strong>Realtor</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Anexo</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Anexo
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Annexe/</strong>
                    <p></p>
                    <p>
                      <strong>Addendum</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Addendum
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Arbitraje/</strong>
                    <p></p>
                    <p>
                      <strong>Arbitrio</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Arbitraje/</p>
                    <p className={styles.p}>Arbitrio</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Arbitration</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Arbitration
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Arras/</strong>
                    <p></p>
                    <p>
                      <strong>Señal</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Arras/</p>
                    <p className={styles.p}>Señal</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Down-payment</strong>
                  </td>
                  <td className={styles.p} width="161">
                    <strong>Down payment</strong>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Arrendador</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Arrendador/<p></p>
                    <p>
                      <strong>Locador</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Lessor/</strong>
                    <p></p>
                    <p>
                      <strong>Hirer/</strong>
                    </p>
                    <p>
                      <strong>Renter</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Lessor/<p></p>
                    <p>Renter</p>
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>Arrendamiento/</p>
                    <p className={styles.p}>Alquiler</p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Arrendamiento/</p>
                    <p className={styles.p}>Alquiler/</p>
                    <p className={styles.p}>
                      <strong>Locación</strong>
                    </p>
                  </td>
                  <td width="180">
                    <p className={styles.p}>
                      <strong>Lease/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Leasing/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Leasehold/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Rental/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Rent/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Hire</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Lease/<p></p>
                    <p>Leasing/</p>
                    <p>Rental/</p>
                    <p>Rent</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Arrendamiento con opción a compra/</strong>
                    <p></p>
                    <p>
                      <strong>Alquiler con opción a compra</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>
                      Arrendamiento con opción a compra/
                    </p>
                    <p className={styles.p}>Alquiler con opción a compra/</p>
                    <p className={styles.p}>
                      <strong>Locación con opción a compra</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Rental purchase/</strong>
                    <p></p>
                    <p>
                      <strong>Rent-to-buy/</strong>
                    </p>
                    <p>
                      <strong>Rent-to-own</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Rental purchase/</p>
                    <p className={styles.p}>Rent-to-buy/</p>
                    <p className={styles.p}>Rent-to-own</p>
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Arrendatario/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Inquilino</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Arrendatario/<p></p>
                    <p>Inquilino/</p>
                    <p>
                      <strong>Locatario</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Lessee/</strong>
                    <p></p>
                    <p>
                      <strong>Tenant/</strong>
                    </p>
                    <p>
                      <strong>Leaseholder</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Lessee/<p></p>
                    <p>Tenant/</p>
                    <p>Leaseholder</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Artículo</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Artículo
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Section/</strong>
                    <p></p>
                    <p>
                      <strong>Article</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Section/<p></p>
                    <p>Article</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Autorización</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Autorización
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Authorization</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Autorisation
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Bancario</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Bancario
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Banking</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Banking
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Bien</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Bien
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Asset/</strong>
                    <p></p>
                    <p>
                      <strong>Good</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Asset/</p>
                    <p className={styles.p}>Good</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Bien accesorio</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Bien accesorio/<p></p>
                    <p>
                      <strong>Cosa accesoria</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Fittings/</strong>
                    <p></p>
                    <p>
                      <strong>Fixtures</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Fittings/<p></p>
                    <p>Fixtures</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Bienes gananciales</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Bienes gananciales
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Matrimonial Property</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Matrimonial Property
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Bien mueble</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Bien mueble
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Chattel</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Chattel
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Buena fe</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Buena fe
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Good faith</strong>
                  </td>
                  <td className={styles.p} width="161">
                    <strong>Goodwill</strong>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Cancelación</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Cancelación
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Cancellation</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Cancellation
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Cantidad/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Importe/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Monto/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Cuantía/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Suma</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Cantidad/<p></p>
                    <p>Importe/</p>
                    <p>Monto/</p>
                    <p>Cuantía/</p>
                    <p>Suma</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Total/ (amount)/</strong>
                    <p></p>
                    <p>
                      <strong>Total/ (sum)/</strong>
                    </p>
                    <p>
                      <strong>Quantity</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Total/ (amount)/<p></p>
                    <p>Total/ (sum)/</p>
                    <p>Quantity</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Capacidad/</strong>
                    <p></p>
                    <p>
                      <strong>Facultad</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Capacidad/</p>
                    <p className={styles.p}>Facultad</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Capacity</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Capacity
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Capacidad de obrar</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Capacidad de obrar
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Legal capacity</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Legal capacity
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Carga</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Carga
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Charge</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Charge
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Caso</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Caso
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Case</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Case
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Catastro/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Registro de la Propiedad</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Registro de la Propiedad/<p></p>
                    <p>
                      <strong>Registro de la Propiedad Inmueble</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Land Registry/</strong>
                    <p></p>
                    <p>
                      <strong>Local deeds registry</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Real Property Official Record
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Certificado</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Certificado
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Certificate</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Certificate
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Cláusula/</strong>
                    <p></p>
                    <p>
                      <strong>Estipulación/</strong>
                    </p>
                    <p>
                      <strong>Disposición</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Cláusula/</p>
                    <p className={styles.p}>Estipulación/</p>
                    <p className={styles.p}>Disposición</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Clause/</strong>
                    <p></p>
                    <p>
                      <strong>Provision/</strong>
                    </p>
                    <p>
                      <strong>Disposition</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Clause/<p></p>
                    <p>Provision/</p>
                    <p>Disposition</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Comiso/</strong>
                    <p></p>
                    <p>
                      <strong>Decomiso/</strong>
                    </p>
                    <p>
                      <strong>Confiscación</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Comiso/</p>
                    <p className={styles.p}>Decomiso</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Forfeiture</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Forfeiture
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Comparecen/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Intervienen/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Reunidos</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>
                      <strong>Entre/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Se&nbsp;</strong>
                      <b>reúnen</b>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Between</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Between
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Comprador/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Parte compradora/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Adquiriente</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Comprador/</p>
                    <p className={styles.p}>Parte compradora/</p>
                    <p className={styles.p}>Adquiriente</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Acquirer/</strong>
                    <p></p>
                    <p>
                      <strong>Buyer/</strong>
                    </p>
                    <p>
                      <strong>Purchaser</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Acquirer/</p>
                    <p className={styles.p}>Buyer/</p>
                    <p className={styles.p}>Purchaser</p>
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Comprar/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Adquirir</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Comprar/</p>
                    <p className={styles.p}>Adquirir</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>To acquire/</strong>
                    <p></p>
                    <p>
                      <strong>To purchase/</strong>
                    </p>
                    <p>
                      <strong>To buy</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>To acquire/</p>
                    <p className={styles.p}>To purchase/</p>
                    <p className={styles.p}>To buy</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Compraventa</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Compraventa
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Purchase and Sale</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Purchase and Sale
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Comunicación/</strong>
                    <p></p>
                    <p>
                      <strong>Notificación</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Comunicación/</p>
                    <p className={styles.p}>Notificación</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Notice/</strong>
                    <p></p>
                    <p>
                      <strong>Communication</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Notice/</p>
                    <p className={styles.p}>Communication</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Comunidad</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Comunidad
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Community</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Community
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Con arreglo a/</strong>
                    <p></p>
                    <p>
                      <strong>Conforme a/</strong>
                    </p>
                    <p>
                      <strong>Lo dispuesto en/</strong>
                    </p>
                    <p>
                      <strong>Regulado por/</strong>
                    </p>
                    <p>
                      <strong>En virtud de</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Con arreglo a/</p>
                    <p className={styles.p}>Conforme a/</p>
                    <p className={styles.p}>Lo dispuesto en/</p>
                    <p className={styles.p}>Regulado por/</p>
                    <p className={styles.p}>En virtud de/</p>
                    <p className={styles.p}>
                      <strong>Sujeción al</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Pursuant to/</strong>
                    <p></p>
                    <p>
                      <strong>In accordance with/</strong>
                    </p>
                    <p>
                      <strong>In relation to/</strong>
                    </p>
                    <p>
                      <strong>According to</strong>
                    </p>
                    <p>&nbsp;</p>
                  </td>
                  <td className={styles.p} width="161">
                    Pursuant to/<p></p>
                    <p>In accordance with/</p>
                    <p>In relation to/</p>
                    <p>According to</p>
                    <p>&nbsp;</p>
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Condición/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Requisito</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Condición/</p>
                    <p className={styles.p}>Requisito</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Condition/</strong>
                    <p></p>
                    <p>
                      <strong>Requirement</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Condition/</p>
                    <p className={styles.p}>Requirement</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Condominio/</strong>
                    <p></p>
                    <p className={styles.p}>
                      <strong>Copropiedad/</strong>
                    </p>
                    <p>
                      <strong>Propiedad comunitaria</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Condominio/</p>
                    <p className={styles.p}>Copropiedad/</p>
                    <p className={styles.p}>Propiedad comunitaria</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Condominium</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Condominium
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Confiscación/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Comiso/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Decomiso</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Comiso/</p>
                    <p className={styles.p}>Decomiso</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Forfeiture</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Forfeiture
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Conforme a/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Con arreglo a/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Lo dispuesto en/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Regulado por/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>En virtud de/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>De conformidad con</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Conforme a/<p></p>
                    <p>Con arreglo a/</p>
                    <p>Lo dispuesto en/</p>
                    <p>Regulado por/</p>
                    <p>En virtud de/</p>
                    <p>De conformidad con/</p>
                    <p>
                      <strong>Sujeción al</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Pursuant to/</strong>
                    <p></p>
                    <p>
                      <strong>In accordance with/</strong>
                    </p>
                    <p>
                      <strong>In relation to/</strong>
                    </p>
                    <p>
                      <strong>According to</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Pursuant to/<p></p>
                    <p>In accordance with/</p>
                    <p>In relation to/</p>
                    <p>According to</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Consentimiento</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Consentimiento/<p></p>
                    <p>
                      <strong>Asentamiento</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Consent/</strong>
                    <p></p>
                    <p>
                      <strong>Assent</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Consent/<p></p>
                    <p>Assent</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Contestación/</strong>
                    <p></p>
                    <p>
                      <strong>Respuesta</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Respuesta
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Reply</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Reply
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Contrato</strong>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Contrato/</p>
                    <p className={styles.p}>
                      <strong>Boleto</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Contract/</strong>
                    <p></p>
                    <p>
                      <strong>Agreement</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Contract/</p>
                    <p className={styles.p}>Agreement</p>
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Contrato de arrendamiento/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Contrato de alquiler</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Contrato de arrendamiento/</p>
                    <p className={styles.p}>Contrato de alquiler/</p>
                    <p className={styles.p}>
                      <strong>Contrato de locación</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Hire agreement/</strong>
                    <p></p>
                    <p>
                      <strong>Lease</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Hire agreement/</p>
                    <p className={styles.p}>Lease</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Contrato de compraventa</strong>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Contrato de compraventa/</p>
                    <p className={styles.p}>
                      <strong>Boleto de compraventa</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Purchase and sale agreement/</strong>
                    <p></p>
                    <p>
                      <strong>Purchase and sale contract/</strong>
                    </p>
                    <p>
                      <strong>Contrat (of/for) purchase and sale</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Purchase and sale agreement/<p></p>
                    <p>Purchase and sale contract/</p>
                    <p>Contrat (of/for) purchase and sale/</p>
                    <p>
                      <strong>Agreement to buy or sell/</strong>
                    </p>
                    <p>
                      <strong>Selling Form</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Controversia/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Litigio</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Controversia/</p>
                    <p className={styles.p}>Litigio</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Dispute</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Dispute
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Cónyuge</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Cónyuge/<p></p>
                    <p>
                      <strong>Esposo</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Spouse</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Spouse
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Copropiedad/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Condominio/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Propiedad comunitaria</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Copropiedad/</p>
                    <p className={styles.p}>Condominio/</p>
                    <p className={styles.p}>Propiedad comunitaria</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Condominium</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Condominium
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>Cuantía/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Cantidad/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Importe/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Suma/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Monto</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Cuantía/<p></p>
                    <p>Cantidad/</p>
                    <p>Importe/</p>
                    <p>Suma/</p>
                    <p>Monto</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Total/ (Amount)/</strong>
                    <p></p>
                    <p>
                      <strong>Total/ (Sum)/</strong>
                    </p>
                    <p>
                      <strong>Quantity</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Total/ (Amount)/<p></p>
                    <p>Total/ (Sum)/</p>
                    <p>Quantity</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Cuenta</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Cuenta
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Account</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Account
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Declaración jurada</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Declaración jurada
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Affidavit</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Affidavit
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Decomiso/</strong>
                    <p></p>
                    <p>
                      <strong>Comiso/</strong>
                    </p>
                    <p>
                      <strong>Confiscación</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Decomiso/</p>
                    <p className={styles.p}>Comiso</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Forfeiture</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Forfeiture
                  </td>
                </tr>
                <tr>
                  <td width="149">
                    <p className={styles.p}>
                      <strong>De conformidad con/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Conforme a/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Con arreglo a/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Lo dispuesto en/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Regulado por/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>En virtud de</strong>
                    </p>
                    <p className={styles.p}></p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>De conformidad con/</p>
                    <p className={styles.p}>Conforme a/</p>
                    <p className={styles.p}>Con arreglo a/</p>
                    <p className={styles.p}>Lo dispuesto en/</p>
                    <p className={styles.p}>Regulado por/</p>
                    <p className={styles.p}>En virtud de/</p>
                    <p className={styles.p}>
                      <strong>Sujeción al</strong>
                    </p>
                  </td>
                  <td width="180">
                    <p className={styles.p}>
                      <strong>Pursuant to/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>In accordance with/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>In relation to/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>According to</strong>
                    </p>
                  </td>
                  <td width="161">
                    <p className={styles.p}>Pursuant to/</p>
                    <p className={styles.p}>In accordance with/</p>
                    <p className={styles.p}>In relation to/</p>
                    <p className={styles.p}>According to</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Demora</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Demora
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Delay</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Delay
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Definición</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Definición
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Definition</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Definition
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Depósito</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Depósito
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Deposit</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Deposit
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Derecho</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Derecho
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Right</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Right
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Derecho de retención</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Derecho de retención
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Lien</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Lien
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Descripción registral/</strong>
                    <p></p>
                    <p>
                      <strong>Referencia registral/</strong>
                    </p>
                    <p>
                      <strong>Escritura/ (pública)/</strong>
                    </p>
                    <p>
                      <strong>Registro/</strong>
                    </p>
                    <p>
                      <strong>Inscripción/ (registral)/</strong>
                    </p>
                    <p>
                      <strong>Escrituración</strong>
                    </p>
                  </td>
                  <td width="151">
                    <p className={styles.p}>Escritura/ (pública)/</p>
                    <p className={styles.p}>
                      <strong>Matrícula/</strong>
                    </p>
                    <p className={styles.p}>Registro /</p>
                    <p className={styles.p}>Inscripción/ (registral)/</p>
                    <p className={styles.p}>Escrituración/</p>
                    <p className={styles.p}>
                      <strong>
                        Nomenclatura catastr
                        <span className="font-family: inherit; font-size: inherit;">
                          al/
                        </span>
                      </strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Matriculación</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Registry description/</strong>
                    <p></p>
                    <p>
                      <strong>Legal Description of the property</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Legal Description of the property/<p></p>
                    <p>
                      <strong>Legal land description</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Designar</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Designar
                  </td>
                  <td className={styles.p} width="180">
                    <strong>To designate</strong>
                  </td>
                  <td className={styles.p} width="161">
                    To designate
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Deudor</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Deudor
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Debtor</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Debtor
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>
                      De una parte…
                      <br />
                      De otra parte…
                    </strong>
                  </td>
                  <td className={styles.p} width="151">
                    <strong>Entre/</strong>
                    <p></p>
                    <p>
                      <strong>Se reúnen</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Between</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Between
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Diligencia</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Diligencia
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Diligence</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Diligence
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Discrepancia</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Discrepancia
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Discrepancy</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Discrepancy
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Disposición/</strong>
                    <p></p>
                    <p>
                      <strong>Cláusula/</strong>
                    </p>
                    <p>
                      <strong>Estipulación</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Disposición/<p></p>
                    <p>Cláusula/</p>
                    <p>Estipulación</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Clause/</strong>
                    <p></p>
                    <p>
                      <strong>Provision/</strong>
                    </p>
                    <p>
                      <strong>Disposition</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Clause/<p></p>
                    <p>Provision/</p>
                    <p>Disposition</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Documento/</strong>
                    <p></p>
                    <p>
                      <strong>Documentación</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Documento/<p></p>
                    <p>Documentación</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Document/</strong>
                    <p></p>
                    <p>
                      <strong>Documentation</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Document/<p></p>
                    <p>Documentation</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Domicilio</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Domicilio
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Address</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Address
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Dominio</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Dominio
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Domain</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Domain
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Dueño/</strong>
                    <p></p>
                    <p>
                      <strong>Propietario</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Dueño/<p></p>
                    <p>Propietario</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Owner/</strong>
                    <p></p>
                    <p>
                      <strong>Landlord</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Owner/<p></p>
                    <p>Landlord</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Ejecutar</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Ejecutar
                  </td>
                  <td className={styles.p} width="180">
                    <strong>To execute</strong>
                  </td>
                  <td className={styles.p} width="161">
                    To execute
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Enajenación</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Enajenación
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Alienation (of&nbsp; property)</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Alienation (of&nbsp; property)
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>En su propio nombre y derecho</strong>
                  </td>
                  <td className={styles.p} width="151">
                    <strong>Acreeditan su identidad</strong>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>In his/her own name and right</strong>
                  </td>
                  <td className={styles.p} width="161">
                    In his/her own name and right
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Escritura</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Escritura
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Deed</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Deed
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Escritura hipotecaria</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Escritura hipotecaria
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Mortgage deed</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Mortgage deed
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Escritura/ (pública)/</strong>
                    <p></p>
                    <p>
                      <strong>Referencia registral/</strong>
                    </p>
                    <p>
                      <strong>Descripción registral/</strong>
                    </p>
                    <p>
                      <strong>Registro/</strong>
                    </p>
                    <p>
                      <strong>Inscripción/ (registral)/</strong>
                    </p>
                    <p>
                      <strong>Escrituración</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Escritura/ (pública)/<p></p>
                    <p>
                      <strong>Matrícula/</strong>
                    </p>
                    <p>Inscripción/ (registral)/</p>
                    <p>Escrituración/</p>
                    <p>
                      <strong>Nomenclatura catastral/</strong>
                    </p>
                    <p>
                      <strong>Matriculación</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Registry description/</strong>
                    <p></p>
                    <p>
                      <strong>Legal Description of the property</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Legal Description of the property/<p></p>
                    <p>
                      <strong>Legal land description</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Especial</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Especial
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Special</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Special
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Estipulación/</strong>
                    <p></p>
                    <p>
                      <strong>Disposción/</strong>
                    </p>
                    <p>
                      <strong>Cláusula</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Estipulación/<p></p>
                    <p>Disposción/</p>
                    <p>Cláusula</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Clause/</strong>
                    <p></p>
                    <p>
                      <strong>Provision/</strong>
                    </p>
                    <p>
                      <strong>Disposition</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Clause/<p></p>
                    <p>Provision/</p>
                    <p>Disposition</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Entregar</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Entregar
                  </td>
                  <td className={styles.p} width="180">
                    <strong>To delivery/</strong>
                    <p></p>
                    <p>
                      <strong>To transfer</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    To delivery/<p></p>
                    <p>To transfer</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>En virtud de/</strong>
                    <p></p>
                    <p>
                      <strong>Con arreglo a/</strong>
                    </p>
                    <p>
                      <strong>Conforme a/</strong>
                    </p>
                    <p>
                      <strong>Lo dispuesto en/</strong>
                    </p>
                    <p>
                      <strong>Regulado por/</strong>
                    </p>
                    <p>
                      <strong>De conformidad con</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    En virtud de/<p></p>
                    <p>Con arreglo a/</p>
                    <p>Conforme a/</p>
                    <p>Lo dispuesto en/</p>
                    <p>Regulado por/</p>
                    <p>De conformidad con/</p>
                    <p>
                      <strong>Sujeción al</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Pursuant to/</strong>
                    <p></p>
                    <p>
                      <strong>In accordance with/</strong>
                    </p>
                    <p>
                      <strong>In relation to/</strong>
                    </p>
                    <p>
                      <strong>According to</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Pursuant to/<p></p>
                    <p>In accordance with/</p>
                    <p>In relation to/</p>
                    <p>According to</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Evicción</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Evicción
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Eviction</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Eviction
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Facultad/</strong>
                    <p></p>
                    <p>
                      <strong>Capacidad</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Facultad/<p></p>
                    <p>Capacidad</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Capacity</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Capacity
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Fecha</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Fecha
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Date</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Date
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Fideicomisario</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Fideicomisario
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Trustee</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Trustee
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Finca</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Finca
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Estate/</strong>
                    <p></p>
                    <p>
                      <strong>Land</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Estate/<p></p>
                    <p>Land</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Firma</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Firma
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Signature</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Signature
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Formalización</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Formalización
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Execution</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Execution
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Folio/ (registral)</strong>
                  </td>
                  <td className={styles.p} width="151">
                    <strong>Folio Real</strong>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Folio</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Folio
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Fuero/</strong>
                    <p></p>
                    <p>
                      <strong>Jurisdicción</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Fuero/<p></p>
                    <p>Jurisdicción</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Jurisdiction</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Jurisdiction
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Laboral</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Laboral
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Working</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Working
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Legal</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Legal
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Legal</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Legal
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Legitimación</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Legitimación
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Legitimacy</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Legitimacy
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Ley</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Ley
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Act/</strong>
                    <p></p>
                    <p>
                      <strong>Statute</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Act/<p></p>
                    <p>Statute</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Libre (sin cargas)</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Libre
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Unencumbered/</strong>
                    <p></p>
                    <p>
                      <strong>Free and clear</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Unencumbered/<p></p>
                    <p>Free and clear</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Litigio/</strong>
                    <p></p>
                    <p>
                      <strong>Controversia</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Litigio/<p></p>
                    <p>Controversia</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Dispute</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Dispute
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Lo dispuesto en/</strong>
                    <p></p>
                    <p>
                      <strong>En virtud de/</strong>
                    </p>
                    <p>
                      <strong>Con arreglo a/</strong>
                    </p>
                    <p>
                      <strong>Conforme a/</strong>
                    </p>
                    <p>
                      <strong>Regulado por/</strong>
                    </p>
                    <p>
                      <strong>De conformidad con</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Lo dispuesto en/<p></p>
                    <p>En virtud de/</p>
                    <p>Con arreglo a/</p>
                    <p>Conforme a/</p>
                    <p>Regulado por/</p>
                    <p>De conformidad con/</p>
                    <p>
                      <strong>Sujeción al</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Pursuant to/</strong>
                    <p></p>
                    <p>
                      <strong>In accordance with/</strong>
                    </p>
                    <p>
                      <strong>In relation to/</strong>
                    </p>
                    <p>
                      <strong>According to</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Pursuant to/<p></p>
                    <p>In accordance with/</p>
                    <p>In relation to/</p>
                    <p>According to</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Garantía/</strong>
                    <p></p>
                    <p>
                      <strong>Seguro</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Garantía/<p></p>
                    <p>Seguro</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Warrant/</strong>
                    <p></p>
                    <p>
                      <strong>Assurance</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Warrant/<p></p>
                    <p>Assurance</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Gasto</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Gasto
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Expense</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Expense
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>General</strong>
                  </td>
                  <td className={styles.p} width="151">
                    General
                  </td>
                  <td className={styles.p} width="180">
                    <strong>General</strong>
                  </td>
                  <td className={styles.p} width="161">
                    General
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Gravamen</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Gravamen
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Encumbrance</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Encumbrance
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Hipoteca</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Hipoteca
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Mortgage</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Mortgage
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Importe/</strong>
                    <p></p>
                    <p>
                      <strong>Cantidad/</strong>
                    </p>
                    <p>
                      <strong>Monto/</strong>
                    </p>
                    <p>
                      <strong>Suma/</strong>
                    </p>
                    <p>
                      <strong>Cuantía</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Importe/<p></p>
                    <p>Cantidad/</p>
                    <p>Monto/</p>
                    <p>Suma/</p>
                    <p>Cuantía</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Total/ (Amount)/</strong>
                    <p></p>
                    <p>
                      <strong>Total (Sum)/</strong>
                    </p>
                    <p>
                      <strong>Quantity</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Total/ (Amount)/<p></p>
                    <p>Total (Sum)/</p>
                    <p>Quantity</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Imprudencia</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Imprudencia
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Recklessness</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Recklessness
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Impuesto</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Impuesto
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Tax/</strong>
                    <p></p>
                    <p>
                      <strong>Taxation/</strong>
                    </p>
                    <p>
                      <strong>Fee</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Tax/<p></p>
                    <p>Taxation/</p>
                    <p>Fee</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Incumplimiento</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Incumplimiento
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Breach</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Breach
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Indemnización</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Indemnización
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Compensation</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Compensation
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Inmueble</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Inmueble
                  </td>
                  <td className={styles.p} width="180">
                    <strong>House/</strong>
                    <p></p>
                    <p>
                      <strong>Real estate/</strong>
                    </p>
                    <p>
                      <strong>Dwelling</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    House/<p></p>
                    <p>Real estate/</p>
                    <p>Dwelling</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Inquilino/</strong>
                    <p></p>
                    <p>
                      <strong>Arrendatario</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Inquilino/<p></p>
                    <p>Arrendatario/</p>
                    <p>
                      <strong>Locario</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Tenant/</strong>
                    <p></p>
                    <p>
                      <strong>Lessee/</strong>
                    </p>
                    <p>
                      <strong>Leaseholder</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Tenant/<p></p>
                    <p>Lessee/</p>
                    <p>Leaseholder</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Inscripción/ (registral)/</strong>
                    <p></p>
                    <p>
                      <strong>Referencia registral/</strong>
                    </p>
                    <p>
                      <strong>Descripción registral/</strong>
                    </p>
                    <p>
                      <strong>Escritura/ (pública)/</strong>
                    </p>
                    <p>
                      <strong>Registro/</strong>
                    </p>
                    <p>
                      <strong>Escrituración</strong>
                    </p>
                    <p>&nbsp;</p>
                  </td>
                  <td className={styles.p} width="151">
                    Inscripción/ (registral)/<p></p>
                    <p>Escritura/ (pública)/</p>
                    <p>
                      <strong>Matrícula/</strong>
                    </p>
                    <p>Registro/</p>
                    <p>Escrituración/</p>
                    <p>
                      <strong>Nomenclatura catastral/</strong>
                    </p>
                    <p>
                      <strong>Matriculación</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Registry description/</strong>
                    <p></p>
                    <p>
                      <strong>Legal Description of the property</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Legal Description of the property/<p></p>
                    <p>
                      <strong>Legal land description</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Inspección</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Inspección
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Inspection</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Inspection
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Instancia</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Instancia
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Instance</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Instance
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Interés</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Interés
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Interest</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Interest
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Intervienen/</strong>
                    <p></p>
                    <p>
                      <strong>Reunidos/</strong>
                    </p>
                    <p>
                      <strong>Comparecen</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    <strong>Entre/</strong>
                    <p></p>
                    <p>
                      <strong>Se reúnen</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Between</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Between
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Jurisdicción/</strong>
                    <p></p>
                    <p>
                      <strong>Fuero</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Jurisdicción/<p></p>
                    <p>Fuero</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Jurisdiction</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Jurisdiction
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Límite</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Límite
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Limit</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Limit
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Mutuo acuerdo</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Mutuo acuerdo/<p></p>
                    <p>
                      <strong>Común y mutuo acuerdo</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Mutual consent/</strong>
                    <p></p>
                    <p>
                      <strong>Mutually agreed</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Mutual consent/<p></p>
                    <p>Mutually agreed</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Normativa/</strong>
                    <p></p>
                    <p>
                      <strong>Prescripciones legales</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Normativa
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Regulations/</strong>
                    <p></p>
                    <p>
                      <strong>Rules</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Regulations/<p></p>
                    <p>Rules</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Notario/ (público)</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Notario/ (público)/<p></p>
                    <p>
                      <strong>Escribano/ (público)</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Notary/</strong>
                    <p></p>
                    <p>
                      <strong>Notary Public</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Notary/<p></p>
                    <p>Notary Public</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Notificación/</strong>
                    <p></p>
                    <p>
                      <strong>Comunicación</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Notificación/<p></p>
                    <p>Comunicación</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Notice/</strong>
                    <p></p>
                    <p>
                      <strong>Communication</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Notice/<p></p>
                    <p>Communication</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Obligación/</strong>
                    <p></p>
                    <p>
                      <strong>Responsabilidad</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Obligación/<p></p>
                    <p>Responsabilidad</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Obligation/</strong>
                    <p></p>
                    <p>
                      <strong>Responsability/</strong>
                    </p>
                    <p>
                      <strong>Liability</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Obligation/<p></p>
                    <p>Responsability/</p>
                    <p>Liability</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Ocupación</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Ocupación
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Occupation/</strong>
                    <p></p>
                    <p>
                      <strong>Occupancy</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Occupation/<p></p>
                    <p>Occupancy</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Ocupante</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Ocupante/<p></p>
                    <p>
                      <strong>Intruso</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Occupier</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Occupier
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Otorgamiento</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Otorgamiento
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Grant</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Grant
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Pacto/</strong>
                    <p></p>
                    <p>
                      <strong>Acuerdo</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Pacto/<p></p>
                    <p>Acuerdo</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Covenant</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Covenant
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Pagadero</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Pagadero
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Payable</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Payable
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Pago</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Pago
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Payment</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Payment
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Pareja civil (de hecho)</strong>
                  </td>
                  <td className={styles.p} width="151">
                    <strong>Unión civil/convivencial</strong>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Civil partner</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Civil partner
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Parte</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Parte
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Party</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Party
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Parte compradora/</strong>
                    <p></p>
                    <p>
                      <strong>Adquiriente/</strong>
                    </p>
                    <p>
                      <strong>Comprador</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Parte compradora/<p></p>
                    <p>Adquiriente/</p>
                    <p>Comprador</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Acquirer/</strong>
                    <p></p>
                    <p>
                      <strong>Buyer/</strong>
                    </p>
                    <p>
                      <strong>Purchaser</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Acquirer/<p></p>
                    <p>Buyer/</p>
                    <p>Purchaser</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Parte vendedora/</strong>
                    <p></p>
                    <p>
                      <strong>Vendedor</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Parte vendedora/<p></p>
                    <p>Vendedor/</p>
                    <p>
                      <strong>Dador</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Seller</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Seller
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Particular</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Particular
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Particular</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Particular
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Pecuniario</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Pecuniario
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Pecuniary</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Pecuniary
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Pérdida</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Pérdida
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Loss</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Loss
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Periodo</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Periodo
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Period</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Period
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Plazo</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Plazo
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Term</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Term
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Pleno dominio</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Pleno/<strong>perfecto dominio</strong>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Freehold</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Freehold
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Posesión</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Posesión
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Possession</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Possession
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Precio/ (de venta)</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Precio/ (de venta)
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Price/</strong>
                    <p></p>
                    <p>
                      <strong>Sale Price</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Price/<p></p>
                    <p>Sale Price</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Presente</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Presente
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Present</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Present
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Prescripciones legales/</strong>
                    <p></p>
                    <p>
                      <strong>Normativa</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Normativa
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Regulations/</strong>
                    <p></p>
                    <p>
                      <strong>Rules</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Regulations/<p></p>
                    <p>Rules</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Prestamista</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Prestamista
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Lender</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Lender
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Préstamo</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Préstamo
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Loan</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Loan
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Previo</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Previo
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Prior</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Prior
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Propiedad</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Propiedad
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Property</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Property
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Propiedad comunitaria/</strong>
                    <p></p>
                    <p className={styles.p}>
                      <strong>Copropiedad/</strong>
                    </p>
                    <p className={styles.p}>
                      <strong>Condominio</strong>
                    </p>
                    <p className={styles.p}></p>
                  </td>
                  <td className={styles.p} width="151">
                    Propiedad comunitaria/<p></p>
                    <p className={styles.p}>Copropiedad/</p>
                    <p className={styles.p}>Condominio</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Condominium</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Condominium
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Propietario/</strong>
                    <p></p>
                    <p>
                      <strong>Dueño</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Propietario/<p></p>
                    <p>Dueño</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Owner/</strong>
                    <p></p>
                    <p>
                      <strong>Landlor</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Owner/<p></p>
                    <p>Landlor</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Prorrateo</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Prorrateo
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Apportionment</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Apportionment
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Prórroga</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Prórroga
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Extension</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Extension
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Prueba</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Prueba
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Proof</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Proof
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Público</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Público
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Public</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Public
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Referencia registral/</strong>
                    <p></p>
                    <p>
                      <strong>Descripción registral/</strong>
                    </p>
                    <p>
                      <strong>Escritura/ (pública)/</strong>
                    </p>
                    <p>
                      <strong>Escrituración/</strong>
                    </p>
                    <p>
                      <strong>Registro/</strong>
                    </p>
                    <p>
                      <strong>Inscripción/ (registral)/</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Escritura/ (pública)/<p></p>
                    <p>
                      <strong>Matrícula/</strong>
                    </p>
                    <p>Escrituración/</p>
                    <p>Registro/</p>
                    <p>Inscripción/ (registral)/</p>
                    <p>
                      <strong>Nomenclatura catastral/</strong>
                    </p>
                    <p>
                      <strong>Matriculación</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Registry description/</strong>
                    <p></p>
                    <p>
                      <strong>Legal Description of the property</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Legal Description of the property/<p></p>
                    <p>Legal land description</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Registro de la Propiedad/</strong>
                    <p></p>
                    <p>
                      <strong>Catastro</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Registro de la Propiedad/<p></p>
                    <p>
                      <strong>Registro de la Propiedad Inmueble</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Land Registry/</strong>
                    <p></p>
                    <p>
                      <strong>Local deeds registry</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    <strong>Real Property Official Record</strong>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Regulado por/</strong>
                    <p></p>
                    <p>
                      <strong>Lo dispuesto en/</strong>
                    </p>
                    <p>
                      <strong>En virtud de/</strong>
                    </p>
                    <p>
                      <strong>Con arreglo a/</strong>
                    </p>
                    <p>
                      <strong>Conforme a/</strong>
                    </p>
                    <p>
                      <strong>De conformidad con</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Regulado por/<p></p>
                    <p>Lo dispuesto en/</p>
                    <p>En virtud de/</p>
                    <p>Con arreglo a/</p>
                    <p>Conforme a/</p>
                    <p>De conformidad con/</p>
                    <p>
                      <strong>Sujeción al</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Pursuant to/</strong>
                    <p></p>
                    <p>
                      <strong>In accordance with/</strong>
                    </p>
                    <p>
                      <strong>In relation to/</strong>
                    </p>
                    <p>
                      <strong>According to</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Pursuant to/<p></p>
                    <p>In accordance with/</p>
                    <p>In relation to/</p>
                    <p>According to</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Reparación</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Reparación
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Compensatio</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Compensation
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Representante</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Representante
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Agent</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Agent
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Requerimiento</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Requerimiento
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Request/</strong>
                    <p></p>
                    <p>
                      <strong>Demand</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Request/<p></p>
                    <p>Demand</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Requisito/</strong>
                    <p></p>
                    <p>
                      <strong>Condición</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Requisito/<p></p>
                    <p>Condición</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Condition/</strong>
                    <p></p>
                    <p>
                      <strong>Requirement</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Condition/<p></p>
                    <p>Requirement</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Respuesta/</strong>
                    <p></p>
                    <p>
                      <strong>Contestación</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Respuesta/<p></p>
                    <p>Contestación</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Reply</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Reply
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Rescindir</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Rescindir
                  </td>
                  <td className={styles.p} width="180">
                    <strong>To rescind</strong>
                  </td>
                  <td className={styles.p} width="161">
                    To rescind
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Responsabilidad/</strong>
                    <p></p>
                    <p>
                      <strong>Obligación</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Responsabilidad/<p></p>
                    <p>Obligación</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Obligation/</strong>
                    <p></p>
                    <p>
                      <strong>Responsability/</strong>
                    </p>
                    <p>
                      <strong>Liability</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Obligation/<p></p>
                    <p>Responsability/</p>
                    <p>Liability</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Retención</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Retención
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Withholding</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Withholding
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Reunidos/</strong>
                    <p></p>
                    <p>
                      <strong>Intervienen/</strong>
                    </p>
                    <p>
                      <strong>Comparecen</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    <strong>Entre/</strong>
                    <p></p>
                    <p>
                      <strong>Se reúnen</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Between</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Between
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Sanción</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Samción
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Penalty</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Penalty
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Seguro/</strong>
                    <p></p>
                    <p>
                      <strong>Garantía</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Garantía
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Warrant/</strong>
                    <p></p>
                    <p>
                      <strong>Assurance</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Warrant/<p></p>
                    <p>Assurance</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Señal/</strong>
                    <p></p>
                    <p>
                      <strong>Arras</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Señal/<p></p>
                    <p>Arras</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Down-payment</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Down payment
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Servidumbre</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Servidumbre
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Easement</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Easement
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Subasta</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Subasta
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Auction</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Auction
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Sujeto</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Sujeto
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Subject</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Subject
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Suma/</strong>
                    <p></p>
                    <p>
                      <strong>Cantidad/</strong>
                    </p>
                    <p>
                      <strong>Importe/</strong>
                    </p>
                    <p>
                      <strong>Monto/</strong>
                    </p>
                    <p>
                      <strong>Cuantía</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Suma/<p></p>
                    <p>Cantidad/</p>
                    <p>Importe/</p>
                    <p>Monto/</p>
                    <p>Cuantía</p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Total /(Amount)/</strong>
                    <p></p>
                    <p>
                      <strong>Total /(Sum)/</strong>
                    </p>
                    <p>
                      <strong>Quantity</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Total /(Amount)/<p></p>
                    <p>Total /(Sum)/</p>
                    <p>Quantity</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Tasación</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Tasación
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Appraisal</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Appraisal
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Tenencia</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Tenencia
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Tenure</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Tenure
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Terminación</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Terminación
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Termination/</strong>
                    <p></p>
                    <p>
                      <strong>Completion</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Termination/<p></p>
                    <p>Completion</p>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Testigo</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Testigo
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Witness</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Witness
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className={styles.p}>
                    <strong>Título</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Título
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Tittle</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Tittle
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Transmisión</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Transmisión
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Transmission</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Transmission
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Tribunal</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Tribunal
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Court</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Court
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Uso y costumbre</strong>
                  </td>
                  <td className={styles.p} width="151">
                    <strong>Uso y costumbre/</strong>
                    <p></p>
                    <p>
                      <strong>Uso, prácticas y costumbres</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Usage and custom</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Usage and custom
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Urbano</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Urbano
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Urban</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Urban
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Vencimiento</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Vencimiento
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Expiration</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Expiration
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Vendedor/</strong>
                    <p></p>
                    <p>
                      <strong>Parte vendedora</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="151">
                    Vendedor/<p></p>
                    <p>Parte vendedora/</p>
                    <p>
                      <strong>Dador</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Vendor</strong>
                  </td>
                  <td className={styles.p} width="161">
                    Vendor
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Vender</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Vender
                  </td>
                  <td className={styles.p} width="180">
                    <strong>To sell</strong>
                  </td>
                  <td className={styles.p} width="161">
                    To sell
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Venta a crédito</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Venta a crédito
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Credit-sale</strong>
                  </td>
                  <td className={styles.p} width="161">
                    <strong>Credit sale</strong>
                  </td>
                </tr>
                <tr>
                  <td className={styles.p}>
                    <strong>Vivienda</strong>
                  </td>
                  <td className={styles.p} width="151">
                    Vivienda
                  </td>
                  <td className={styles.p} width="180">
                    <strong>Home/</strong>
                    <p></p>
                    <p>
                      <strong>House/</strong>
                    </p>
                    <p>
                      <strong>Dwelling</strong>
                    </p>
                  </td>
                  <td className={styles.p} width="161">
                    Home/<p></p>
                    <p>House/</p>
                    <p>Dwelling</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <MenuFooterPage />
      <FooterSite />
    </>
  );
}
