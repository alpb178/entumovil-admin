import React from "react";

const ViewTXT = ({ textDoc, findText }) => {
  const CustomText = () => {
    return (
      <p className="mt-5 ml-20  whitespace-pre-wrap text-gray">
        {textDoc.split(" ").map((text) => {
          if (
            findText
              .split(" ")
              .find((element) => element.toUpperCase() === text.toUpperCase())
          ) {
            return (
              <span >
                <strong className="bg-amber-300 text-black">{text}</strong>{" "}
              </span>
            );
          }
          return `${text} `;
        })}
      </p>
    );
  };

  return <CustomText />;
};

export default ViewTXT;
