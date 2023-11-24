import { client } from '@/supabase';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '@/models';
import { useDispatch } from 'react-redux';
import { resetUser } from '@/redux/states/userSlice';

interface LogOutProps {
  children: JSX.Element;
}
function LogOut({ children }: LogOutProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    const { error } = await client.auth.signOut();
    dispatch(resetUser());

    navigate(`/${PublicRoutes.AUTH}`, { replace: true });
    console.log(error);
  };

  return <div onClick={handleClick}>{children}</div>;
}
export default LogOut;
