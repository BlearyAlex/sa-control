import { ErrorMessage, Field, useField } from 'formik';

export const Input = ({ label, ...props }) => {
  const { field } = useField(props);
  return (
    <div className="mt-2">
      <label className="mr-2 font-semibold" htmlFor={props.name}>
        {label}
      </label>
      <Field {...field} {...props} className="border" />
      <ErrorMessage name={props.name} component="span"></ErrorMessage>
    </div>
  );
};
