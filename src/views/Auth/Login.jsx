import React from 'react';
import { BsFillKeyFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import Input from '../../components/Input';
import { Formulario } from '../../utils';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const initialValues = {
    correo: '',
    contraseña: '',
  };

  const navigate = useNavigate();

  const enviar = (values) => {
    console.log(values);
    localStorage.setItem('user', JSON.stringify(values));
    navigate('/home');
  };

  return (
    <>
      <div className="bg-zinc-100 h-screen flex justify-center items-center">
        <div className="flex shadow-lg bg-white rounded-2xl p-5">
          <div className=" max-w-sm  ">
            <img src="/img/LOGOZAC.png" alt="Logo Gobierno" />
          </div>
          <div className="h-96 pl-10 space-y-3 w-[400] flex flex-col justify-center">
            <div>
              <p className="font-semibold text-2x1 tracking-wide flex justify-center items-center">
                {' '}
                INICIO DE SESION
              </p>
            </div>

            <Formulario initialValues={initialValues} fncEnviar={enviar}>
              <div className="mr-5">
                <div className="flex items-center space-x-1">
                  <MdAlternateEmail />
                  <p className="text-zinc-600 font-semibold ">Email:</p>
                </div>
                <Input type="email" name="correo" />
              </div>

              <div className="mr-5">
                <div className="flex items-center space-x-1">
                  <BsFillKeyFill />
                  <p className="text-zinc-600 font-semibold"> Password:</p>
                </div>
                <Input type="password" name="contraseña" />
              </div>

              <div className=" bg-red-500 rounded-lg w-2/5 flex justify-center items-center text-center p-1 mt-4 cursor-pointer hover:bg-red-600">
                <button className=" text-white font-bold">
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
