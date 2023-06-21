import { ErrorMessage, useField,  } from 'formik';

const Select = ({ label, ...props }) => {
  const [ field ] = useField( props);

  return (
    <>
      <label htmlFor={ props.name }>{ label }</label>
      <select { ...field } { ...props } />
      <ErrorMessage name={props.name}  component='span'></ErrorMessage>
    </>
  );
};

export default Select;
