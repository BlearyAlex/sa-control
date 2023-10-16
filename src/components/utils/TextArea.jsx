import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextArea = ({ label, ...props }) => {
  const { field } = useField(props);
  return (
    <div className="mt-2 items-center flex">
      <label
        className="mr-2 font-semibold items-center "
        htmlFor={props.name}
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className="border"
        rows={1}
      />
      <ErrorMessage
        name={props.name}
        component="span"
      ></ErrorMessage>
    </div>
  );
};
