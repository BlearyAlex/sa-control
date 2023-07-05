import React, { useState } from 'react';
import { Input, Select, Formulario } from '../../utils';
import { AlcanceOpcion } from '../../../views/Planeacion/Components/Directas';

//const { enviar } = usePlaneacion()
export const PrimerPaso = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleSeleccion = (event) => {
    setOpcionSeleccionada(event.target.value);
    console.log(handleSeleccion);
  };

  const initialValues = {
    programaTrabajo: '',
    montoAutorizado: '',
    tipoAuditoria: '',
    alcance: '',
    importe: '',
    porcentaje: '',
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
        <Input
          label="Programa de  Trabajo:"
          name="programaTrabajo"
          type="file"
        />

        <div className="flex space-x-2">
          <Input
            label="Monto Autorizado:"
            name="montoAutorizado"
            type="number"
          />

          <Select label="Tipo de Auditoria:" name="tipoAuditoria">
            <option value="">--- seleccione ---</option>
            <option value="1">Financiera</option>
            <option value="2">Cumplimiento</option>
            <option value="3">Desempeño</option>
          </Select>
        </div>

        <div className="flex space-x-2">
          <Select
            label="Alcance:"
            name="alcance"
            value={opcionSeleccionada}
            onChange={handleSeleccion}
          >
            <option value="">--- seleccione ---</option>
            <option value="1">Periodo Revisado</option>
            <option value="2">Alcance Financiero</option>
            <option value="3">Alcance Técnico</option>
          </Select>

          {opcionSeleccionada === '2' && <AlcanceOpcion />}
          {opcionSeleccionada === '3' && <AlcanceOpcion />}
        </div>
      </Formulario>
    </>
  );
};
