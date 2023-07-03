import React, { useState } from 'react';
import { Input, Formulario, Select } from '../../utils';
import { AlcanceOpcion } from '../../../views/Planeacion/Components/Conjuntas';

export const SegundoPaso = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleSeleccion = (event) => {
    setOpcionSeleccionada(event.target.value);
    console.log(handleSeleccion);
  };

  const initialValues = {
    montoAutorizado: '',
    tipoAuditoria: '',
    alcance: '',
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

      <Formulario initialValues={initialValues}>
        <h1 className="text-2xl font-bold text-center pt-2 border-t-2 mt-2">
          Carta Planeación
        </h1>

        <Input label="Monto Autorizado:" type="file" name="montoAutorizado" />

        <Select label="Tipo de Auditoria:" name="tipoAuditoria">
          <option value="">--- seleccione ---</option>
          <option value="">Financiera</option>
          <option value="">Cumplimiento</option>
          <option value="">Desempeño</option>
        </Select>

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
        <Input label="Subir Archivos:" name="archivosUno" type="file" />

        <h1 className="text-xl font-bold relative text-center mt-12 pt-2 border-t-2">
          Cronograma de Actividades
        </h1>

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
        <Input label="Subir Archivos:" name="archivosUno" type="file" />

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
        <Input label="Subir Archivos:" name="archivosUno" type="file" />

        {/* -------------------------------------------------------------- */}

        <h1 className="text-xl font-bold relative text-center pt-2 border-t-2 mt-4">
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

        <Input label="Subir Archivos:" name="archivosUno" type="file" />

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
        <Input label="Subir Archivos:" name="archivosUno" type="file" />
      </Formulario>
    </>
  );
};
