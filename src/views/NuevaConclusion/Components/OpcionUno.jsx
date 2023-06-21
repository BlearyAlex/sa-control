import React from 'react';
import Input from '../../../components/Input';
import { Formulario } from '../../../utils/Formulario';

export const OpcionUno = () => {
  return (
    <>
      <h2 className="font-semibold">
        Oficio de traslado de expediente al área de investigación competente
        para inicio o procedimiento de probables responsabilidades
        administrativas emitido por la SFP
      </h2>

      <Formulario>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" type="number" name="numeroOficio" />
          <Input label="Fecha:" type="date" name="fecha" />
        </div>
        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};
