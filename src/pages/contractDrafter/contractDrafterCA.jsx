import ContractDrafter from "@/container/contractDrafter";
import { contractDrafterCA } from "@/lib/drafter";

export default function ContractDrafterCAPage() {
  return (
    <ContractDrafter
      description="Plantilla Catalan"
      contract={contractDrafterCA}
    />
  );
}
