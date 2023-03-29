import { obtainTexTWithQuotes } from "@/lib/utils";
import React from "react";
import reactStringReplace from "react-string-replace";

export default function ViewDocTxt({ textDoc, findText }) {
  const textWithDoubleQuotes = obtainTexTWithQuotes(findText);
  const ViewDocTxt = () => {
    return (
      <p className="mt-5 ml-20  whitespace-pre-wrap text-gray">
        {textWithDoubleQuotes.length &&
          reactStringReplace(
            textDoc,
            findText.replace(/['"]+/g, ""),
            (match, i) => (
              <strong key={i} className="bg-amber-300 text-black">
                {match}
              </strong>
            )
          )}

        {!textWithDoubleQuotes.length &&
          textDoc.split(" ").map((text, i) => {
            if (
              findText
                .split(" ")
                .find((element) => element.toUpperCase() === text.toUpperCase())
            ) {
              return (
                <strong key={i} className="bg-amber-300 text-black">
                  {text}
                </strong>
              );
            }
            return `${text} `;
          })}
      </p>
    );
  };

  return <ViewDocTxt />;
}
