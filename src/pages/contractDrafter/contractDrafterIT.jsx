import ContractDrafter from "@/container/contractDrafter";
import { contractDrafterIT } from "@/lib/drafter";

export default function ContractDrafterITPage() {
  return (
    <ContractDrafter
      description="Plantilla Italia"
      contract={contractDrafterIT}
    />
  );
}
