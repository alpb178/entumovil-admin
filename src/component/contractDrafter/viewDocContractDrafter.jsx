import React from "react";
import reactStringReplace from "react-string-replace";

export default function ViewDocContractDrafter({ textDoc }) {
  return (
    <>
      {reactStringReplace(textDoc, "XXX", (match, i) => (
        <input
          key={i}
          type="text"
          name="input"
          className=""
        ></input>
      ))}
    </>
  );
}
