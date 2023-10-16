import { ErrorMessage, useField } from "formik";

export const Select = ({ label, ...props }) => {
  const { field } = useField(props);

  return (
    <div className="">
      <label
        className="mr-2 font-semibold"
        htmlFor={props.name}
      >
        {label}
      </label>
      <select
        className="mr-2 border  rounded-e-md"
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="span"
      ></ErrorMessage>
    </div>
  );
};
