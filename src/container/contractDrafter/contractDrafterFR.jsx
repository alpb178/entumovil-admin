import ContractDrafterComponent from "@/component/contractDrafter";
import TopImage from "@/component/topImage";
import { contractDrafterFR } from "@/lib/drafter";

export default function ContractDrafterFR() {
  return (
    <>
      <TopImage
        name="Redactor de Documentos"
        description="Plantilla Francia"
        imageUrl="cabecera-contratos-inmocor.jpg"
      />

      <ContractDrafterComponent contract={contractDrafterFR} />
    </>
  );
}
