import React from 'react';
import { Input } from '../../../components/utils/Input';
import { Select } from '../../../components/utils/Select';
import { Formulario } from '../../../components/utils/Formulario';

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
        <Input
          label="No. de Oficio de representación:"
          name="oficioDesignacion"
          type="number"
        />

        <Input label="Fecha:" type="date" name="fecha" />

        <Input
          label="Nombre del representante:"
          type="text"
          name="nombreRepresentante"
        />

        <Select label="Cargo del representante:" name="cargoRepresentante">
          <option value="">--Seleccionar--</option>
        </Select>

        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};
