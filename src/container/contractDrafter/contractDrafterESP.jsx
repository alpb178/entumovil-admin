import ContractDrafterComponent from "@/component/contractDrafter";
import TopImage from "@/component/topImage";

export default function ContractDrafterESP() {
  return (
    <>
      <TopImage
        name="Redactor de Documentos"
        description="Plantilla España"
        imageUrl="cabecera-contratos-inmocor.jpg"
      />

      <ContractDrafterComponent
        title="CONTRATO DE COMPRAVENTA DE VIVIENDA"
        partes="De un lado la parte vendedora, D XXX, mayor de edad, con
          domicilio en XXX, con DNI nº XXX casado en régimen de comunidad de
          gananciales con Dª.XXX, mayor de edad, con domicilio en XXX, y con
          DNI nº XXX. Y de otro la parte compradora, DXXX, mayor de edad,
          con domicilio en XXX, de estado civil soltero y con DNI nº XXX.
          Ambas partes tienen y se reconocen la capacidad legal necesaria
          para el otorgamiento del presente contrato , y a tal fin."
          footer='Leído el presente documento por ambas partes, y estando conformes
          con su contenido, lo firman por duplicado en todas las páginas en
          el lugar y fecha reseñadas en el encabezamiento.'
      />
    </>
  );
}
