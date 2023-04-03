import { obtainTexTWithQuotes } from "@/lib/utils";
import React from "react";
import reactStringReplace from "react-string-replace";

export default function ViewDocTxt({ textDoc, findText }) {
  const textWithDoubleQuotes = obtainTexTWithQuotes(findText);

  const ViewDocTxt = () => {
    return (
      <p className="mt-5 ml-20  whitespace-pre-wrap text-gray">
        ...
        {textWithDoubleQuotes.length > 0 &&
          reactStringReplace(
            textDoc,
            findText.replace(/['"]+/g, ""),
            (match, i) => (
              <strong key={i} className="bg-amber-300 ml-5 mr-5 text-black">
                {match}
              </strong>
            )
          )}

        {!textWithDoubleQuotes.length &&
          textDoc.split(/['" ",.()]+/g).map((text, i) => {
            if (
              findText
                .split(" ")
                .find((element) =>
                  text.toUpperCase().includes(element.toUpperCase())
                )
            ) {
              return (
                <strong key={i} className="bg-amber-300 ml-1 mr-1 text-black">
                  {text}
                </strong>
              );
            } else {
              return `${text} `;
            }
          })}...
      </p>
    );
  };

  return <ViewDocTxt />;
}
