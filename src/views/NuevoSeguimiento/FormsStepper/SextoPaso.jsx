import React from 'react';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import { Formulario } from '../../../utils/Formulario';

const SextoPaso = () => {
  const initialValues = {
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
        Acta Administrativa del Seguimiento de la Auditoria
      </h1>

      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <Input label="Fecha:" type="date" name="fecha" />
        <Input label="Subir archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};

export default SextoPaso;
