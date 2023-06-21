import React from 'react';
import { BsFillKeyFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

const Login = () => {
  return (
    <>
      <div className="bg-zinc-100 h-screen flex justify-center items-center">
        <div className="flex shadow-lg">
          <div className=" max-w-sm bg-white p-4">
            <img src="/img/LOGOZAC.png" alt="Logo Gobierno" />
          </div>
          <div className="bg-white h-96 pl-10 space-y-3 w-[400] flex flex-col justify-center">
            <form className="space-y-3" action="">
              <div>
                <p className="font-semibold text-2x1 tracking-wide flex justify-center items-center">
                  {' '}
                  INICIO DE SESION
                </p>
              </div>

              <div className="mr-5">
                <div className="flex items-center space-x-1">
                  <MdAlternateEmail />
                  <p className="text-zinc-600 font-semibold ">Email :</p>
                </div>

                <input
                  className="outline-none h-10 px-5 border border-sm w-full"
                  type="text"
                  placeholder="correo@correo.com"
                  required
                />
              </div>

              <div className="mr-5">
                <div className="flex items-center space-x-1">
                  <BsFillKeyFill />
                  <p className="text-zinc-600 font-semibold"> Password :</p>
                </div>
                <input
                  className="outline-none h-10 px-5 border border-sm w-full"
                  type="password"
                  placeholder="contraseña "
                />
              </div>
              <div className=" bg-red-500 rounded-lg w-2/5 flex justify-center items-center text-center p-2 cursor-pointer hover:bg-red-600">
                <button className=" text-white font-bold">
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
