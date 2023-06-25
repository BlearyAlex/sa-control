const NuevaAuditoria = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <form action="">
          <div className="bg-white p-6 rounded shadow-lg mx-auto">
            <h1 className="text-lg font-bold mb-8 text-center">
              Crear Nueva Auditoria
            </h1>
            <div className="flex w-full gap-8">
              <div className="flex">
                <h3 className="font-semibold mr-2">Tipo de Auditoria:</h3>
                <select
                  name="tipoAuditoria"
                  id=""
                  className="text-gray-600 border border-gray-300 rounded outline-red-700"
                >
                  <option value="">--Seleccione--</option>
                  <option value="Directa">Directa</option>
                  <option value="Conjunta">Conjunta</option>
                  <option value="Revisiones">Revisiones</option>
                  <option value="Evaluaciones">Evaluaciones</option>
                </select>
              </div>

              <div className="flex">
                <h3 className="font-semibold mr-2">No. de Auditoria:</h3>
                <input
                  type="number"
                  name="noAuditoria"
                  className="text-gray-600 border border-gray-300 rounded outline-red-700"
                />
              </div>
            </div>

            <div className="flex">
              <div className="flex mt-5 mr-4">
                <h3 className="font-semibold mr-2">Programa Auditado:</h3>
                <select
                  className="text-gray-600 border border-gray-300 rounded outline-red-700"
                  name="programaAuditado"
                >
                  <option value="">--Seleccione--</option>
                  <option value="Prueba">Prueba</option>
                  <option value="Prueba 2">Prueba 2</option>
                </select>
              </div>

              <div className="flex mt-5">
                <h3 className="font-semibold mr-2">Ejercicio Auditado:</h3>
                <select
                  className="text-gray-600 border border-gray-300 rounded outline-red-700"
                  name="ejercicioAuditado"
                >
                  <option value="">--Seleccione--</option>
                  <option value="Prueba">Prueba</option>
                  <option value="Prueba 2">Prueba 2</option>
                </select>
              </div>
            </div>
            <div className="flex mt-5">
              <h3 className="font-semibold mr-2">Entidades:</h3>
              <select
                className="text-gray-600 border border-gray-300 rounded outline-red-700"
                name="ejercicioAuditado"
              >
                <option value="">--Seleccione--</option>
                <option value="Prueba">Prueba</option>
                <option value="Prueba 2">Prueba 2</option>
              </select>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button className="bg-green-400 w-full rounded-lg p-1 font-bold text-white hover:bg-green-500">
                Crear
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NuevaAuditoria;
