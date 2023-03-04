import React from "react";

const ViewTXT = ({ textDoc, findText }) => {
  const CustomText = () => {
    return (
      <p className="mt-5 ml-20  text-gray">
        {textDoc.split(" ").map((text) => {
          if (findText.split(" ").find((element) => element === text)) {
            return <span className="text-black">{text} </span>;
          }
          return `${text} `;
        })}
      </p>
    );
  };

  return <CustomText />;
};

export default ViewTXT;
