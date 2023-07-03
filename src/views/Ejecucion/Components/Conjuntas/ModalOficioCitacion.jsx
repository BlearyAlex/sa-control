import React from 'react';
import { Input, Formulario, Modal } from '../../../../components/utils';

export const ModalOficioCitacion = () => {
  const initialValues = {
    numeroOficio: '',
    fecha: '',
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <Modal boton="Añadir Oficio">
        <h1 className="font-bold text-xl text-center">Oficio de Citación</h1>
        <Formulario initialValues={initialValues} fncEnviar={enviar}>
          <Input label="No. de Oficio:" name="numeroOficio" type="number" />
          <Input label="Fecha:" name="fecha" type="date" />
          <Input label="Subir Archivos:" name="archivos" type="file" />
        </Formulario>
      </Modal>
    </>
  );
};
