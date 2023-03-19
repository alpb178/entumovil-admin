import ContractDrafter from "@/container/contractDrafter";
import { contractDrafterFR } from "@/lib/drafter";

export default function ContractDrafterFRPage() {
  return (
    <ContractDrafter
      description="Plantilla Francia"
      contract={contractDrafterFR}
    />
  );
}
