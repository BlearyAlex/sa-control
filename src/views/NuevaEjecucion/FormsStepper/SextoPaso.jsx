import React from 'react';
import Input from '../../../components/Input';
import { Formulario } from '../../../utils/Formulario';

const SextoPaso = () => {
  return (
    <>
      <label htmlFor="" className="text-red-400 font-semibold">
        No. de Auditoria:
      </label>

      <h1 className="font-bold text-center text-xl">
        Acta Administrativa del Cierre de la Auditoria
      </h1>

      <Formulario>
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

export default SextoPaso;
