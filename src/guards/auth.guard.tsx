import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PublicRoutes } from '../models';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { client } from '@/supabase';
import { useDispatch } from 'react-redux';
import { addUser } from '@/redux/states/userSlice';

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PublicRoutes.AUTH} />;

export const AuthGuard = () => {
  const userState = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const { data, error } = await client.auth.getSession();

        if (error) {
          throw error;
        }

        if (data?.session?.user) {
          dispatch(addUser(data.session.user));
        }
      } catch (error) {
        console.error('Error fetching user session:', error);
        // Manejar el error al obtener la sesión del usuario
        // Puedes redirigir a una página de error o hacer otra acción apropiada aquí
      }
    };

    checkUserSession();
  }, [dispatch]);

  if (userState.data) {
    return PrivateValidationFragment;
  } else {
    return PublicValidationFragment;
  }
};

export default AuthGuard;
