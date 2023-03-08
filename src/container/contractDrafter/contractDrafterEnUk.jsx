import ContractDrafterComponent from "@/component/contractDrafter";
import TopImage from "@/component/topImage";

export default function ContractDrafterEnUk() {
  return  <>
  <TopImage
    name="Redactor de Documentos"
    description="Plantilla Ingles"
    imageUrl="cabecera-contratos-inmocor.jpg"
  />

<ContractDrafterComponent
        title="CONTRACT OF PURCHASE AND SALE"
        sumary="This purchase ande sale agreement is entered into this day of XXX 20, XXX "
        
        headersParts='Gathered'
          parts="Mr. XXX of legal age XXX, holder Identify Card XXX and resident in XXX and Mrs. XXX of legal age XXX, holder of Identify Card XXX and resident in XXX (the �Sellers�)ANDMr. XXX of legal age XXX, holder Identify Card XXX and resident in XXX and Mrs. XXX of legal age XXX, holder of Identify Card XXX and resident in XXX (the �Purchasers�)Mr./Ms. XXX [insert full name, address and tax number] (the Vendor�), appoint Mr./Ms. XXX [insert full name, address, fiscal number and professional qualification, if necessary] (the Agent), subject to and in accordance with the terms and conditions of this Agreement, to act as his/her XXX [exclusive or non- exclusive] Agent in the marketing and sale of the real estate property located in/atXXX [insert address town and country] whose information is provided in Annex 1 (Property Information Form) of this Agreement.Mr./Ms. [insert full name, address and fiscal tax number](the Vendor�), appoint [insert company legal name] whose registered officeis at XXX [address, city and country] and registration/tax number isXXX, represented by XXX [surname and firstname, position] (the Agent�), subject to and in accordance with the terms and conditions of this Agreement, to act as his/her XXX [exclusive or non-exclusive] Agent in themarketing and sale of the real estate property located in/at XXXXXX [insert address, town and country] whoseinformation is provided in Annex 1 (Property Information Form) of this Agreement."
          
          //headersClausesClient='Exponen'
          /*clausesClient={[`PRIMERO: 
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
            nº XXX`,` SEGUNDO: El expresado inmueble se encuentra en edificio en
            régimen de COMUNIDAD, regulada por la Ley de Propiedad Horizontal.`,`
            TERCERO.- D. XXX Y Dª. XXX. manifiesta que el citado inmueble se
            encuentra libre de cargas, así como de arrendatarios, ocupantes o
            precaristas.`,` CUARTO.- La vivienda se encuentra al corriente en el
            pago de gastos de la Comunidad de Propietarios, según acredita la
            parte vendedora mediante certificado del Secretario de la
            Comunidad con el visto bueno del Presidente, emitida conforme al
            art. de la Ley de Propiedad Horizontal.`,` QUINTO.- Expuesto cuanto
            antecede, las partes convienen en celebrar el presente contrato de
            compraventa de la vivienda y anexos descritos en el expositivo
            primero conforme a las siguientes:`]}*/
            
            headersClausesContract='Stipulations'
            clausesContract={[`1. RepresentationsThe Seller represents and warrants that the Property is free and clear of any liens, charged, encumbrances or rights of others which will not be satisfied out of the sales proceeds. If the representations of the Seller are untrue upon the Closing Date, the Purchaser may terminate any future agreement without penalty.`,`
            2. VALIDITY PERIOD OF THE AGREEMENTThis Agreement shall take effect on XXX [Day/Month/Year] and expireXXX [Day/Month/Year], both days inclusive.This Agreement shall commence on XXX [Day/Month/Year] and shall have a term of [1, 3, 6, 9, 12] months.`,`
            3. DUTIES OF THE AGENTIn addition to the duties incumbent on the Agent under this Agreement, the Agent shall:(a) Obtain all the information necessary for the sale of the Property.(b) Market the Property on behalf of the Vendor.(c) Arrange for purchasers to inspect the Property.(d) Conduct negotiations and submit all offers in relation to the Property to the Vendor.(e) Assist the Vendor in entering into a binding agreement for sale and purchase with a Purchaser.`,`
            4. PRICE OF THE PROPERTYThe price of the property shall be [insert amount and currency].This price may only be varied with written instructions of the Vendor and such instructions shall become part of this Agreement.The Vendor does not confer upon the Agent, by virtue of this Clause, the right to accept an offer on behalf of the Vendor. The price specified is for advertising and marketing of the property purposes only.`,` 
            5. COMMISSIONif during the Validity Period of the Agreement the Vendor through the Agent enters into a binding Contract for sale and purchase of the Property, then the Vendor is liable to pay the Agent a commission of XXX % [insert percentage, usually between 1% and 5%] of the transacted price of the Property (taxes excluded).The commission shall be paid:Alternative A. Upon the signing of the sale and purchase contract.Alternative B. Upon completion of the Property transaction as specified in the contract for sale and purchase.XXX`,`
            
            Notices Clause In order to comply with their contractual obligations, the Parties establish the following address for the provision of notices related to this contract:- Party 1 [insert full address].- Party 2 [insert full address].`
            ]}     
           
          clausesAdd = "ADDITIONAL CLAUSES"
          
          footer='Real Estate DisclosureThe Seller does not know of any material facts that would affect the value of the Property, except those observable by the Purchaser or know to the Seller and stated in this Contract.'

          seller="Purchaser"
          buyer="Seller"
      />
</>;
}
