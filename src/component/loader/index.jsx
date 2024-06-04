/* eslint-disable react/jsx-key */
import { Ellipsis } from "react-css-spinners";

export const Loader = ({ color = "rgba(0,0,0,0.5)" }) => {
  return (
    <div className="flex w-full justify-center items-center">
      <Ellipsis color={color} />
    </div>
  );
};


