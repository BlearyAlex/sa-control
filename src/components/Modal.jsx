import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

const Modal = ({ cerrarModal }) => {
  function cerrarModalBgClick(e) {
    console.log(e.target);
    if (e.target.id === 'modal-bg') {
      cerrarModal();
    }
  }
  return (
    <div
      id="modal-bg"
      onClick={cerrarModalBgClick}
      className="absolute top-0 left-0 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center"
    >
      <div className="bg-white p-4 m-4 rounded-lg w-10/12 max-w-screen-md shadow-2xl relative">
        <a
          onClick={cerrarModal}
          className="absolute right-5 text-2xl hover:cursor-pointer"
        >
          x
        </a>
        <div className="text-center">
          <h1 className="text-2xl py-8 font-bold">Crear Observacion</h1>
          <label htmlFor="" className="font-semibold mr-2">
            No. de Observación:
          </label>
          <input
            type="number"
            className="border border-gray-300 rounded outline-red-700"
          />
          <div className="flex justify-center mt-2">
            <label htmlFor="" className="font-semibold mr-2">
              Descripcion:
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              className="border border-gray-300 rounded outline-red-700"
            ></textarea>
          </div>
          <div className="mt-2">
            <label htmlFor="" className="font-semibold mr-2">
              Monto Observado:
            </label>
            <input
              type="number"
              className="border border-gray-300 rounded outline-red-700"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="font-semibold mr-2">
              Sin Cuantificar
            </label>
            <select
              name=""
              id=""
              className="border border-gray-300 rounded outline-red-700"
            >
              <option value="">--Selecionar--</option>
              <option value="">Si</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="flex justify-center mt-2">
            <label htmlFor="" className="font-semibold mr-2">
              Media Correctiva:
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              className="border border-gray-300 rounded outline-red-700"
            ></textarea>
          </div>

          <div className="flex justify-center mt-2">
            <label htmlFor="" className="font-semibold mr-2">
              Media Preventiva:
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              className="border border-gray-300 rounded outline-red-700"
            ></textarea>
          </div>

          <div className="mt-2">
            <label htmlFor="" className="mr-2 font-semibold">
              Subir Archivos:
            </label>
            <input
              type="file"
              className="border border-gray-300 rounded outline-red-700"
            />
          </div>

          <div className="bg-green-400 p-2 rounded-lg mb-1 flex items-center justify-center cursor-pointer hover:bg-green-500 mt-4">
            <AiFillPlusCircle className="text-white mr-2 text-lg" />
            <button className="text-white font-semibold">
              Añadir Observación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
