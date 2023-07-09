import React from 'react';
import {
  Input,
  Formulario,
  Modal,
  TextArea,
  Select,
} from '../../../../components/utils';

export const ModalObservacion = () => {
  const initialValues = {
    numeroOficio: '',
    descripcionObservacion: '',
    montoObservado: '',
    cuantificado: '',
    medidaCorrectiva: '',
    medidaPreventiva: '',
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <Modal boton="Añadir Observación">
        <h1 className="font-bold text-xl text-center">Oficio de Observación</h1>
        <Formulario initialValues={initialValues} fncEnviar={enviar}>
          <Input label="No. de Oficio:" name="numeroOficio" type="number" />

          <TextArea
            label="Descripción de Observación:"
            name="descripcionObservacion"
            placeholder="Agregar Descripción"
          />

          <div className="flex space-x-2">
            <Input
              label="Monto Observado:"
              name="montoObservado"
              type="number"
            />

            <Select label="Sin Cuantificar:" name="cuantificado">
              <option value="">--Seleccionar--</option>
              <option value="">Si</option>
              <option value="">No</option>
            </Select>
          </div>

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

          <Input label="Subir Archivos:" name="archivos" type="file" />
        </Formulario>
      </Modal>
    </>
  );
};
