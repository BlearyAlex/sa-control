import { useState } from "react";
import { BsFillKeyFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { Input } from "../../components/utils/Input";
import { Formulario } from "../../components/utils/Formulario";
import { useAuth } from "../../hooks/useAuth";
import { Alerta } from "../../components/utils/Alerta";

const Login = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [errores, setErrores] = useState([]);

  const { login } = useAuth({
    middleware: "guest",
    url: "/",
  });

  const enviar = async (values) => {
    console.log(values);

    login(values, setErrores);
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
              <p className="font-semibold text-2x1 tracking-wide flex justify-center items-center">
                INICIO DE SESION
              </p>
            </div>

            <Formulario
              initialValues={initialValues}
              fncEnviar={enviar}
            >
              {errores
                ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>)
                : null}

              <div className="mr-5 space-y-0">
                <div className="flex items-center space-x-1">
                  <MdAlternateEmail />
                  <p className="text-zinc-600 font-semibold ">Email:</p>
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Ingresa tu email"
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
                  placeholder="Ingresa tu contraseña"
                />
              </div>

              <div className=" bg-red-500 rounded-lg w-full flex justify-center items-center text-center p-1 mt-4 cursor-pointer hover:bg-red-600">
                <button
                  type="submit"
                  className=" text-white font-bold"
                >
                  Iniciar Sesión
                </button>
              </div>
            </Formulario>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
