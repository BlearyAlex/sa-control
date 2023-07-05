import React from 'react';
import { Input, Select, Formulario } from '../../../../components/utils';

export const OpcionDos = () => {
  const initialValues = {
    oficioDesignacion: '',
    fecha: '',
    nombreRepresentante: '',
    cargoRepresentante: '',
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <div className="flex space-x-2">
          <Input
            label="No. de Oficio de representación:"
            name="oficioDesignacion"
            type="number"
          />

          <Input label="Fecha:" type="date" name="fecha" />
        </div>

        <div className="flex space-x-2">
          <Input
            label="Nombre del representante:"
            type="text"
            name="nombreRepresentante"
          />

          <Select label="Cargo del representante:" name="cargoRepresentante">
            <option value="">--Seleccionar--</option>
          </Select>
        </div>

        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};
