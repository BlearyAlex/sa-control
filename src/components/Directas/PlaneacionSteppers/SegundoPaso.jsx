import React from 'react';
import { Input, Formulario } from '../../utils';

export const SegundoPaso = () => {
  const initialValues = {
    fechaInicialActividades: '',
    fechaTerminalActividades: '',
    fechaInicialActividades2: '',
    fechaTerminalActividades2: '',
    fechaInicialSeguimiento: '',
    fechaTerminalSeguimiento: '',
    fechaInicialSeguimiento2: '',
    fechaTerminalSeguimiento2: '',
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

      <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
        Cronograma de Actividades
      </h1>
      <Formulario initialValues={initialValues}>
        <h1 className="font-bold text-green-500">Tiempo Estimado</h1>

        <div className="flex space-x-2">
          <Input
            label="Fecha de Inicio:"
            name="fechaInicialActividades"
            type="date"
          />

          <Input
            label="Fecha de Término:"
            name="fechaTerminalActividades"
            type="date"
          />
        </div>

        <h1 className="font-bold text-green-500 mt-4">Tiempo Real</h1>

        <div className="flex space-x-2">
          <Input
            label="Fecha de Inicio:"
            name="fechaInicialActividades2"
            type="date"
          />

          <Input
            label="Fecha de Término:"
            name="fechaTerminalActividades2"
            type="date"
          />
        </div>

        {/* -------------------------------------------------------------- */}

        <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-10">
          Cronograma de Seguimiento
        </h1>

        <h1 className="font-bold text-green-500">Tiempo Estimado</h1>

        <div className="flex space-x-2">
          <Input
            label="Fecha de Inicio:"
            name="fechaInicialSeguimiento"
            type="date"
          />
          <Input
            label="Fecha de Término:"
            name="fechaTerminalSeguimiento"
            type="date"
          />
        </div>

        <h1 className="font-bold text-green-500 mt-2">Tiempo Real</h1>

        <div className="flex space-x-2">
          <Input
            label="Fecha de Inicio:"
            name="fechaInicialSeguimiento2"
            type="date"
          />
          <Input
            label="Fecha de Término:"
            name="fechaTerminalSeguimiento2"
            type="date"
          />
        </div>
      </Formulario>
    </>
  );
};
