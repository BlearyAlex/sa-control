import React from 'react';
import { Input, Formulario } from '../../utils';

export const SextoPaso = () => {
  const initialValues = {
    fecha: '',
    fechaLimite: '',
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
        Acta de Incio de Auditoria
      </h1>

      <Formulario initialValues={initialValues}>
        <div className="flex space-x-2">
          <Input label="Fecha:" name="fecha" type="date" />

          <Input
            label="Fecha limite para entrega de la información:"
            name="fechaLimite"
            type="date"
          />
        </div>
        <Input label="Subir Archivos:" name="archivos" type="file" />
      </Formulario>
    </>
  );
};
