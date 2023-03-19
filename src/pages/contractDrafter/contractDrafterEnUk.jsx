import ContractDrafter from "@/container/contractDrafter";
import { contractDrafterUK } from "@/lib/drafter";

export default function ContractDrafterEnUkPage() {
  return (
    <ContractDrafter
      description="Plantilla Británica"
      contract={contractDrafterUK}
    />
  );
}
