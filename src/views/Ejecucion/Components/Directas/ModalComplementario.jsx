import React from 'react';
import { Input, Select, Modal, Formulario } from '../../../../components/utils';

export const ModalComplementario = () => {
  const initialValues = {
    oficios: '',
    numeroOficio: '',

    fecha: '',
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <Modal>
      <h1 className="text-2xl font-semibold text-center">Crear Oficio</h1>
      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <Select label="Oficios:" name="oficios">
          <option value="">--Seleccionar--</option>
          <option value="">
            Ampliación de programa(s), rubro(s), ejercicio(s) o periodo(s),
            capitulo(s) y área(s)
          </option>
          <option value="">
            Ampliación de personal del grupo de auditores
          </option>
          <option value="">Requerimientos de información adicional</option>
        </Select>

        <Input label="No. de Oficio:" name="numeroOficio" type="number" />

        <Input label="Fecha:" name="fecha" type="date" />

        <Input label="Subir Archivos:" name="archivos" type="file" />
      </Formulario>
    </Modal>
  );
};
