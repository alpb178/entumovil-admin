import React, { useState } from "react";
import reactStringReplace from "react-string-replace";
export default function ViewDocContractDrafter({ textDoc }) {
  return (
    <>
      {reactStringReplace(textDoc, "XXX", (match, i) => (
        <input
          key={i}
          id={i}
          name={"input" + i}
          type="text"
          value=""
          on
          className="border-gray-400 required ml-1 mr-1  w-auto border-b-2 outline-none focus:border-blue-400"
        />
      ))}
    </>
  );
}
