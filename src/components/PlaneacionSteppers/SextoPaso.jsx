import React from 'react';
import { Input, Formulario } from '../utils';

export const SextoPaso = () => {
  const initialValues = {
    fecha: '',
    fechaLimite: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <label htmlFor="" className="text-red-400 font-semibold">
        No. de Auditoria:
      </label>

      <h1 className="text-xl font-semibold text-center">
        Acta de Incio de Auditoria
      </h1>

      <Formulario initialValues={initialValues}>
        <Input label="Fecha:" name="fecha" type="date" />

        <Input
          label="Fecha limite para entrega de la información:"
          name="fechaLimite"
          type="date"
        />
      </Formulario>
    </>
  );
};
