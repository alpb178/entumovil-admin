import { returnJson } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import reactStringReplace from "react-string-replace";
export default function ViewDocContractDrafter({
  textDoc,
  json,
  setJson,
  info,
}) {
  useEffect(() => {
    returnJson(textDoc, info, setJson, json);
  }, [textDoc]);

  const handleChangeV2 = (value, field) => {
    const newState = { ...json, [field]: value };
    setJson(newState);
  };
  return (
    <>
      {reactStringReplace(textDoc, "XXX", (match, i) => (
        <input
          key={i}
          id={i}
          name={info + i}
          onChange={(e) => handleChangeV2(e.target.value, e.target.name)}
          type="text"
          className="border-gray-400 required ml-1 mr-1  w-auto border-b-2 outline-none focus:border-blue-400"
        />
      ))}
    </>
  );
}
