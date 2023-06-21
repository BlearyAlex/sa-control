import React from 'react';
import Input from '../../../components/Input';
import { Formulario } from '../../../utils/Formulario';

const QuintoPaso = () => {
  const initialValues = {
    numeroOficio: '',
    fecha: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <label
        text-center
        text-xlabel
        htmlFor=""
        className="text-red-400 font-semibold"
      >
        No. de Auditoria:
      </label>

      <h1 className="text-xl font-semibold text-center">Orden de Auditoria</h1>

      <Formulario initialValues={initialValues}>
        <Input label="No. de Oficio:" name="numeroOficio" type="number" />
        <Input label="Fecha:" name="fecha" type="date" />
      </Formulario>
    </>
  );
};

export default QuintoPaso;
