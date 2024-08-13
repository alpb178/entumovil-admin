/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import React from "react";
export const ButtonSubmit = (props) => {
  const { name, onClick, type, disabled } = props;

  return (
    <button
      type={type}
      onClick={() => onClick?.()}
      disabled={disabled}
      className={`m-3 rounded-md ${
        disabled ? "bg-gray-200" : "bg-blue-500"
      } p-2  text-lg  text-white`}
    >
      {name}
    </button>
  );
};

export const ButtonCancel = (props) => {
  const { name, onClick, disabled } = props;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      disabled={disabled}
      className="m-3 rounded-md bg-gray-300 p-2  text-lg text-black "
    >
      {name}
    </button>
  );
};

export const ButtonCancelLink = (props) => {
  const { name, url } = props;

  return (
    <Link
      to={url}
      className="m-3 rounded-md bg-gray-300 p-2  text-lg text-black "
      prefetch={false}
    >
      {name}
    </Link>
  );
};
