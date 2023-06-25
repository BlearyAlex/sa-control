import React, { useCallback, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  AiFillCloseCircle,
  AiFillFilePdf,
  AiOutlineUpload,
} from 'react-icons/ai';

export const Dropzone = () => {
  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  };

  const focusedStyle = {
    borderColor: '#2196f3',
  };

  const acceptStyle = {
    borderColor: '#00e676',
  };

  const rejectStyle = {
    borderColor: '#ff1744',
  };
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setSelectedDocuments(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
    });

  const removeFile = (name) => {
    setSelectedDocuments((files) => files.filter((file) => file.name !== name));
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  const selected_documents = selectedDocuments?.map((file) => (
    <ul className="flex items-center">
      <AiFillFilePdf className="text-red-500 text-xl" />
      <p className="mr-2">{file.name}</p>
      <AiFillCloseCircle
        className=" text-red-400 text-xl hover:text-red-600 cursor-pointer"
        type="button"
        onClick={() => removeFile(file.name)}
      />
    </ul>
  ));

  return (
    <div className="flex">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Subir Archivos</p>
        <AiOutlineUpload />
      </div>
      <div>{selected_documents}</div>
    </div>
  );
};
