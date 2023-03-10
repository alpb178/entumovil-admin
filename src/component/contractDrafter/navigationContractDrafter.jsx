import { contractDrafterESP } from "@/lib/constants";
import Tree from "../tree";

export default function NavigationContractDrafter(props) {
  const handleChangeV2 = (value, field) => {
    const newState = { ...props.contract, [field]: value };
    props.setContract(newState);
  };
  return (
    <ul className="list-check mt-7 w-1/12">
      {contractDrafterESP.map((element) => (
        <li className="flex hover:text-red">
          <a className="ml-5" onClick={() => handleChangeV2("a", element.name)}>
            {element.name}
          </a>
          <div>
            <i className="fas fa-chevron-down fa-xs ml-2" />
          </div>
        </li>
      ))}
      <Tree
        data={contractDrafterESP}
        contract={props.contract}
        setContract={props.setContract}
      />
    </ul>
  );
}
