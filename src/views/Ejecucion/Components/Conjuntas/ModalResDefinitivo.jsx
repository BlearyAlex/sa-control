import React from 'react';
import {
  Input,
  Select,
  TextArea,
  Formulario,
  Modal,
} from '../../../../components/utils';

export const ModalResDefinitivo = () => {
  const initialValues = {
    mediaCorrectiva: '',
    mediaPreventiva: '',
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <Modal boton="Añadir Resultado">
      <h1 className="font-bold text-xl text-center">Resultados Definitivos</h1>
      <p className="font-semibold text-red-400">No. de Resultado:</p>
      <Formulario initialValues={initialValues} fncEnviar={enviar}>
        <TextArea
          label="Medida Correctiva:"
          name="medidaCorrectiva"
          placeholder="Descripción Breve"
        />

        <TextArea
          label="Medida Preventiva:"
          name="medidaPreventiva"
          placeholder="Descripción Breve"
        />

        <Input label="Subir Archivos:" type="file" name="archivos" />
      </Formulario>
    </Modal>
  );
};
