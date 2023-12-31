import React, { useState } from 'react';
import {
  OpcionUno,
  OpcionDos,
} from '../../../views/Conclusion/Components/Directas';

export const PrimerPaso = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleSeleccion = (event) => {
    setOpcionSeleccionada(event.target.value);
  };
  return (
    <>
      <div>
        <label htmlFor="" className="text-red-400 font-semibold">
          No. de Auditoria:
        </label>
      </div>
      <div className="">
        <div>
          <h1 className="font-semibold text-2xl">
            Observaciones sin solventar
          </h1>
          <select
            name=""
            id=""
            className="border border-gray-300 rounded outline-red-700"
            value={opcionSeleccionada}
            onChange={handleSeleccion}
          >
            <option value="">--Seleccionar--</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        {opcionSeleccionada === 'Si' && <OpcionUno />}
        {opcionSeleccionada === 'No' && <OpcionDos />}
      </div>
    </>
  );
};
