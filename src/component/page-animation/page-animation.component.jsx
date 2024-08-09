/* eslint-disable react/prop-types */
import clsx from "clsx";
import React from "react";

export function PageAnimation(props) {
  const { children, className, direction } = props;
  return (
    <div
      className={clsx(
        `page-enter-from-${direction ?? "right"} mt-5 w-screen`,
        className
      )}
    >
      {children}
    </div>
  );
}
