import React from 'react';
import { Input } from '../../utils';
import { Formulario } from '../../utils';

export const PrimerPaso = () => {
  const initialValues = {
    programaAnual: '',
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
          Programa Anual de Fiscalización
        </h1>
        <Input label="Fecha de Inicio:" name="programaAnual" type="date" />
        <Input label="Subir Archivos:" name="archivos" type="file" />
      </Formulario>
    </>
  );
};
