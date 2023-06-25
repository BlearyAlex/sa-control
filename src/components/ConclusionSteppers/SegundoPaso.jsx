import React from 'react';
import { Input, Select, Formulario } from '../utils';

export const SegundoPaso = () => {
  const initialValues = {
    solicitudInformacion: '',
    numero: '',
    fecha: '',
    archivos: '',
    autorizacionInformacion: '',
    numero2: '',
    fecha2: '',
    archivos2: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <label htmlFor="" className="text-red-400 font-semibold">
        No. de Auditoria:
      </label>

      <h1 className="font-bold text-center text-xl">Transparencia</h1>

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
          <Input label="Número:" type="number" name="numero2" />
          <Input label="Fecha:" type="date" name="fecha2" />
        </div>
        <Input label="Subir archivos:" type="file" name="archivos2" />
      </Formulario>
    </>
  );
};
