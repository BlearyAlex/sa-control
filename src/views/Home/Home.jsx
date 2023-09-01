import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="mb-5">
        <h1 className="text-3xl">Expedientes</h1>
        <p className="">Pendientes de realizar algún tramite</p>
      </div>

      <div className="flex justify-around flex-wrap gap-2">
        {/* Planeacion */}
        <Link to={'/planeacion'}>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 relative">
              <div className="mb-2 bg-green-400 text-center rounded-md p-1">
                <h4 className="font-bold text-xl">Planeación</h4>
                <p>
                  Total de Auditoras: <span className="font-bold">10</span>{' '}
                </p>
              </div>
              <div>
                <h6>
                  Auditoria Directa: <span className="font-bold">3</span>{' '}
                </h6>
                <h6>
                  Auditoria Conjunta: <span className="font-bold">2</span>{' '}
                </h6>
                <h6>
                  Revisiones: <span className="font-bold">2</span>{' '}
                </h6>
                <h6>
                  Evaluaciones: <span className="font-bold">3</span>{' '}
                </h6>
              </div>
            </div>

            <div className="px-6 pt-4 pb-2"></div>
          </div>
        </Link>

        {/* Ejecucion */}
        <Link to={'/ejecucion'}>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 relative">
              <div className="mb-2 bg-orange-400 text-center rounded-md p-1">
                <h4 className="font-bold text-xl">Ejecución</h4>
                <p>
                  Total de Auditoras: <span className="font-bold">15</span>{' '}
                </p>
              </div>
              <div>
                <h6>
                  Auditoria Directa: <span className="font-bold">4</span>{' '}
                </h6>
                <h6>
                  Auditoria Conjunta: <span className="font-bold">4</span>{' '}
                </h6>
                <h6>
                  Revisiones: <span className="font-bold">4</span>{' '}
                </h6>
                <h6>
                  Evaluaciones: <span className="font-bold">3</span>{' '}
                </h6>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>
        </Link>

        {/* Seguimiento */}
        <Link to={'/seguimiento'}>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 relative">
              <div className="mb-2 bg-blue-400 text-center rounded-md p-1">
                <h4 className="font-bold text-xl">Seguimiento</h4>
                <p>
                  Total de Auditoras: <span className="font-bold">8</span>{' '}
                </p>
              </div>
              <div>
                <h6>
                  Auditoria Directa: <span className="font-bold">1</span>{' '}
                </h6>
                <h6>
                  Auditoria Conjunta: <span className="font-bold">3</span>{' '}
                </h6>
                <h6>
                  Revisiones: <span className="font-bold">2</span>{' '}
                </h6>
                <h6>
                  Evaluaciones: <span className="font-bold">2</span>{' '}
                </h6>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>
        </Link>

        {/* Informe */}
        <Link to={'/informe'}>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 relative">
              <div className="mb-2 bg-red-400 text-center rounded-md p-1">
                <h4 className="font-bold text-xl">Informe</h4>
                <p>
                  Total de Auditoras: <span className="font-bold">12</span>{' '}
                </p>
              </div>
              <div>
                <h6>
                  Auditoria Directa: <span className="font-bold">3</span>{' '}
                </h6>
                <h6>
                  Auditoria Conjunta: <span className="font-bold">3</span>{' '}
                </h6>
                <h6>
                  Evaluaciones: <span className="font-bold">3</span>{' '}
                </h6>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>
        </Link>

        {/* Conclusion */}
        <Link to={'/conclusion'}>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4 relative">
              <div className="mb-2 bg-violet-400 text-center rounded-md p-1">
                <h4 className="font-bold text-xl">Conclusión</h4>
                <p>
                  Total de Auditoras: <span className="font-bold">19</span>{' '}
                </p>
              </div>
              <div>
                <h6>
                  Auditoria Directa: <span className="font-bold">5</span>{' '}
                </h6>
                <h6>
                  Auditoria Conjunta: <span className="font-bold">2</span>{' '}
                </h6>
                <h6>
                  Revisiones: <span className="font-bold">4</span>{' '}
                </h6>
                <h6>
                  Evaluaciones: <span className="font-bold">8</span>{' '}
                </h6>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
