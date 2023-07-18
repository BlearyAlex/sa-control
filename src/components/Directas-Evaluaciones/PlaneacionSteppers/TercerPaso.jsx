import React from 'react';
import { Input, Formulario } from '../../utils';

export const TercerPaso = () => {
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
          Oficio de notificación y citación para el inicio de Auditoria emitido
          por la SFP a la Dependencia o Entidad ejecutora del recurso
        </h1>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" name="numeroOficio" type="number" />
          <Input label="Fecha:" name="fecha" type="date" />
        </div>
        <Input label="Subir Archivos:" name="archivos" type="file" />
      </Formulario>
    </>
  );
};
