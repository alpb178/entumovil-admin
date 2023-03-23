import { contractDrafterESP } from "@/lib/drafter";
import Tree from "../tree";

export default function NavigationContractDrafter(props) {
  return (
    <ul className="list-check ml-8 mt-20 w-2/12 ">
      <Tree
        data={props.data}
        contract={props.contract}
        setContract={props.setContract}
        setContentId={props.setContentId}
      />
    </ul>
  );
}
