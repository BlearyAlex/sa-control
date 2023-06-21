import React from 'react';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import { Formulario } from '../../../utils/Formulario';
import { Modal } from '../../../utils/Modal';

const ModalComplementario = () => {
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
    <Modal boton="Añadir Oficio">
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

export default ModalComplementario;
