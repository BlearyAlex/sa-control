import { useState } from 'react';
import { Input, Formulario, Select } from '../../components/utils';
import { OpcionConjuntas } from './components';

const NuevaAuditoria = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleSeleccion = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const initialValues = {
    fecha: '',
    fechaVencimiento: '',
    archivos: '',
  };

  const enviar = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <Formulario initialValues={initialValues}>
          <div className="bg-white p-6 rounded shadow-lg mx-auto">
            <h1 className="text-lg font-bold mb-4 text-center">
              Crear Nueva Auditoria
            </h1>

            <div className="flex">
              <Select
                label="Tipo de Auditoria:"
                name="tipoAuditoria"
                value={opcionSeleccionada}
                onChange={handleSeleccion}
              >
                <option value="">--Seleccione--</option>
                <option value="Directa">Directa</option>
                <option value="Conjunta">Conjunta</option>
                <option value="Revisiones">Revisiones</option>
                <option value="Evaluaciones">Evaluaciones</option>
              </Select>

              <Input
                label="No. de Auditoria:"
                type="number"
                name="noAuditoria"
              />
            </div>

            {opcionSeleccionada === 'Conjunta' && <OpcionConjuntas />}

            <div className="flex">
              <Select label="Programa Auditado:" name="programaAuditado">
                <option value="">--Seleccione--</option>
                <option value="Prueba">Prueba</option>
                <option value="Prueba 2">Prueba 2</option>
              </Select>

              <Select label="Ejercicio Auditado:" name="ejercicioAuditado">
                <option value="">--Seleccione--</option>
                <option value="Prueba">Prueba</option>
                <option value="Prueba 2">Prueba 2</option>
              </Select>
            </div>

            <Select label="Entidades:" name="ejercicioAuditado">
              <option value="">--Seleccione--</option>
              <option value="Prueba">Prueba</option>
              <option value="Prueba 2">Prueba 2</option>
            </Select>

            <div className="flex items-center justify-center mt-8">
              <button className="bg-green-400 w-full rounded-lg p-1 font-bold text-white hover:bg-green-500">
                Crear
              </button>
            </div>
          </div>
        </Formulario>
      </div>
    </>
  );
};

export default NuevaAuditoria;
