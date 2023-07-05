import React from 'react';
import { Input, Select, Formulario } from '../../../../components/utils';

export const OpcionUno = () => {
  const initialValues = {
    oficioDesignacion: '',
    fecha: '',
    nombreEnlace: '',
    cargoEnlace: '',
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
            label=" No. de Oficio de designación de enlace de auditoria:"
            name="oficioDesignacion"
            type="number"
          />

          <Input label="Fecha:" type="date" name="fecha" />
        </div>

        <div className="flex space-x-2">
          <Input
            label="Nombre del enlace designado:"
            type="text"
            name="nombreEnlace"
          />

          <Select label="Cargo del enlace designado:" name="cargoEnlace">
            <option value="">--Seleccionar--</option>
          </Select>
        </div>

        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};
