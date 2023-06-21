import React from 'react';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import { Formulario } from '../../../utils/Formulario';

const QuintoPaso = () => {
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
      </label>{' '}
      <h1 className="font-bold text-center text-xl">
        Oficio de citación para notificación de obersvaciones y cierre de
        auditoria emitido por la SFP a la Dependencia o Entidad ejecutora del
        recurso
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

export default QuintoPaso;
