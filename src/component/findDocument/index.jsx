import { Document } from "@/lib/doc";
import { findWordsDocTxt, textTofind } from "@/lib/utils";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import ViewTXT from "./viewDocTxt";

export default function ViewFindDocument({
  valueSelect,
  findText,
  setDocumentTxt,
  setContentId,
}) {
  const [docToShow, setDocToShow] = useState([]);

  const readTxt = async (src) => {
    await fetch(`/doc/${src.replace("FO", "TXT")}.txt`).then((res) =>
      res.text().then(
        (response) =>
          findWordsDocTxt(response, findText) &&
          setDocToShow((prev) => [
            ...prev,
            {
              title: src.split("/")[2],
              pdf: `/doc/${src}.pdf`,
              txt: `/doc/${src.replace("FO", "TXT")}.txt`,
              docTxt: response,
            },
          ])
      )
    );
  };

  useEffect(() => {
    setDocToShow([]);
    Document.map(({ src }) => {
      if (
        valueSelect?.length > 0 &&
        !!valueSelect.find((element) => src.includes(element))
      ) {
        readTxt(src);
      } else if (valueSelect?.length === 0) {
        readTxt(src);
      }
    });
  }, [valueSelect]);

  return (
    <>
      {docToShow?.length > 0 ? (
        <div className="mb-10">
          <div className="text-3xl">
            {findText !== "" ? (
              <>
                Resultados de Búsqueda para :
                <a className="ml-5 text-gray">{findText}</a>
              </>
            ) : (
              <>Mostrando {docToShow.length} documentos </>
            )}
          </div>
          {docToShow.map((element, index) => (
            <div key={index} className="border-bottom mt-10  mb-4  pb-3">
              <div className="flex-inline flex">
                <div className="rounded-full bg-legislation-gray">
                  <i className="fas fa-check m-1 rounded-full text-red" />
                </div>
                <h5 className="ml-5">
                  <a
                    href={element?.pdf}
                    target="_blank"
                    className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                  >
                    {element?.title}
                    <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                  </a>
                </h5>
              </div>

              {textTofind(element?.docTxt, findText).map((textDoc, i) => (
                <ViewTXT
                  key={i}
                  className="whitespace-pre-wrap"
                  textDoc={textDoc}
                  findText={findText}
                />
              ))}

              <div className="mt-12 flex">
                <button
                  onClick={() => {
                    setDocumentTxt(element?.docTxt),
                      setContentId("container-section");
                  }}
                  className="ml-auto hover:text-red"
                >
                  Ver mas ...
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>No existen Documentos para este criterio de Búsqueda</>
      )}
    </>
  );
}
