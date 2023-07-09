import React from 'react';
import { Input, Select, Formulario } from '../../utils';

export const SegundoPaso = () => {
  const initialValues = {
    solicitudInformacion: '',
    numero: '',
    fecha: '',
    archivos: '',
    autorizacionInformacion: '',
    numeroDos: '',
    fechaDos: '',
    archivosDos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <label htmlFor="" className="text-red-400 font-semibold">
        No. de Auditoria:
      </label>

      <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
        Transparencia
      </h1>

      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <Select
          label="Solicitud de reserva de la información de la auditoria:"
          name="solicitudInformacion"
        >
          <option value="">--Seleccionar--</option>
          <option value="">Memorándum</option>
          <option value="">Oficio</option>
        </Select>

        <div className="flex space-x-2">
          <Input label="Número:" type="number" name="numero" />
          <Input label="Fecha:" type="date" name="fecha" />
        </div>

        <Input label="Subir archivos:" type="file" name="archivos" />

        <div className="mt-8">
          <Select
            label="Autorización de reserva de la información de la auditoria:"
            name="autorizacionInformacion"
          >
            <option value="">--Seleccionar--</option>
            <option value="">Memorándum</option>
            <option value="">Oficio</option>
          </Select>
        </div>

        <div className="flex space-x-2">
          <Input label="Número:" type="number" name="numeroDos" />
          <Input label="Fecha:" type="date" name="fechaDos" />
        </div>
        <Input label="Subir archivos:" type="file" name="archivosDos" />
      </Formulario>
    </>
  );
};
