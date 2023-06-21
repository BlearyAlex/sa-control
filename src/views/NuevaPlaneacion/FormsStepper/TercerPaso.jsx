import React from 'react';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import { Formulario } from '../../../utils';

const TercerPaso = () => {
  const initialValues = {
    numeroOficio: '',
    fecha: '',
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
        <h1 className="font-bold text-xl text-center">
          Oficio de notificación y citación para el inicio de Auditoria emitido
          por la SFP a la Dependencia o Entidad ejecutora del recurso
        </h1>

        <Input label="No. de Oficio:" name="numeroOficio" type="number" />
        <Input label="Fecha:" name="fecha" type="date" />
      </Formulario>
    </>
  );
};

export default TercerPaso;
