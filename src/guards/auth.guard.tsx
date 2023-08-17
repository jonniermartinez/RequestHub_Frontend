import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";
import { RootState } from "../redux/store";

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PublicRoutes.AUTH} />;

export const AuthGuard = () => {
  const userState = useSelector((store: RootState) => store.user);
  // Si user.data.seccion exite que siga con Outlet
  if (userState.data) {
    return PrivateValidationFragment;
  }
  // Si user.data.seccion no exite por favor te me vas para el login
  if (!userState.data) {
    return PublicValidationFragment;
  }
};

export default AuthGuard;
