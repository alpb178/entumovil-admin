import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import BodyContractDrafterJson from "./bodyContractDrafterJson";

import NavigationContractDrafter from "./navigationContractDrafter";

export default function ContractDrafterComponent(props) {
  const [contract, setContract] = useState();
  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", [1024, 1024]);
    var width = doc.internal.pageSize.getWidth();

    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save(contract?.title + ".pdf");
      },
      x: 0,
      y: 0,
    });
  };

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
    <section className=" mb-20 flex text-xl leading-loose  text-gray">
      <div className="container mx-auto">
        <div className=" flex  ">
          <NavigationContractDrafter
            contract={contract}
            setContract={setContract}
            data={props?.contract}
          />
          <div className="mt-14 ml-56 mb-14 w-full border-2">
            <BodyContractDrafterJson contract={contract} />
          </div>
        </div>

        <button
          className="flex-inline ml-auto mb-8 flex rounded bg-gradient-to-r from-gradient-for-footer to-gradient-to py-2 px-4 font-bold text-white"
          onClick={() => generatePDF()}
          type="primary"
        >
          Descargar PDF
        </button>
      </div>
    </section>
  );
}
