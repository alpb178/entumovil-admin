import React from "react";
import reactStringReplace from "react-string-replace";

export default function ViewDocContractDrafter({ textDoc }) {
  return (
    <>
      {reactStringReplace(textDoc, "XXX", (match, i) => (
        <input key={i} type='text' name='input' className="ml-1 mr-1 h-5 w-20 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent"></input>
      ))}
    </>
  );
}
