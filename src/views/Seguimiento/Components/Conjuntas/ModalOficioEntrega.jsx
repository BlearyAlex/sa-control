import React from 'react';
import { Input, Formulario, Modal } from '../../../../components/utils';

export const ModalOficioEntrega = () => {
  const initialvalues = {
    numeroOficio: '',
    fecha: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <Modal boton="Añadir Oficio">
        <h1 className="font-bold text-xl text-center">Oficio de Entrega</h1>
        <Formulario initialValues={initialvalues}>
          <Input label="No. de Oficio:" name="numeroOficio" type="number" />
          <Input label="Fecha:" name="fecha" type="date" />
          <Input label="Subir Archivos:" name="archivos" type="file" />
        </Formulario>
      </Modal>
    </>
  );
};
