import ContractDrafter from "@/container/contractDrafter";
import { contractDrafterDE } from "@/lib/drafter";

export default function ContractDrafterDEPage() {
  return (
    <ContractDrafter
      description="Plantilla Alemania"
      contract={contractDrafterDE}
    />
  );
}
