import React from 'react';
import { Input } from '../../../components/utils/Input';
import { Select } from '../../../components/utils/Select';
import { Formulario } from '../../../components/utils/Formulario';

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
        <Input
          label=" No. de Oficio de designación de enlace de auditoria:"
          name="oficioDesignacion"
          type="number"
        />

        <Input label="Fecha:" type="date" name="fecha" />

        <Input
          label="Nombre del enlace designado:"
          type="text"
          name="nombreEnlace"
        />

        <Select label="Cargo del enlace designado:" name="cargoEnlace">
          <option value="">--Seleccionar--</option>
        </Select>

        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};
