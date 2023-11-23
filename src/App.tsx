import { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RoutesNotFound from './utilities/RoutesNotFound';
import { PublicRoutes, PrivateRoutes } from '@/models';
import { AuthGuard } from './guards';
import store from './redux/store.ts';
import { Provider } from 'react-redux';
import Landing from './pages/Landing/Landing.tsx';
import Pricing from './components/Pricing/Pricing.tsx';

// import { Nav } from "./components/index.ts";
// Pages
const Auth = lazy(() => import('./pages/Auth/Auth.tsx'));
const Private = lazy(() => import('./pages/Private/Private.tsx'));
const Pqr = lazy(() => import('./pages/Pqr/Pqr.tsx'));

function App() {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<>Cargando</>}>
          <BrowserRouter>
            <RoutesNotFound>
              {/* RUTAS PUBLICAS */}
              <Route path="/" element={<Landing />} />
              <Route path={`${PublicRoutes.PQR}/:id/:name`} element={<Pqr />} />
              <Route path={PublicRoutes.AUTH} element={<Auth />} />
              <Route
                path={PublicRoutes.PRICING}
                element={<Pricing></Pricing>}
              ></Route>
              {/* RUTAS PRIVADAS protejer */}
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </RoutesNotFound>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
