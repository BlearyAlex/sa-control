import React from 'react';
import { Input, Formulario } from '../../utils';

export const SextoPaso = () => {
  const initialValues = {
    fecha: '',
    fechaVencimiento: '',
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
        Acta Administrativa del Cierre de la Auditoria
      </h1>

      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <div className="flex space-x-2">
          <Input label="Fecha:" name="fecha" type="date" />
          <Input
            label="Plazo de vencimiento para la solventación de las observaciones:"
            name="fechaVencimiento"
            type="date"
          />
        </div>
        <Input label="Subir Archivos:" name="archivos" type="file" />
      </Formulario>
    </>
  );
};
