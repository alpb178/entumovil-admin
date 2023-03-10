
import { contractDrafterESP } from "@/lib/drafter";
import Tree from "../tree";

export default function NavigationContractDrafter(props) {
  const handleChangeV2 = (value, field) => {
    const newState = { ...props.contract, [field]: value };
    props.setContract(newState);
  };
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
