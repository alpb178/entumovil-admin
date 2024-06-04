import { useField } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const PhoneInputField = ({ label,error, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <div className="flex w-full flex-col text-xl">
      <div className="relative">
        {label && (
          <label htmlFor="password" className="font-bold">
            {label}
          </label>
        )}
        <PhoneInput
          {...props}
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
            borderColor: "gray100",
            borderRadius: "10",
          }}
        />
      </div>
    </div>
  );
};
