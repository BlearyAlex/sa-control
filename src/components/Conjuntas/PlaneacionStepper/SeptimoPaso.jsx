import React from 'react';
import { Input, Formulario } from '../../utils';

export const SeptimoPaso = () => {
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
      <div>
        <label htmlFor="" className="text-red-400 font-semibold">
          No. de Auditoria:
        </label>
      </div>

      <Formulario initialValues={initialValues}>
        <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
          Acta de Inicio de Auditoria
        </h1>

        <Input label="No. de Oficio:" name="numeroOficio" type="number" />
        <Input label="Fecha:" name="fecha" type="date" />
        <Input
          label="Fecha limite para la entrega de la información:"
          name="fecha"
          type="date"
        />
        <Input label="Subir Archivos:" name="archivos" type="file" />
      </Formulario>
    </>
  );
};
