import React, { useState } from 'react';
import { OpcionUno, OpcionDos } from '../../../views/Planeacion/Components';

export const CuartoPaso = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleSelectChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="" className="text-red-400 font-semibold">
          No. de Auditoria:
        </label>
      </div>

      <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
        Oficio de Representación y/o designación de enlace de auditoria emitido
        por la Dependencia o Entidad fiscalizadora
      </h1>

      <div className="mt-4">
        <h2 className="font-semibold">
          ¿Asiste el titular de la Dependencia o Entidad fiscalizada?
        </h2>
        <select
          label=" ¿Asiste el Titular de la Dependencia o Entidad fiscalizadora?"
          name="asistenciaTitular"
          value={opcionSeleccionada}
          onChange={handleSelectChange}
        >
          <option value="">--Seleccionar--</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {opcionSeleccionada === 'No' && <OpcionUno />}
      {opcionSeleccionada === 'Si' && <OpcionDos />}
    </>
  );
};
