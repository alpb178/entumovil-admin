/* eslint-disable react/prop-types */
import React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export const DateInputField = ({ ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <DatePicker
      {...props}
      {...meta}
      {...field}
      name={props.name}
      dateFormat="MMMM d, yyyy"
      className="autocomplete-field bg-field hover:border-button ml-3   max-w-full border border-l-0 border-r-0 border-t-0  p-3"
      onChange={(value) => {
        helpers.setValue(format(new Date(value), "yyyy-MM-dd"));
      }}
    />
  );
};
