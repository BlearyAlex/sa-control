import React from 'react';
import { Input, Formulario, Modal } from '../../../../components/utils';

export const ModalOficioEnvio = () => {
  const initialValues = {
    numeroOficio: '',
    fecha: '',
    fechaLimite: '',
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <Modal boton="Añadir Oficio">
          <h1 className="font-bold text-xl text-center">Oficio de Envío</h1>
          <Input label="No. de Oficio:" name="numeroOficio" type="number" />
          <Input label="Fecha:" name="fecha" type="date" />
          <Input
            label="Fecha límite para la entrega de la información:"
            name="fechaLimite"
            type="date"
          />
          <Input label="Subir Archivos:" name="archivos" type="file" />
        </Modal>
      </Formulario>
    </>
  );
};
