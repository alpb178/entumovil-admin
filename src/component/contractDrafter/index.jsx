import jsPDF from "jspdf";
import BodyContractDrafter from "./bodyContractDrafter";
import NavigationContractDrafter from "./navigationContractDrafter";

export default function ContractDrafterComponent(props) {
  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", [1024, 1024]);
    var width = doc.internal.pageSize.getWidth();

    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save(props?.title + ".pdf");
      },
      x: 15,
      y: 15,
    });
  };

  return (
    <section className=" mb-20 flex px-2 text-xl leading-loose  text-gray">
      <div className="container mx-auto">
        <div className=" flex   ">
          <NavigationContractDrafter />
          <div className="mt-14 ml-56 mb-14 w-full border-2">
            <BodyContractDrafter props={props} />
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
