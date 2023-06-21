import React from 'react';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import { Formulario } from '../../../utils/Formulario';

const OpcionUno = () => {
  return (
    <>
      <h2 className="font-semibold text-green-400">
        Oficio de Solicitud de Prórroga
      </h2>

      <Formulario>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" type="number" name="numeroOficio" />
          <Input label="Fecha:" type="date" name="fecha" />
        </div>

        <Input label="Subir Archivos:" type="file" name="archivos" />

        <h2 className="font-semibold text-green-400 mt-2">
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

export default OpcionUno;
