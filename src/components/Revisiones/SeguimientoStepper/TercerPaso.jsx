import React from 'react';
import { Input, Formulario } from '../../utils';

export const TercerPaso = () => {
  const initialValues = {
    numeroOficio: '',
    numeroOficioDos: '',
    fecha: '',
    fechaDos: '',
    archivos: '',
    archivosDos: '',
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

      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
          Ampliación de programa(s), rubro(s), ejercicio(s) o periodo(s),
          capitulo(s)y áreas(s).
        </h1>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" name="numeroOficio" type="number" />
          <Input label="Fecha:" name="fecha" type="date" />
        </div>
        <Input label="Subir Archivos:" name="archivos" type="file" />

        <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
          Requerimientos de información adicional
        </h1>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" name="numeroOficioDos" type="number" />
          <Input label="Fecha:" name="fechaDos" type="date" />
        </div>
        <Input label="Subir Archivos:" name="archivosDos" type="file" />
      </Formulario>
    </>
  );
};
