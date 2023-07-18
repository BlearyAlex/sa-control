import React from 'react';
import { Input, Formulario } from '../../utils';

export const QuintoPaso = () => {
  const initialValues = {
    numeroOficio: '',
    fecha: '',
    archivos: '',
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

      <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
        Orden de Auditoria
      </h1>

      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" name="numeroOficio" type="number" />
          <Input label="Fecha:" name="fecha" type="date" />
        </div>
        <Input label="Subir Archivos:" name="archivos" type="file" />
      </Formulario>
    </>
  );
};
