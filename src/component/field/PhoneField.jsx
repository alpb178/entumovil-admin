import { useField } from "formik";
import "react-phone-input-2/lib/style.css";
import PI from "react-phone-input-2";


export const PhoneInputField = ({ label,error, ...props }) => {
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
