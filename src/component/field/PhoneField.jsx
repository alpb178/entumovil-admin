/* eslint-disable react/prop-types */
import { useField } from "formik";
import "react-phone-input-2/lib/style.css";
import PI from "react-phone-input-2";
import React from "react";

export const PhoneInputField = ({ label, error, ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  const ReactPhoneInput = PI.default ? PI.default : PI;

  return (
    <div className="flex w-full flex-col text-xl">
      <div className="relative">
        {label && (
          <label htmlFor="password" className="font-bold">
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
            marginTop: "0.2rem",
            width: "100%",
            height: "50px",
            fontSize: "larger",
            background: "#E8F0FE",
            borderColor: error ? "red" : "white",
            borderRadius: "10",
          }}
          inputProps={{
            name: "phone",
            required: true,
          }}
        />
        {error ? <p className="mt-2 text-red-600">{error.toString()}</p> : null}
      </div>
    </div>
  );
};
