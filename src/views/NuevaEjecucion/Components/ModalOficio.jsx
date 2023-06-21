import React from 'react';
import Input from '../../../components/Input';
import { Formulario } from '../../../utils/Formulario';
import { Modal } from '../../../utils/Modal';

const ModalOficio = () => {
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

export default ModalOficio;
