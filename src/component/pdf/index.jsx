import { Doc } from "@/lib/constants";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const ViewPDf = ({ radio, valueSelect }) => {
  const [docToShow, setDocToShow] = useState([]);

  useEffect(() => {
    let docTemp = [];
    Doc.map(({ src }) => {
      if (
        src.includes(radio) &&
        !!valueSelect.find((element) => src.includes(element))
      ) {
        docTemp.push(src);
      } else if (radio === "Macrocorpus-INMOCOR") {
        docTemp.push(src);
      }
    });
    setDocToShow(docTemp);
  }, [radio, valueSelect]);

  return (
    <>
      {docToShow.length > 0 ? (
        <div className="mb-10 h-40 overflow-auto shadow-none">
          {docToShow.map((doc) => (
            <li key={doc} className="border-bottom flex-inline mb-4 flex pb-3">
              <div className="rounded-full bg-legislation-gray">
                <i className="fas fa-check m-1 rounded-full text-red" />
              </div>
              <h5 className="ml-5">
                <a
                  href={`/doc/${doc}.pdf`}
                  className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                >
                  {doc.split("/")[2]}
                  <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                </a>
              </h5>
            </li>
          ))}
        </div>
      ) : (
        <>No existen Documentos para este criterio de Búsqueda</>
      )}
    </>
  );
};

export default ViewPDf;
