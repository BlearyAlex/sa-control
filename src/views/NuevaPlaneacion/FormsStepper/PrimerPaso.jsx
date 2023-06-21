import React from 'react';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

import { Formulario } from '../../../utils/Formulario';
//const { enviar } = usePlaneacion()
const PrimerPaso = () => {
  const initialValues = {
    programaTrabajo: '',
    montoAutorizado: '',
    tipoAuditoria: '',
    importe: '',
    alcance: '',
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
        <Input label="Monto Autorizado:" name="montoAutorizado" type="number" />

        <Select label="Tipo de Auditoria:" name="tipoAuditoria">
          <option value="">--- seleccione ---</option>
          <option value="1">Financiera</option>
          <option value="2">Cumplimiento</option>
          <option value="3">Desempeño</option>
        </Select>

        <div className="flex">
          <Select label="Alcance:" name="alcance">
            <option value="">--- seleccione ---</option>
            <option value="1">Periodo Revisado</option>
            <option value="2">Alcance Financiero</option>
            <option value="3">Alcance Técnico</option>
          </Select>

          <Input label="Importe:" name="importe" type="number" />
          <Input label="Porcentaje:" name="importe" type="number" />
        </div>
      </Formulario>
    </>
  );
};

export default PrimerPaso;
