import React from 'react';
import { Input } from '../../../../components/utils';

export const AlcanceOpcion = () => {
  return (
    <>
      <Input label="Importe:" name="importe" type="number" />
      <Input label="Porcentaje:" name="porcentaje" type="number" />
    </>
  );
};
