import React from 'react';
import { Input, Formulario, Modal, Select } from '../../../../components/utils';

export const ModalDocPosteriores = () => {
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
          <Select label="Seguimientos Posteriores" name="seguimientoPosterior">
            <option value="">--Seleccionar--</option>
            <option value="">
              Oficio emitido por la SFPF y dirigido a SFPZ
            </option>
            <option value="">
              Oficio emitido de la SFPZ y dirigido ala Dependencia o Ente
              auditado
            </option>
            <option value="">
              Oficio emitido por la Dependencia o Entidad fiscalizada
            </option>
          </Select>

          <Input label="No. de Oficio:" name="numeroOficio" type="number" />
          <Input label="Fecha:" name="fecha" type="date" />
          <Input label="Subir Archivos:" name="archivos" type="file" />
        </Formulario>
      </Modal>
    </>
  );
};
