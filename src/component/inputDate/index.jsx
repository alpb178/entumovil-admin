import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export const DateInputField = ({ label, ...props }) => {
  const [field, meta,helpers] = useField(props.name);

  return (
    <DatePicker
      {...props}
      {...meta}
      {...field}
      name={props.name}
      dateFormat="MMMM d, yyyy"
      className="autocomplete-field bg-field hover:border-button ml-3   max-w-full border border-t-0 border-r-0 border-l-0  p-3"
      onChange={(value) => {
        helpers.setValue(format(new Date(value), "yyyy-MM-dd"));
      }}
    />
  );
};
