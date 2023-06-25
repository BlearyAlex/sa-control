import React from 'react';
import { Input, Formulario } from '../../../components/utils';

export const OpcionDos = () => {
  const initialValues = {
    numeroOficio: '',
    fecha: '',
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <h2 className="font-semibold">
        Oficio de notificacion de la conclusión de la auditoria a la dependencia
        o entidad ejecutora emitido por la SFP
      </h2>
      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" type="number" name="numeroOficio" />
          <Input label="Fecha:" type="date" name="fecha" />
        </div>
        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};
