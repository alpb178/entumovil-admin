/* eslint-disable react/prop-types */
import { Field } from "formik";
import React from "react";

export const InputField = (props) => {
  const { type, name, error, placeholder, label } = props;

  return (
    <div className="mb-[5px]">
      <div
        className={`flex h-60px w-404px flex-col rounded-lg border-1px border-custom-border bg-field p-1  ${
          error ? "border-red-400" : "border-custom-border"
        }`}
      >
        {label && (
          <label
            htmlFor={name}
            className="font-humanst text-12px font-light text-label"
          >
            {label}
          </label>
        )}

        <Field
          type={type}
          name={name}
          id={name}
          className="!h-50px !border-none !bg-field !font-humanst !text-16px !font-light placeholder-black"
          placeholder={placeholder}
        />
      </div>
      {error ? (
        <p className="font-humanst text-12px ml-2 font-light text-red-600">
          {error.toString()}
        </p>
      ) : null}
    </div>
  );
};
