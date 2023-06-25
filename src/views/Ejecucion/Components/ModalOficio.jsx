import React from 'react';
import { Input, Formulario, Modal } from '../../../components/utils';

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
    <Modal boton="Añadir Oficio">
      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <div className="flex space-x-4">
          <Input label="No. de Oficio:" name="numeroOficio" type="number" />
          <Input label="Fecha:" name="fecha" type="date" />
        </div>
        <Input label="Subir Archivo:" name="archivos" type="file" />
      </Formulario>
    </Modal>
  );
};
