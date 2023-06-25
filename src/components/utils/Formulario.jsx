import { Form, Formik } from 'formik';
import React from 'react';

export const Formulario = ({ children, initialValues, fncEnviar }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        fncEnviar(values);
      }}
    >
      {() => (
        <Form>
          {children}
          {/* <button type="submit">enviar</button> */}
        </Form>
      )}
    </Formik>
  );
};
