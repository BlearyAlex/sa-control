import React from 'react';
import Input from '../../../components/Input';
import { Formulario } from '../../../utils/Formulario';

const OpcionUno = () => {
  const initialValues = {
    numeroOficio: '',
    fecha: '',
    archivos: '',
    numeroOficio2: '',
    fecha2: '',
    archivos2: '',
  };
  return (
    <>
      <Formulario initialValues={initialValues}>
        <h2 className="font-semibold text-center">
          Oficio de Solicitud de Prórroga
        </h2>

        <div className="flex space-x-2">
          <Input label="No. de Oficio:" name="numeroOficio" type="number" />
          <Input label="Fecha:" name="fecha" type="date" />
        </div>
        <Input label="Subir Archivos:" name="archivos" type="file" />

        <h2 className="font-semibold text-center">
          Oficio de Autorización de Prórroga
        </h2>

        <div className="flex space-x-2">
          <Input label="No. de Oficio:" name="numeroOficio2" type="number" />
          <Input label="Fecha:" name="fecha2" type="date" />
        </div>
        <Input label="Subir Archivos:" name="archivos2" type="file" />
      </Formulario>
    </>
  );
};

export default OpcionUno;
