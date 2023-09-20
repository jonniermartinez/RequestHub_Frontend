import { Suspense, lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RoutesNotFound from "./utilities/RoutesNotFound";
import { PublicRoutes, PrivateRoutes } from "@/models";
import { AuthGuard } from "./guards";

// Pages
const Auth = lazy(() => import("./pages/Auth/Auth"));
const Private = lazy(() => import("./pages/Private/Private"));
const Landing = lazy(() => import("./pages/Landing/Landing"));
const Pqr = lazy(() => import("./pages/Pqr/Pqr"));

function App() {
  return (
    <>
      <Suspense fallback={<>Cargando</>}>
        <BrowserRouter>
          <RoutesNotFound>
            {/* RUTAS PUBLICAS */}
            <Route path="/" element={<Landing />} />
            <Route path={`${PublicRoutes.PQR}/:id`} element={<Pqr />} />
            <Route path={PublicRoutes.AUTH} element={<Auth />} />
            {/* RUTAS PRIVADAS protejer */}
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.PRIVATE} element={<Private />} />
            </Route>
          </RoutesNotFound>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
