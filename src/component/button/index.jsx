/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import React from "react";
export const ButtonSubmit = (props) => {
  const { name, onClick, type, disabled, witdh, height } = props;

  return (
    <button
      type={type}
      onClick={() => onClick?.()}
      disabled={disabled}
      className={`text-18px m-1 rounded-md border border-custom-border  w-${
        witdh ?? "auto"
      } h-${height ?? "auto"} ${
        disabled ? "bg-gray-400 text-white" : "bg-buttonPasive text-black"
      } p-2`}
    >
      {name}
    </button>
  );
};

export const ButtonCancel = (props) => {
  const { name, onClick, disabled, witdh, height } = props;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      disabled={disabled}
      className={`text-18px m-1 rounded-md border border-custom-button text-center  w-${
        witdh ?? "auto"
      } h-${height ?? "auto"} ${"bg-white text-buttonPasive"} p-2`}
    >
      {name}
    </button>
  );
};

export const ButtonCancelLink = (props) => {
  const { name, url, witdh, height } = props;

  return (
    <Link
      to={url}
      className={`text-18px m-1 rounded-md border border-custom-button text-center  w-${
        witdh ?? "auto"
      } h-${height ?? "auto"} ${"bg-white text-buttonPasive"} p-2`}
    >
      {name}
    </Link>
  );
};

export const ButtonText = (props) => {
  const { name, onClick, disabled } = props;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      disabled={disabled}
      className="m-3 border-0 bg-transparent p-2 text-blue-600 "
    >
      {name}
    </button>
  );
};
