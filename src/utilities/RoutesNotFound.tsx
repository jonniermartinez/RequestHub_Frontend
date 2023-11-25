import { Route, Routes } from "react-router-dom";
import Errorpagina from "@/components/404notfound/Errorpagina";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

function RoutesNotFound({ children }: Props) {
  return (
    <>
      <Routes>
        {children}
        {/* Crear un componente not found */}
        <Route path="*" element={<Errorpagina></Errorpagina>} />
      </Routes>
    </>
  );
}
export default RoutesNotFound;
