import React from 'react';
import {
  Input,
  Select,
  TextArea,
  Formulario,
  Modal,
} from '../../../../components/utils';

export const ModalObservacion = () => {
  const initialValues = {
    numeroOficio: '',
    descripcion: '',
    montoObservado: '',
    cuantificado: '',
    mediaCorrectiva: '',
    mediaPreventiva: '',
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <Modal boton="Añadir Observación">
      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <div>
          <Input
            label="No. de Observación:"
            type="number"
            name="numeroOficio"
          />
        </div>
        <TextArea label="Descripcion:" name="descripcion" />

        <div className="flex space-x-4">
          <Input label="Monto Observado:" type="number" name="montoObservado" />

          <Select label="Sin Cuantificar:" name="cuantificado">
            <option value="">--Selecionar--</option>
            <option value="">Si</option>
            <option value="">No</option>
          </Select>
        </div>

        <TextArea label="Media Correctiva:" name="mediaCorrectiva" />

        <TextArea label="Media Preventiva:" name="mediaPreventiva" />

        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </Modal>
  );
};
