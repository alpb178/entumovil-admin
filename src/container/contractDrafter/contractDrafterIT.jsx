import ContractDrafterComponent from "@/component/contractDrafter";
import TopImage from "@/component/topImage";
import { contractDrafterIT } from "@/lib/drafter";

export default function ContractDrafterIT() {
  return  <>
  <TopImage
    name="Redactor de Documentos"
    description="Plantilla Italia"
    imageUrl="cabecera-contratos-inmocor.jpg"
  />

<ContractDrafterComponent contract={contractDrafterIT} />
</>;
}
