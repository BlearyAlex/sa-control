import React from 'react';
import { Input, Formulario } from '../../utils';

export const QuintoPaso = () => {
  const initialValues = {
    numeroOficio: '',
    fecha: '',
    fechaVencimiento: '',
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
      <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
        Oficio de notificación de observación y recomendaciones correctivas y
        preventivas emitido por la SFP a la Dependencia o Entidad ejecutora del
        recurso
      </h1>

      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" name="numeroOficio" type="number" />
          <Input label="Fecha:" name="fecha" type="date" />
        </div>
        <Input
          label="Plazo de vencimiento para la solventación de las observaciones:"
          name="fechaVencimiento"
          type="date"
        />
        <Input label="Subir Archivos:" name="archivos" type="file" />
      </Formulario>
    </>
  );
};
