import React from "react";

export default function ViewDocTxt({ textDoc, findText }) {
  const ViewDocTxt = () => {
    return (
      <p className="mt-5 ml-20  whitespace-pre-wrap text-gray">
        {textDoc.split(" ").map((text) => {
          if (
            findText
              .split(" ")
              .find((element) => element.toUpperCase() === text.toUpperCase())
          ) {
            return (
              <span>
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
