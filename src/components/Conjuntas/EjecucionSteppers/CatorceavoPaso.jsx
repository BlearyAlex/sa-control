import React from 'react';
import { Input, Formulario } from '../../utils';

export const CatorceavoPaso = () => {
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

      <h1 className="font-bold text-center text-xl pt-2 border-t-2 mt-4">
        Acta Administrativa de Resultados Definitivos
      </h1>

      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <Input label="Fecha:" type="date" name="fecha" />
        <Input
          label="Plazo de vencimiento para la solventación de resultados preliminares:"
          type="date"
          name="fechaVencimiento"
        />
        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};
