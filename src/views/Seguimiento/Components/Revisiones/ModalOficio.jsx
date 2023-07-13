import React from 'react';
import { Formulario, Modal, Input } from '../../../../components/utils';

export const ModalOficio = () => {
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
        <h1 className="font-bold text-xl text-center">Oficio</h1>
        <Formulario initialValues={initialValues} fncEnviar={enviar}>
          <div className="flex space-x-2">
            <Input label="No. de Oficio:" name="numeroOficio" type="number" />
            <Input label="Fecha:" name="fecha" type="date" />
          </div>
          <Input label="Subir Archivo:" name="archivos" type="file" />
        </Formulario>
      </Modal>
    </>
  );
};
