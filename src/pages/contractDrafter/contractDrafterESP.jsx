import ContractDrafter from "@/container/contractDrafter";
import { contractDrafterESP } from "@/lib/drafter";

export default function ContractDrafterESPPage() {
  return (
    <ContractDrafter
      description="Plantilla España"
      contract={contractDrafterESP}
    />
  );
}
