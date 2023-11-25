import { Login } from '@/components';
import { Register } from '@/components';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/models';
import { client } from '@/supabase';
import { addUser } from '@/redux/states/userSlice';
import { useDispatch } from 'react-redux';
import { ImageCompo } from '@/components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import './Auth.css';

export default function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((store: RootState) => store.user);

  useEffect(() => {
    client.auth
      .getSession()
      .then((data) => {
        if (data.data.session != null) {
          dispatch(addUser(data.data));
          navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
        }
      })
      .catch((error) => console.error(error));
  }, [dispatch, navigate]);
  if (userState.data != null) {
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  }
  return (
    <>
      {/* Sara aqui va tu compoente image */}
      <div className="login-all">
        <ImageCompo
          texto="RequestHub"
          url="https://img.freepik.com/premium-photo/user-account-protection-online-payments-banking-secure_202497-872.jpg?w=740"
        />
        <div className="login-con p-10">
          <div className="login-fields w-[400px]">
            <Tabs defaultValue="account" className="w-[100%]">
              <TabsList className="w-fit">
                <TabsTrigger value="account">Login</TabsTrigger>
                <TabsTrigger value="password">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="">
                <Login></Login>
              </TabsContent>
              <TabsContent value="password">
                <Register />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
