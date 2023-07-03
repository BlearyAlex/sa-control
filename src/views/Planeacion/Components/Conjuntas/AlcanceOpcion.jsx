import React from 'react';
import { Input, Formulario } from '../../../../components/utils';

export const AlcanceOpcion = () => {
  return (
    <>
      <Input label="Importe:" name="importe" type="number" />
      <Input label="Porcentaje:" name="porcentaje" type="number" />
    </>
  );
};
