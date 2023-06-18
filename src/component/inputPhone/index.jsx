import { useField } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
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
        width: "12rem",
        height: "50px",
        fontSize: "larger",
        boxShadow: "none",
        borderColor: "gray100",
        borderRadius: "0.3rem",
      }}
    
    />
  );
};

export default PhoneInputField;
