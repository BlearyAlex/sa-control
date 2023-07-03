import React from 'react';
import { Input, Formulario } from '../../../../components/utils';

export const OpcionUno = () => {
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
      <h2 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
        Oficio de traslado de expediente al área de investigación competente
        para inicio o procedimiento de probables responsabilidades
        administrativas emitido por la SFP
      </h2>

      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" type="number" name="numeroOficio" />
          <Input label="Fecha:" type="date" name="fecha" />
        </div>
        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};
