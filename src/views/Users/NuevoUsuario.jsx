import { useState } from "react";
import { Input, Formulario, Select } from "../../components/utils";
import clienteAxios from "../../config/axios";
import { Alerta } from "../../components/utils/Alerta";

const NuevoUsuario = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

  const handleSeleccion = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    tipoRol: "",
  };

  const [errores, setErrores] = useState([]);

  const enviar = async (values) => {
    console.log(values);

    try {
      const respuesta = await clienteAxios.post("/registro", values);
      console.log(respuesta);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrores(Object.values(error.response.data.errors));
      } else {
        // Maneja el caso en que no haya errores específicos en la respuesta
        console.error("Error de respuesta sin errores específicos:", error);
      }
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex shadow-lg bg-white rounded-2xl p-5">
          <div className="space-y-3 w-[400] flex flex-col justify-center">
            <div>
              <p className="font-semibold text-2xl tracking-wide flex justify-center items-center">
                Crear Usuario
              </p>
            </div>

            <Formulario
              initialValues={initialValues}
              fncEnviar={enviar}
            >
              {errores
                ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>)
                : null}

              <div className="mr-5 space-y-0 m-auto flex space-x-2 items-center pb-4">
                <div className="flex items-center justify-center">
                  <p className="font-semibold">Nombre:</p>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nombre de Usuario"
                  />
                </div>

                <div className="flex items-center space-x-1">
                  <p className="font-semibold ">Email:</p>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo de Usuario"
                  />
                </div>
              </div>

              <div className="mr-5 space-y-0 flex space-x-2 justify-start">
                <div className="flex items-center">
                  <p className="font-semibold"> Password:</p>
                  <Input
                    type="select"
                    name="password"
                    placeholder="Contraseña"
                  />
                </div>

                <div className="flex items-center ">
                  <Select
                    label="Tipo de Rol:"
                    name="cargoEnlace"
                  >
                    <option value="">--Seleccionar--</option>
                  </Select>
                </div>
              </div>

              <div className=" bg-red-500 rounded-lg w-full flex justify-center items-center text-center p-1 mt-4 cursor-pointer hover:bg-red-600">
                <button
                  type="submit"
                  className=" text-white font-bold"
                >
                  Crear Usuario
                </button>
              </div>
            </Formulario>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevoUsuario;
