import React from "react";

const ViewDoc = ({ textDoc }) => {
  const CustomText = () => {
    return (
      <p className="mt-5">
        {textDoc.split(" ").map((text) => {
          if (text.includes("XXX")) {
            return (
              <input className="ml-1 mr-1 h-7 w-32 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent " />
            );
          }
          if (text === "XXX,") {
            return (
              <>
                <input className="ml-1 mr-1 h-7 w-32 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent" />
                ,
              </>
            );
          }
          return `${text} `;
        })}
      </p>
    );
  };

  return <CustomText />;
};

export default ViewDoc;
