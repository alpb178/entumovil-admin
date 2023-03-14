import ContractDrafterComponent from "@/component/contractDrafter";
import TopImage from "@/component/topImage";
import { contractDrafterESP } from "@/lib/drafter";

export default function ContractDrafterESP() {
  return (
    <>
      <TopImage
        name="Redactor de Documentos"
        description="Plantilla España"
        imageUrl="cabecera-contratos-inmocor.jpg"
      />

      <ContractDrafterComponent contract={contractDrafterESP} />
    </>
  );
}
