import React from 'react';
import Input from '../../../components/Input';
import { Formulario } from '../../../utils/Formulario';

const SegundoPaso = () => {
  return (
    <>
      <label htmlFor="" className="text-red-400 font-semibold">
        No. de Auditoria:
      </label>

      <h1 className="font-bold text-center text-xl">
        Oficio de entrega de información de auditoria emitido por la SFP
      </h1>

      <Formulario>
        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};

export default SegundoPaso;
