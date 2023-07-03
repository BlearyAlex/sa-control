import React from 'react';
import { Input, Select, Formulario } from '../../utils';

export const QuintoPaso = () => {
  const initialValues = {
    numeroOficio: '',
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
      <div>
        <label htmlFor="" className="text-red-400 font-semibold">
          No. de Auditoria:
        </label>
      </div>

      <Formulario initialValues={initialValues}>
        <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
          Oficio de Designación de coordinación de la auditoria por parte del
          enlace designado por el Gobierno del Estado de Zacatecas
        </h1>

        <Input label="No. de Oficio:" type="number" name="numeroOficio" />

        <Input label="Fecha:" type="date" name="fecha" />

        <Input
          label="Nombre del enlace designado:"
          type="number"
          name="nombreEnlace"
        />

        <Select label="Cargo del enlace designado" name="cargoEnlace">
          <option value="">--Seleccionar--</option>
        </Select>
        <Input label="Subir Archivos:" name="archivos" type="file" />
      </Formulario>
    </>
  );
};
