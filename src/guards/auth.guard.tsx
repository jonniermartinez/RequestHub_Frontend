import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { client } from "@/supabase";
import { useDispatch } from "react-redux";
import { addUser } from "@/redux/states/userSlice";

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PublicRoutes.AUTH} />;

export const AuthGuard = () => {
  const userState = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    client.auth
      .getSession()
      .then((data) => {
        dispatch(addUser(data.data));
        return PrivateValidationFragment;
      })
      .catch((error) => console.log(error));
  }, []);

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
