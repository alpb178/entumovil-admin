/* eslint-disable react/prop-types */
import React from "react";
export function PageAnimation(props) {
  const { children } = props;
  return <div className="page-enter-from-right w-screen, mt-5">{children}</div>;
}
