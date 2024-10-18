/* eslint-disable react/prop-types */
import { Field } from "formik";
import React from "react";

export const CheckBoxField = (props) => {
  const { name, error, label, onClick, disabled } = props;

  return (
    <div className="w-full font-humanst mb-[15px] text-16px">
      <div className="flex">
        {!disabled && (
          <div className="w-5">
            <Field
              type="checkbox"
              name={name}
              id={name}
              disabled={disabled}
              className="h-5 w-5 rounded-2xl"
            />
          </div>
        )}
        <a
          className={`ml-3  cursor-pointer ${
            error
              ? "text-red-600 hover:text-red-800"
              : "text-primary-600 hover:text-primary-800"
          }  `}
          onClick={onClick}
        >
          {label}
        </a>
      </div>
    </div>
  );
};
