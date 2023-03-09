import { ArrowRightIcon } from "@heroicons/react/24/solid";

import jsPDF from "jspdf";
import ViewDocContractDrafter from "./viewDocContractDrafter";

export default function ContractDrafterComponent(props) {
  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", [1024, 1024]);
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save(props?.title + ".pdf");
      },
      x: 12,
      y: 12,
      width: width,
    });
  };

  return (
    <section className=" mb-20 flex px-2 text-xl leading-loose  text-gray">
      <div className="container mx-auto">
        <div className="item-center flex content-center  ">
          <div className="w-1/6">
            <ul className="list-check mt-7">
              <li className="border-bottom flex-inline mb-4 flex pb-3">
                <div className="rounded-full bg-legislation-gray">
                  <i className="fas fa-check m-1 rounded-full text-red" />
                </div>
                <h5 className="flex-inline ml-5 flex ">
                  <a
                    href=""
                    className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                  >
                    Titulo
                    <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                  </a>
                </h5>
              </li>
              <li className="border-bottom flex-inline mb-4 flex pb-3">
                <div className="rounded-full bg-legislation-gray">
                  <i className="fas fa-check m-1 rounded-full text-red" />
                </div>
                <h5 className="ml-5">
                  <a
                    href=""
                    className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                  >
                    Participantes
                    <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                  </a>
                </h5>
              </li>
            </ul>
          </div>
          <div id="content" className="mt-5 ml-7 mb-7 w-5/6 border-2">
            <div className=" mt-5 mb-5 text-center text-xl">{props?.title}</div>
            {props.sumary && (
              <div className="mx-5 mt-5 border-2 text-center">
                <div className="mx-5 mt-5 mb-5">
                  <ViewDocContractDrafter textDoc={props?.sumary} />
                </div>
              </div>
            )}

            {props?.headersParts && (
              <p className="mt-6 text-center">{props?.headersParts}</p>
            )}
            {props.parts && (
              <div className="mx-5 mt-5 border-2 text-justify">
                <div className="mx-5 mt-5 mb-5">
                  <ViewDocContractDrafter textDoc={props?.parts} />
                </div>
              </div>
            )}

            {props?.headersClausesClient && (
              <p className="mt-6 text-center">{props?.headersClausesClient}</p>
            )}

            {props.clausesClient && (
              <div className="mx-5 mt-5 mb-5 border-2 text-justify">
                <div className="mx-5 mt-5 mb-5">
                  {props?.clausesClient?.map((element) => (
                    <ViewDocContractDrafter textDoc={element} />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 text-center">
              {props?.headersClausesContract}
            </div>

            {props.clausesContract && (
              <div className="mx-5 mt-5 border-2 text-justify">
                <div className="mx-5 mt-5 mb-5">
                  {props?.clausesContract.map((element) => (
                    <ViewDocContractDrafter textDoc={element} />
                  ))}
                </div>
              </div>
            )}
            {props.clausesAdd && (
              <div className="mx-5">
                <h4 className="mt-7 text-center text-xl">
                  {<ViewDocContractDrafter textDoc={props?.clausesAdd} />}
                </h4>
                <textarea className="mt-5 mb-5 w-full border-2"></textarea>
              </div>
            )}

            <div className="mx-5 mb-5 border-2">
              <div className="mx-5 mb-10 mt-5 text-justify">
                {props.footer && (
                  <ViewDocContractDrafter textDoc={props?.footer} />
                )}
              </div>
              <div className="mb-7 text-justify">
                <div className="flex">
                  <div className="ml-5 w-1/2">
                    {props.seller && (
                      <ViewDocContractDrafter textDoc={props?.seller} />
                    )}
                  </div>
                  <div className="mr-5 w-1/2">
                    {props.buyer && (
                      <ViewDocContractDrafter textDoc={props?.buyer} />
                    )}
                  </div>
                </div>
              </div>
            </div>
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
