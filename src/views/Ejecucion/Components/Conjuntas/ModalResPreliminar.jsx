import React from 'react';
import {
  Input,
  Select,
  TextArea,
  Formulario,
  Modal,
} from '../../../../components/utils';

export const ModalResPreliminar = () => {
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
      <h1 className="font-bold text-xl text-center">
        Anánilis de Resultados Preliminares
      </h1>
      <p className="font-semibold text-red-400">No. de Resultado:</p>
      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <TextArea
          label="Resultado de Análisis:"
          name="medidaCorrectiva"
          placeholder="Descripción Breve"
        />

        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </Modal>
  );
};
