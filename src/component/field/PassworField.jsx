/* eslint-disable react/prop-types */
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Field } from "formik";
import React, { useState } from "react";

export const PasswordField = (props) => {
  const { name, error, placeholder, label } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-[5px]">
      <div
        className={`flex h-60px w-404px flex-col rounded-lg border-1px text-left border-custom-border bg-field p-1  ${
          error ? "border-red-400" : "border-custom-border"
        }`}
      >
        <div className="relative flex flex-col">
          {label && (
            <label
              htmlFor={name}
              className="font-humanst text-12px font-light text-label"
            >
              {label}
            </label>
          )}
          <Field
            type={showPassword ? "text" : "password"}
            name={name}
            id={name}
           className="!border-none !bg-field !font-humanst !text-16px !font-light placeholder-black"
            placeholder={placeholder}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6"
          >
            {showPassword ? (
              <EyeSlashIcon
                className="h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
            ) : (
              <EyeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {error ? (
        <p className="font-humanst text-12px font-light text-left text-red-600">
          {error.toString()}
        </p>
      ) : null}
    </div>
  );
};
