import ContractDrafterComponent from "@/component/contractDrafter";
import TopImage from "@/component/topImage";
import { contractDrafterUK } from "@/lib/drafter";

export default function ContractDrafterEnUk() {
  return (
    <>
      <TopImage
        name="Redactor de Documentos"
        description="Plantilla Ingles"
        imageUrl="cabecera-contratos-inmocor.jpg"
      />

      <ContractDrafterComponent contract={contractDrafterUK} />
    </>
  );
}
