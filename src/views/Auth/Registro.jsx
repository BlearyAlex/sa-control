import { useState } from "react";
import { BsFillKeyFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Input } from "../../components/utils/Input";
import { Formulario } from "../../components/utils/Formulario";
import clienteAxios from "../../config/axios";
import { Alerta } from "../../components/utils/Alerta";

const Registro = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
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
      <div className="bg-zinc-100 h-screen flex justify-center items-center">
        <div className="flex shadow-lg bg-white rounded-2xl p-5">
          <div className=" max-w-sm  ">
            <img
              src="/img/LOGOZAC.png"
              alt="Logo Gobierno"
            />
          </div>
          <div className="h-96 pl-10 space-y-3 w-[400] flex flex-col justify-center">
            <div>
              <p className="font-semibold text-2xl tracking-wide flex justify-center items-center">
                Registrar Usuario
              </p>
            </div>

            <Formulario
              initialValues={initialValues}
              fncEnviar={enviar}
            >
              {errores
                ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>)
                : null}

              <div className="mr-5 space-y-0 m-auto">
                <div className="flex items-center space-x-1">
                  <AiOutlineUser />
                  <p className="text-zinc-600 font-semibold ">Nombre:</p>
                </div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre de Usuario"
                />
              </div>

              <div className="mr-5 space-y-0">
                <div className="flex items-center space-x-1">
                  <MdAlternateEmail />
                  <p className="text-zinc-600 font-semibold ">Email:</p>
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Correo de Usuario"
                />
              </div>

              <div className="mr-5 space-y-0">
                <div className="flex items-center space-x-1">
                  <BsFillKeyFill />
                  <p className="text-zinc-600 font-semibold"> Password:</p>
                </div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                />
              </div>

              <div className=" bg-red-500 rounded-lg w-full flex justify-center items-center text-center p-1 mt-4 cursor-pointer hover:bg-red-600">
                <button
                  type="submit"
                  className=" text-white font-bold"
                >
                  Registrar
                </button>
              </div>
            </Formulario>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
