import React, { useState } from 'react';
import { OpcionUno } from '../Components';
import { OpcionDos } from '../Components';

const CuartoPaso = () => {
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

      <h1 className="text-xl font-bold relative text-center">
        <span className="z-10 relative">
          {' '}
          Oficio de Representación y/o designación de enlace de auditoria
          emitido por la Dependencia o Entidad fiscalizadora
        </span>
        <span className="absolute left-0 top-1/2 h-[1px] bg-gray-300 w-full"></span>
        <span className="absolute right-0 top-1/2 h-[1px] bg-gray-300 w-full"></span>
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

export default CuartoPaso;
