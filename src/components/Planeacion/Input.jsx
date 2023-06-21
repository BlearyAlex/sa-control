import { ErrorMessage, Field, useField } from 'formik';

const Input = ({ label, ...props }) => {
  const [ field ] = useField( props);
  return (
    <div>
      <label  htmlFor={ props.name }>{ label }</label>
      <Field { ...field } { ...props } className='border'/>
      <ErrorMessage name={props.name}  component='span'></ErrorMessage>
    </div>
  );
};

export default Input;
