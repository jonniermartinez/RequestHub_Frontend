import { Route, Routes } from "react-router-dom";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

function RoutesNotFound({ children }: Props) {
  return (
    <>
      <Routes>
        {children}
        {/* Crear un componente not found */}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}
export default RoutesNotFound;
