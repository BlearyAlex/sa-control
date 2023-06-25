import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Componentes
import Layout from './layout/Layout';
import Login from './views/Auth/Login';
import { ProtectedRoute } from './components/utils/ProtectedRoute';
import { useLocalStorage } from 'react-use';

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
  import('./views/Auditoria/NuevaAuditoria')
);

const LazyNuevaPlaneacion = React.lazy(() =>
  import('./views/Planeacion/NuevaPlaneacion')
);

const LazyNuevaEjecucion = React.lazy(() =>
  import('./views/Ejecucion/NuevaEjecucion')
);

const LazyNuevoSeguimiento = React.lazy(() =>
  import('./views/Seguimiento/NuevoSeguimiento')
);

const LazyNuevoInforme = React.lazy(() =>
  import('./views/Informe/NuevoInforme')
);

const LazyNuevaConclusion = React.lazy(() =>
  import('./views/Conclusion/NuevaConclusion')
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
