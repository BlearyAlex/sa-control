import React from 'react';
import { Formulario, Input, Select, Modal } from '../../../../components/utils';

export const ModalOficioComplementario = () => {
  const initialValues = {
    oficiosComplementarios: '',
    numeroOficio: '',
    fecha: '',
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <Modal boton="Añadir Oficio">
        <h1 className="font-bold text-xl text-center">Oficio Complementario</h1>
        <Formulario initialValues={initialValues} fncEnviar={enviar}>
          <Select
            label="Oficios Complementarios emitidos por la SFP"
            name="oficiosComplementarios"
          >
            <option value="">--Seleccionar--</option>
            <option value="">
              Ampliación de programa(s), rubro(s), ejercicio(s) o periodo(s),
              capitulo(s) y área(s)
            </option>
            <option value="">Requerimientos de información adicional</option>
          </Select>

          <div className="flex space-x-2">
            <Input label="No. de Oficio:" name="numeroOficio" type="number" />
            <Input label="Fecha:" name="fecha" type="date" />
          </div>

          <Input label="Subir Archivo:" name="archivos" type="file" />
        </Formulario>
      </Modal>
    </>
  );
};
