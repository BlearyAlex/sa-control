import React from 'react';
import Input from '../../../components/Input';
import { Formulario } from '../../../utils/Formulario';
import { Modal } from '../../../utils/Modal';

const ModalOficio = () => {
  return (
    <Modal boton="Añadir Oficio">
      <Formulario>
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
