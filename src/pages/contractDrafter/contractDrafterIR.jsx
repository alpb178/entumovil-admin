import ContractDrafter from "@/container/contractDrafter";
import { contractDrafterARG } from "@/lib/drafter";


export default function ContractDrafterIRPage() {
  return (
    <ContractDrafter
      description="Plantilla Irlanda"
      contract={contractDrafterARG}
    />
  );
}
