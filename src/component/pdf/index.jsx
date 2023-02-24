import { Doc } from "@/lib/constants";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const ViewPDf = ({ radio }) => {
  return (
    <>
      {Doc.map(({ src }) => {
        if (src.includes(radio)) {
          return (
            <li className="border-bottom flex-inline mb-4 flex pb-3">
              <div className="rounded-full bg-legislation-gray">
                <i className="fas fa-check m-1 rounded-full text-red" />
              </div>
              <h5 className="ml-5">
                <a
                  href={`/doc/${src}.pdf`}
                  className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                >
                  {src}
                  <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                </a>
              </h5>
            </li>
          );
        } else if (radio === "macrocorpus-inmocor") {
          return (
            <li className="border-bottom flex-inline mb-4 flex pb-3">
              <div className="rounded-full bg-legislation-gray">
                <i className="fas fa-check m-1 rounded-full text-red" />
              </div>
              <h5 className="ml-5">
                <a
                  href={`/doc/${src}.pdf`}
                  className="icon-btn btn-link btn-arrow text-dark flex-inline flex"
                >
                  {src}
                  <ArrowRightIcon className="mt ml-2 flex h-7 w-10  font-black text-red hover:w-20" />
                </a>
              </h5>
            </li>
          );
        }
      })}
    </>
  );
};

export default ViewPDf;
