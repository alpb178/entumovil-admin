import { Field } from "formik";

export const InputField = (props) => {
  const { type, name, error, placeholder, label } = props;

  return (
    <div className="w-full p-12">
      {label && (
        <label htmlFor={name} className="sr-only m-5 ">
          {label}
        </label>
      )}

      <Field
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`text-field mt-2 ${
          error
            ? "border-red-400 bg-red-100"
            : "filled border-transparent"
        }`}
        aria-label="username"
      />

      {error ? (
        <p className="mt-2 text-red-600">{error.toString()}</p>
      ) : null}
    </div>
  );
};
