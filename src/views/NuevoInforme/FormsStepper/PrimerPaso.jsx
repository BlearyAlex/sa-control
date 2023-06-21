import React from 'react';
import Input from '../../../components/Input';
import { Formulario } from '../../../utils/Formulario';

const PrimerPaso = () => {
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
      <label htmlFor="" className="text-red-400 font-semibold">
        No. de Auditoria:
      </label>

      <h1 className="font-bold text-center text-xl">
        Oficio de entrega de información de auditoria emitido por la SFP
      </h1>

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

export default PrimerPaso;
