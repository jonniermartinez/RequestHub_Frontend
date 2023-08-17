import { Suspense, lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import RoutesNotFound from "./utilities/RoutesNotFound";
import { PublicRoutes, PrivateRoutes } from "@/models";
import { AuthGuard } from "./guards";

// Pages
const Auth = lazy(() => import("./pages/Auth/Auth"));
const Private = lazy(() => import("./pages/Private/Private"));
const Landing = lazy(() => import("./pages/Landing/Landing"));

function App() {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  return (
    <>
      {/* Aqui se puede hacer un componente de tipo espineer */}
      <Suspense fallback={<>Cargando</>}>
        <BrowserRouter>
          <RoutesNotFound>
            {/* RUTAS PUBLICAS */}
            <Route path="/" element={<Landing />} />
            <Route path={PublicRoutes.AUTH} element={<Auth />} />
            {/* RUTAS PRIVADAS protejer*/}
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
