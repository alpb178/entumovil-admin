/* eslint-disable react/prop-types */
import { Field } from "formik";
import React from "react";

export const InputField = (props) => {
  const { type, name, error, placeholder, label } = props;

  return (
    <div className="w-full text-xl">
      {label && (
        <label htmlFor={name} className="font-bold">
          {label}
        </label>
      )}

      <Field
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`text-field !p-2 ${
          error
            ? "border-red-400 bg-red-100"
            : "filled border-transparent"
        }`}
        aria-label="username"
      />

      {error ? (
        <p className="text-red-600">{error.toString()}</p>
      ) : null}
    </div>
  );
};
