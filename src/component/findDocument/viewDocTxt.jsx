import { findPhraseWordTxt } from "@/lib/utils";
import React from "react";
import reactStringReplace from "react-string-replace";

export default function ViewDocTxt({ textDoc, findText }) {
  const ViewDocTxt = () => {
    return (
      <p className="mt-5 ml-20  whitespace-pre-wrap text-gray">
        {findPhraseWordTxt(textDoc, findText)
          ? reactStringReplace(textDoc, findText.split(`"`)[1], (match, i) => (
              <span key={i}>
                <strong className="bg-amber-300 text-black">{match}</strong>{" "}
              </span>
            ))
          : textDoc.split(" ").map((text,i) => {
              if (
                findText
                  .split(" ")
                  .find(
                    (element) => element.toUpperCase() === text.toUpperCase()
                  )
              ) {
                return (
                  <span key={i}>
                    <strong className="bg-amber-300 text-black">{text}</strong>{" "}
                  </span>
                );
              }
              return `${text} `;
            })}
      </p>
    );
  };

  return <ViewDocTxt />;
}
