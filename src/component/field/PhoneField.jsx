/* eslint-disable react/prop-types */
import { useField } from "formik";
import "react-phone-input-2/lib/style.css";
import PI from "react-phone-input-2";
import React from "react";

export const PhoneInputField = ({ label, error, ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  const ReactPhoneInput = PI.default ? PI.default : PI;

  return (
    <div
      className={`flex mb-[5px] h-60px w-404px flex-col rounded-lg border-1px border-custom-border bg-field p-1  ${
        error ? "border-red-400" : "border-custom-border"
      }`}
    >
      <div className="relative">
        {label && (
          <label
            htmlFor={name}
            className="font-humanst text-12px font-light text-label"
          >
            {label}
          </label>
        )}
        <ReactPhoneInput
          {...props}
          {...meta}
          {...field}
          name={props.name}
          country={"cu"}
          onlyCountries={["cu"]}
          countryCodeEditable={false}
          value={field.value}
          autoFocus={true}
          onChange={(value) => {
            helpers.setValue(value);
          }}
          inputStyle={{
            width: "100%",
            height: "25px",
            fontSize: "16px",
            background: "#717171",
            border: "none",
            borderRadius: "0",
          }}
          inputProps={{
            name: "phone",
            required: true,
          }}
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
