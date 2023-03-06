import React from "react";

const ViewDoc = ({ textDoc }) => {
  const CustomText = () => {
    return (
      <p className="mt-5">
        {textDoc.split(" ").map((text) => {
          switch (text) {
            case "XXX":
              return (
                <input className="ml-1 mr-1 h-7 w-32 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent " />
              );

            case "XXX,":
              return (
                <>
                  <input className="ml-1 mr-1 h-7 w-32 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent" />
                  ,
                </>
              );

            case "Dª.XXX,":
              return (
                <>
                  Dª.
                  <input className="ml-1 mr-1 h-7 w-32 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent" />
                  ,
                </>
              );
            case "XXX.":
              return (
                <>
                  <input className="ml-1 mr-1 h-7 w-32 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent" />
                  .
                </>
              );
            case "XXX..":
              return (
                <>
                  <input className="ml-1 mr-1 h-7 w-32 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent" />
                  .
                </>
              );
            case "DXXX,":
              return (
                <>
                  D
                  <input className="ml-1 mr-1 h-7 w-32 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent" />
                  ,
                </>
              );
            case "(XXX)":
              return (
                <>
                  (
                  <input className="ml-1 mr-1 h-7 w-32 border border-t-transparent border-r-transparent border-l-transparent focus:border focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent" />
                  )
                </>
              );
            default:
              return `${text} `;
          }
        })}
      </p>
    );
  };

  return <CustomText />;
};

export default ViewDoc;
