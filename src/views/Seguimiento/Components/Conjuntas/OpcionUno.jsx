import React from 'react';
import { Input, Formulario } from '../../../../components/utils';

export const OpcionUno = () => {
  const initialValues = {
    numeroOficio: '',
    fecha: '',
    archivos: '',
    numeroOficio2: '',
    fecha2: '',
    archivos2: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <h2 className="font-semibold pt-2 border-t-2 mt-2 text-xl text-center">
        Oficio de Solicitud de Prórroga
      </h2>

      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" type="number" name="numeroOficio" />
          <Input label="Fecha:" type="date" name="fecha" />
        </div>

        <Input label="Subir Archivos:" type="file" name="archivos" />

        <h2 className="font-semibold pt-2 border-t-2 mt-2 text-xl text-center">
          Oficio de Autorización de Prórroga
        </h2>

        <div className="flex space-x-2">
          <Input label="No. de Oficio:" type="number" name="numeroOficio2" />
          <Input label="Fecha:" type="date" name="fecha2" />
        </div>

        <Input label="Subir Archivos:" type="file" name="archivos2" />
      </Formulario>
    </>
  );
};
