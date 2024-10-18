/* eslint-disable react/prop-types */
import React from "react";

export const Input = (props) => {
  const {
    type,
    name,
    error,
    placeholder,
    label,
    value,
    onChange,
    heigth,
    witdh,
  } = props;

  return (
    <div className="mb-[5px]">
      <div
        className={`flex h-${heigth ?? "auto"} w-${
          witdh ?? "auto"
        }px flex-col rounded-lg border-1px border-custom-border bg-field p-1  ${
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

        <input
          type={type}
          value={value}
          className="!h-50px !border-none !bg-field !font-humanst !text-16px !font-light placeholder-gray"
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
      </div>
      {error ? (
        <p className="ml-2 font-humanst text-12px font-light text-red-600">
          {error.toString()}
        </p>
      ) : null}
    </div>
  );
};
