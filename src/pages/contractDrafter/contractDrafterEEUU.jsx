import ContractDrafter from "@/container/contractDrafter";
import { contractDrafterARG } from "@/lib/drafter";

export default function ContractDrafterEEUUPage() {
  return (
    <ContractDrafter
      description="Plantilla EEUU"
      contract={contractDrafterARG}
    />
  );
}
