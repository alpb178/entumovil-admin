import ContractDrafterComponent from "@/component/contractDrafter";
import TopImage from "@/component/topImage";

export default function ContractDrafter(props) {
  return (
    <>
      <TopImage
        name="Redactor de Documentos"
        description={props?.description}
        imageUrl="cabecera-contratos-inmocor.jpg"
      />

      <ContractDrafterComponent contract={props?.contract} />
    </>
  );
}
