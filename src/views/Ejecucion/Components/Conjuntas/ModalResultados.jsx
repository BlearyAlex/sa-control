import React from 'react';
import {
  Input,
  Select,
  TextArea,
  Formulario,
  Modal,
} from '../../../../components/utils';

export const ModalResultados = () => {
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
    <Modal boton="Añadir Resultado">
      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <Select label="Dependencia o Entidad Observada:" name="cuantificado">
          <option value="">--Selecionar--</option>
        </Select>

        <Input label="No. de Resultado:" type="number" name="numeroOficio" />

        <TextArea label="Descripcion del Resultado:" name="descripcion" />

        <div className="flex space-x-4">
          <Input label="Monto Observado:" type="number" name="montoObservado" />

          <Select label="Sin Cuantificar:" name="cuantificado">
            <option value="">--Selecionar--</option>
            <option value="">Si</option>
            <option value="">No</option>
          </Select>
        </div>

        <TextArea label="Medida Correctiva:" name="medidaCorrectiva" />

        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </Modal>
  );
};
