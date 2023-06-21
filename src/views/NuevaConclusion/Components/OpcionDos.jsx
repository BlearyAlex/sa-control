import React from 'react';
import Input from '../../../components/Input';
import { Formulario } from '../../../utils/Formulario';

export const OpcionDos = () => {
  return (
    <>
      <h2 className="font-semibold">
        Oficio de notificacion de la conclusión de la auditoria a la dependencia
        o entidad ejecutora emitido por la SFP
      </h2>
      <Formulario>
        <div className="flex space-x-2">
          <Input label="No. de Oficio:" type="number" name="numeroOficio" />
          <Input label="Fecha:" type="date" name="fecha" />
        </div>
        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </>
  );
};
