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
        <h1 className="text-xl font-bold relative text-center">
          <span className="z-10 relative">
            {' '}
            Oficio de notificación y citación para el inicio de Auditoria
            emitido por la SFP a la Dependencia o Entidad ejecutora del recurso
          </span>
          <span className="absolute left-0 top-1/2 h-[1px] bg-gray-300 w-full"></span>
          <span className="absolute right-0 top-1/2 h-[1px] bg-gray-300 w-full"></span>
        </h1>

        <Input label="No. de Oficio:" name="numeroOficio" type="number" />
        <Input label="Fecha:" name="fecha" type="date" />
      </Formulario>
    </>
  );
};

export default TercerPaso;
