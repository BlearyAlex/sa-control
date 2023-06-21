import { ErrorMessage, useField } from 'formik';

const Select = ({ label, ...props }) => {
  const { field } = useField(props);

  return (
    <div className="mt-2">
      <label className="mr-2 font-semibold" htmlFor={props.name}>
        {label}
      </label>
      <select className="mr-2 border" {...field} {...props} />
      <ErrorMessage name={props.name} component="span"></ErrorMessage>
    </div>
  );
};

export default Select;
