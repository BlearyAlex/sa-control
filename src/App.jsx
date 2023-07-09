import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Componentes
import Layout from './layout/Layout';
import Login from './views/Auth/Login';
import { ProtectedRoute } from './components/utils/ProtectedRoute';
import { useLocalStorage } from 'react-use';

const LazyHome = React.lazy(() => import('./views/Home/Home'));

//! Auditoria
const LazyAuditoria = React.lazy(() => import('./views/Auditoria/Auditoria'));

const LazyNuevaAuditoria = React.lazy(() =>
  import('./views/Auditoria/NuevaAuditoria')
);

//! Planeacion
const LazyPlaneacion = React.lazy(() =>
  import('./views/Planeacion/Planeacion')
);

const LazyNuevaPlaneacion = React.lazy(() =>
  import('./views/Planeacion/NuevaPlaneacion')
);

const LazyNuevaPlaneacionConjunta = React.lazy(() =>
  import('./views/Planeacion/PlaneacionConjuntas')
);

const LazyNuevaPlaneacionRevision = React.lazy(() =>
  import('./views/Planeacion/PlaneacionRevisiones')
);

//! Ejecucion
const LazyEjecucion = React.lazy(() => import('./views/Ejecucion/Ejecucion'));

const LazyNuevaEjecucion = React.lazy(() =>
  import('./views/Ejecucion/NuevaEjecucion')
);

const LazyNuevaEjecucionConjunta = React.lazy(() =>
  import('./views/Ejecucion/EjecucionConjuntas')
);

const LazyNuevaEjecucionRevision = React.lazy(() =>
  import('./views/Ejecucion/EjecucionRevisiones')
);

//! Seguimiento
const LazySeguimiento = React.lazy(() =>
  import('./views/Seguimiento/Seguimiento')
);

const LazyNuevoSeguimiento = React.lazy(() =>
  import('./views/Seguimiento/NuevoSeguimiento')
);

const LazyNuevoSeguimientoConjunta = React.lazy(() =>
  import('./views/Seguimiento/SeguimientoConjuntas')
);

const LazyNuevoSeguimientoRevision = React.lazy(() =>
  import('./views/Seguimiento/SeguimientoRevisiones')
);

//! Informe
const LazyInforme = React.lazy(() => import('./views/Informe/Informe'));

const LazyNuevoInforme = React.lazy(() =>
  import('./views/Informe/NuevoInforme')
);

const LazyNuevoInformeConjunta = React.lazy(() =>
  import('./views/Informe/InformeConjuntas')
);

//! Conclusion
const LazyConclusion = React.lazy(() =>
  import('./views/Conclusion/Conclusion')
);

const LazyNuevaConclusion = React.lazy(() =>
  import('./views/Conclusion/NuevaConclusion')
);

const LazyNuevaConclusionConjunta = React.lazy(() =>
  import('./views/Conclusion/ConclusionConjuntas')
);

const LazyNuevaConclusionRevision = React.lazy(() =>
  import('./views/Conclusion/ConclusionRevision')
);

function App() {
  const [user, setUser] = useLocalStorage('user');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute canActive={user} />}>
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

            {/* Auditoria */}
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

            {/* Planeacion */}
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
              path="nueva-planeacion-conjunta"
              element={
                <React.Suspense fallback="Cargando...">
                  <LazyNuevaPlaneacionConjunta />
                </React.Suspense>
              }
            />
            <Route
              path="nueva-planeacion-revision"
              element={
                <React.Suspense fallback="Cargando...">
                  <LazyNuevaPlaneacionRevision />
                </React.Suspense>
              }
            />

            {/* Ejecucion */}
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
              path="nueva-ejecucion-conjunta"
              element={
                <React.Suspense fallback="Cargando...">
                  <LazyNuevaEjecucionConjunta />
                </React.Suspense>
              }
            />
            <Route
              path="nueva-ejecucion-revision"
              element={
                <React.Suspense fallback="Cargando...">
                  <LazyNuevaEjecucionRevision />
                </React.Suspense>
              }
            />

            {/* Seguimiento */}
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
              path="nuevo-seguimiento-conjunta"
              element={
                <React.Suspense fallback="Cargando...">
                  <LazyNuevoSeguimientoConjunta />
                </React.Suspense>
              }
            />
            <Route
              path="nuevo-seguimiento-revision"
              element={
                <React.Suspense fallback="Cargando...">
                  <LazyNuevoSeguimientoRevision />
                </React.Suspense>
              }
            />

            {/* Informe */}
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
              path="nuevo-informe-conjunta"
              element={
                <React.Suspense fallback="Cargando...">
                  <LazyNuevoInformeConjunta />
                </React.Suspense>
              }
            />

            {/* Conclusion */}
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
            <Route
              path="nueva-conclusion-conjunta"
              element={
                <React.Suspense fallback="Cargando...">
                  <LazyNuevaConclusionConjunta />
                </React.Suspense>
              }
            />
            <Route
              path="nueva-conclusion-revision"
              element={
                <React.Suspense fallback="Cargando...">
                  <LazyNuevaConclusionRevision />
                </React.Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
