import { useEffect, useState } from "react";
import BodyContractDrafterJson from "./bodyContractDrafterJson";

import NavigationContractDrafter from "./navigationContractDrafter";

export default function ContractDrafterComponent(props) {
  const [contract, setContract] = useState();

  useEffect(() => {
    let Json = {};
    {
      props?.contract.map((element) => {
        Json[element?.options[0].father] = element?.options[0].value;
      });
    }
    setContract(Json);
  }, []);

  return (
    <div className=" ml-20 mb-20 mr-20 text-xl  text-gray">
      <div className="flex">
        <NavigationContractDrafter
          contract={contract}
          setContract={setContract}
          data={props?.contract}
        />
        <div className="mt-14 ml-20 mb-7 w-full border-2">
          <BodyContractDrafterJson contract={contract} />
        </div>
      </div>
    </div>
  );
}
