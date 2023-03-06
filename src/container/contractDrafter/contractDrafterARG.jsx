import ContractDrafterComponent from "@/component/contractDrafter";
import TopImage from "@/component/topImage";

export default function ContractDrafterARG() {
  return (
    <>
      <TopImage
        name="Redactor de Documentos"
        description="Plantilla Argentina"
        imageUrl="cabecera-contratos-inmocor.jpg"
      />
      <ContractDrafterComponent
        title="Boleto de Compraventa"
        sumary={`En la Ciudad XXX de la Provincia XXX, de la República XXX, a los XXX días del mes de XXX de XXX, comparecen las siguientes partes: En calidad de vendedor/a: El/la Sr/a XXX domiciliado
      en la calle XXX N°XXX, Piso XXX Depto XXX, de la localidad de XXX quien acredita identidad con XXX NºXXX, en adelante denominado el/la VENDEDOR/A.En calidad de comprador/a: El/la Sr/a XXX
domiciliado en la calle XXX N°XXX, Piso XXX Depto XXX, de la localidad de XXX quien acredita identidad con XXX NºXXX, en adelante denominado el/la COMPRADOR/A.Convienen en suscribir el
presente boleto de compraventa sujeto a lassiguientes cláusulas y condiciones:`}

	    	clausesContract={[`PRIMERA: El/la VENDEDOR/A vende a la el/la COMPRADOR/A quien compra de conformidad el inmueble sito en la calle XXX, N°XXX, Piso XXX, Depto XXX, de la Ciudad de XXX, Provincia de XXX,
con Nomenclatura Catastral: Circunscripción: XXX, Sección: XXX, Manzana: XXX, Parcela: XXX, Subparcela XXX, todo ello conforme a su respectivo título de propiedad extendido por Escritura
Pública Nº XXX, con fecha XXX, autorizada por el Escribano Público XXX,  titular del Registro NºXXX, la que pasó al Folio XXX de dicho Registro e inscripta en el Registro de la Propiedad
Inmueble en la Matrícula Nº XXX con fecha XXX (en adelante, el INMUEBLE), en el estado en que se encuentra y que el/la COMPRADOR/A denuncia conocer desde antes.`,`

SEGUNDA: La presente operación se realiza por el precio total y convenido de Pesos XXX (XXX), pagaderos de la siguiente forma: Pesos XXX (XXX) el/la COMPRADOR/A los entrega en este acto
al/la VENDEDOR/A, en dinero en efectivo, a cuenta de precio y como principio de ejecución de contrato, quien le otorga, por medio del presente, el más suficiente recibo y carta de pago
en forma por la suma recibida. El saldo de Pesos XXX (XXX) será abonado de la siguiente forma: XXX`,`

TERCERA: La presente venta se realiza en base a títulos perfectos del INMUEBLE, libre de todo gravamen y/o inhibición y con todos sus impuestos, tasas y contribuciones y demás cargas
totalmente pagas al día de la fecha, libre de ocupantes y/o intrusos y sin oposición de terceros.`,`

CUARTA: El/la VENDEDOR/A entregará la posesión legal y material del INMUEBLE, en el acto de escrituración traslativa de dominio. iento de cualquiera de las partes a cualquiera de las
obligaciones que les impone el presente convenio, le hará incurrir en mora de pleno derecho por el mero vencimiento de los plazos sin necesidad de interpelación previa judicial o
extrajudicial.`,`

QUINTA: Para el caso de que alguna de las partes no cumpla con lasobligaciones a su cargo, la perjudicada, podrá exigir el estricto cumplimiento del presente con más los daños y
perjuicios.`,`

SEXTA: Para todos los efectos emergentes del presente boleto de compraventa, las partes se someten al fuero y jurisdicción de los Tribunales de XXX, con exclusión de cualquier otro
fuero o jurisdicción, constituyendo a sus efectos domicilios especiales en los indicados en el encabezamiento, donde se tendrán por válidas todas las comunicaciones y/o citaciones
judiciales y/o extrajudiciales que hubiere lugar.`]}
	   	footer={`En prueba de conformidad las partes firman XXX ejemplares de un mismo tenor y a un solo efecto, quedando el contrato a sellar en poder del vendedor quien se hace cargo del gasto
correspondiente, en XXX a los XXX días del mes de  XXX de XXX. `}	
      />
    </>
  );
}
