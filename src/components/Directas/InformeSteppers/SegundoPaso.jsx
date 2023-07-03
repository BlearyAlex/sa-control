import React from 'react';
import { Input, Formulario } from '../../utils';

export const SegundoPaso = () => {
  const initialValues = {
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <label htmlFor="" className="text-red-400 font-semibold">
        No. de Auditoria:
      </label>

      <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
        Informe de Auditoria
      </h1>

      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};
