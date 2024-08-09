/* eslint-disable react/prop-types */
import React from "react";
import { Ellipsis } from "react-css-spinners";

export const Loader = ({ color = "rgba(0,0,0,0.5)" }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <Ellipsis color={color} />
    </div>
  );
};
