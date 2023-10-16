import { ErrorMessage, Field, useField } from "formik";

export const Input = ({ label, ...props }) => {
  const { field } = useField(props);
  return (
    <div className="">
      <label
        className="mr-2 font-semibold"
        htmlFor={props.name}
      >
        {label}
      </label>
      <Field
        {...field}
        {...props}
        className="border rounded-md "
      />
      <ErrorMessage
        name={props.name}
        component="span"
      ></ErrorMessage>
    </div>
  );
};
