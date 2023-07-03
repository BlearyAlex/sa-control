import React from 'react';
import {
  Input,
  Select,
  Formulario,
  Modal,
  TextArea,
} from '../../../../components/utils';

export const ModalResDefinitivo = () => {
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
      <p className="text-red-400 font-semibold">No. de Resultado:</p>
      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <h1 className="text-center font-bold pt-2 border-t-2 pb-2 border-b-2 mt-4">
          Resultado de la valoración de la documentación
        </h1>

        <Select
          label="Solventación de medida correctiva:"
          name="medidaCorrectiva"
        >
          <option value="">--Seleccionar--</option>
          <option value="">Si</option>
          <option value="">No</option>
        </Select>

        <Select
          label="Solventación de medida preventiva:"
          name="medidaPreventiva"
        >
          <option value="">--Seleccionar--</option>
          <option value="">Si</option>
          <option value="">No</option>
        </Select>

        <Input label="Subir Archivos:" name="archivos" type="file" />
      </Formulario>
    </Modal>
  );
};
