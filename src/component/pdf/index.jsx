import { Doc } from "@/lib/constants";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import fs from "vite-plugin-fs/browser";

const ViewPDf = ({ radio, valueSelect, findText }) => {
  const [docToShow, setDocToShow] = useState([]);

  const readTxt = (src) => {
    fs.readFile(`/public/doc/${src.replace("FO", "TXT")}.txt`)
      .then((response) => {
        response.includes(findText) && setDocToShow((prev) => [...prev, src]);
      })
      .catch({ return: false });
  };

  useEffect(() => {
    console.log("Componente renderizado!!");
    setDocToShow([]);
    Doc.map(({ src }) => {
      if (
        src.includes(radio) &&
        !!valueSelect.find((element) => src.includes(element))
      )
        readTxt(src);
      else if (radio === "Macrocorpus-INMOCOR") readTxt(src);
    });
  }, [radio, valueSelect]);

  return (
    <>
      {docToShow?.length > 0 ? (
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
