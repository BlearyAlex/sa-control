import { useState } from "react";
import { Input, Formulario, Select } from "../../components/utils";

const NuevoUsuario = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

  const handleSeleccion = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const initialValues = {
    tipoRol: "",
    nombre: "",
    email: "",
    password: "",
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
              Crear Nuevo Usuario
            </h1>

            <div className="flex space-x-2">
              <Input
                label="Nombre:"
                type="text"
                name="nombre"
              />
              <Input
                label="Correo:"
                type="email"
                name="email"
              />
            </div>

            <div className="flex space-x-2">
              <Input
                label="Contraseña"
                type="password"
                name="password"
              />
              <Select
                label="Rol de Usuario:"
                name="tipoRol"
                value={opcionSeleccionada}
                onChange={handleSeleccion}
              >
                <option value="">--Seleccione--</option>
              </Select>
            </div>

            <div className="flex items-center justify-center mt-8">
              <button className="bg-green-400 w-full  rounded-lg p-1 font-bold text-white hover:bg-green-500">
                Crear Usuario
              </button>
            </div>
          </div>
        </Formulario>
      </div>
    </>
  );
};

export default NuevoUsuario;
