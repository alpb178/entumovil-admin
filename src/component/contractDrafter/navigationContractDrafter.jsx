import { contractDrafterESP } from "@/lib/drafter";
import Tree from "../tree";

export default function NavigationContractDrafter(props) {
  return (
    <ul className="list-check mt-20 w-2/12">
      <Tree
        data={contractDrafterESP}
        contract={props.contract}
        setContract={props.setContract}
      />
    </ul>
  );
}
