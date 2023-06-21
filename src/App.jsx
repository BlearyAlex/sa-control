import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Componentes
import Layout from './layout/Layout';
import Login from './views/Auth/Login';

const LazyLogin = React.lazy(() => import('./views/Auth/Login'));

const LazyHome = React.lazy(() => import('./views/Home/Home'));

const LazyEjecucion = React.lazy(() => import('./views/Ejecucion/Ejecucion'));

const LazyPlaneacion = React.lazy(() =>
  import('./views/Planeacion/Planeacion')
);

const LazySeguimiento = React.lazy(() =>
  import('./views/Seguimiento/Seguimiento')
);

const LazyInforme = React.lazy(() => import('./views/Informe/Informe'));

const LazyConclusion = React.lazy(() =>
  import('./views/Conclusion/Conclusion')
);

const LazyAuditoria = React.lazy(() => import('./views/Auditoria/Auditoria'));

const LazyNuevaAuditoria = React.lazy(() =>
  import('./views/Nueva Auditoria/NuevaAuditoria')
);

const LazyNuevaPlaneacion = React.lazy(() =>
  import('./views/NuevaPlaneacion/NuevaPlaneacion')
);

const LazyNuevaEjecucion = React.lazy(() =>
  import('./views/NuevaEjecucion/NuevaEjecucion')
);

const LazyNuevoSeguimiento = React.lazy(() =>
  import('./views/NuevoSeguimiento/NuevoSeguimiento')
);

const LazyNuevoInforme = React.lazy(() =>
  import('./views/NuevoInforme/NuevoInforme')
);

const LazyNuevaConclusion = React.lazy(() =>
  import('./views/NuevaConclusion/NuevaConclusion')
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback="Cargando...">
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route
            path="home"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route
            path="auditoria"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyAuditoria />
              </React.Suspense>
            }
          />
          <Route
            path="nueva-auditoria"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyNuevaAuditoria />
              </React.Suspense>
            }
          />
          <Route
            path="planeacion"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyPlaneacion />
              </React.Suspense>
            }
          />
          <Route
            path="nueva-planeacion"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyNuevaPlaneacion />
              </React.Suspense>
            }
          />
          <Route
            path="ejecucion"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyEjecucion />
              </React.Suspense>
            }
          />
          <Route
            path="nueva-ejecucion"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyNuevaEjecucion />
              </React.Suspense>
            }
          />
          <Route
            path="seguimiento"
            element={
              <React.Suspense fallback="Cargando...">
                <LazySeguimiento />
              </React.Suspense>
            }
          />
          <Route
            path="nuevo-seguimiento"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyNuevoSeguimiento />
              </React.Suspense>
            }
          />
          <Route
            path="informe"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyInforme />
              </React.Suspense>
            }
          />
          <Route
            path="nuevo-informe"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyNuevoInforme />
              </React.Suspense>
            }
          />
          <Route
            path="conclusion"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyConclusion />
              </React.Suspense>
            }
          />
          <Route
            path="nueva-conclusion"
            element={
              <React.Suspense fallback="Cargando...">
                <LazyNuevaConclusion />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;