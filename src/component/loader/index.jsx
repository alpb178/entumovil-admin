/* eslint-disable react/jsx-key */
import { Ellipsis } from "react-css-spinners";

const Loader = ({ color = "rgba(0,0,0,0.5)" }) => {
  return <Ellipsis color={color} />;
};

export default Loader;
