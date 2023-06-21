import React from 'react';
import Select from '../../../components/Select';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import { Formulario } from '../../../utils/Formulario';
import { AiFillPlusCircle } from 'react-icons/ai';
import { Modal } from '../../../utils/Modal';

const ModalObservacion = ({ cerrarModalBgClick }) => {
  function cerrarModalBgClick(e) {
    console.log(e.target);
    if (e.target.id === 'modal-bg') {
      cerrarModal();
    }
  }

  return (
    <Modal boton="Añadir Observacion">
      <Formulario>
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

export default ModalObservacion;
