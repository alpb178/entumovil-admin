import ContractDrafterComponent from "@/component/contractDrafter";
import TopImage from "@/component/topImage";
import { contractDrafterDE } from "@/lib/drafter";

export default function ContractDrafterDE() {
  return (
    <>
      <TopImage
        name="Redactor de Documentos"
        description="Plantilla Alemania"
        imageUrl="cabecera-contratos-inmocor.jpg"
      />
        <ContractDrafterComponent contract={contractDrafterDE} />
    </>
  );
}
