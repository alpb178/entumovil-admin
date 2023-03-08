import React from "react";
import reactStringReplace from "react-string-replace";

const ViewDoc = ({ textDoc }) => {
  return (
    <>
      {reactStringReplace(textDoc, "XXX", (match, i) => (
        <input className="ml-1 mr-1 h-7 w-32 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent" />
      ))}
    </>
  );
};

export default ViewDoc;
