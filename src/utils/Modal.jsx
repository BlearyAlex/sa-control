import React, { useEffect } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import useModal from '../hooks/useModal';

export const Modal = ({ children, boton }) => {
  const { onHandleModal } = useModal();

  return (
    <div
      id="modal-bg"
      // onClick={() => onHandleModal(false)}
      className="absolute top-0 left-0 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center"
    >
      <div className="bg-white p-4 m-4 rounded-lg w-10/12 max-w-screen-md shadow-2xl relative">
        <a
          onClick={() => onHandleModal(false)}
          className="absolute right-5 text-2xl hover:cursor-pointer"
        >
          x
        </a>
        {children}
        <div className="bg-green-400 p-2 rounded-lg mb-1 flex items-center justify-center cursor-pointer hover:bg-green-500 mt-4">
          <AiFillPlusCircle className="text-white mr-2 text-lg" />
          <button className="text-white font-semibold">{boton}</button>
        </div>
      </div>
    </div>
  );
};
