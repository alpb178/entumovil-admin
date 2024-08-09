/* eslint-disable react/prop-types */
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Field } from "formik";
import { useState } from "react";
import React from "react";

export const PasswordField = (props) => {
  const { name, error, placeholder, label } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full flex-col text-lg">
      <div className="relative">
        {label && (
          <label htmlFor="password" className="font-bold">
            {label}
          </label>
        )}
        <Field
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          placeholder={placeholder}
          className={`text-field !p-2 ${
            error ? "border-red-400 bg-red-100" : "filled border-transparent"
          }`}
          aria-label="password"
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

      {error ? <p className="mt-1 text-red-600 text-sm">{error.toString()}</p> : null}
    </div>
  );
};
