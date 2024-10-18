/* eslint-disable react/prop-types */

import React from "react";

export function ContainerFormPage(props) {
  const { children } = props;
  return (
    <div
      className={`border-1  flex  h-auto w-434px flex-col items-center justify-center rounded-lg border border-custom-border bg-field`}
    >
      <div className="m-4">{children}</div>
    </div>
  );
}
