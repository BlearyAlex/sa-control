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
    montoSolventado: '',
    montoNoSolventado: '',
    medidaCorrectiva: '',
    medidaPreventiva: '',
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

          <Input label="Monto Observado:" name="montoObservado" type="number" />

          <Input
            label="Monto Solventado:"
            name="montoSolventado"
            type="number"
          />

          <Input
            label="Monto no Solventado:"
            name="montoNoSolventado"
            type="number"
          />

          <h1 className="font-bold text-xl text-center mt-2">
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
    </>
  );
};
