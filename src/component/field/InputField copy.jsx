/* eslint-disable react/prop-types */
import { Field } from "formik";
import React from "react";

export const CheckBoxField = (props) => {
  const { name, error, label, onClick } = props;

  return (
    <div className="w-full text-lg">
      <div className="flex">
        <div className="w-5">
          <Field
            type="checkbox"
            name={name}
            id={name}
            className="h-5 w-5 rounded border-gray-300 bg-gray-100"
          />
        </div>
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
