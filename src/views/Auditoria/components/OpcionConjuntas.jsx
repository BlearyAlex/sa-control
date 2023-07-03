import React from 'react';
import { Formulario, Select } from '../../../components/utils';

export const OpcionConjuntas = () => {
  return (
    <Formulario>
      <Select label="Origen:" name="origen">
        <option value="">--Seleccionar--</option>
        <option value="SFPF">SFPF</option>
        <option value="ASF">ASF</option>
        <option value="ASE">ASE</option>
      </Select>
    </Formulario>
  );
};
