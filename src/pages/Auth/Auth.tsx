import { Login } from "@/components";
import { Register } from "@/components";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/models";
import { client } from "@/supabase";
import { addUser } from "@/redux/states/userSlice";
import { useDispatch } from "react-redux";
import { ImageCompo } from "@/components"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((store: RootState) => store.user);

  console.log("user ", userState);

  useEffect(() => {
    client.auth
      .getSession()
      .then((data) => {
        if (data.data.session != null) {
          console.log(data);
          dispatch(addUser(data.data));
          navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
        }
      })
      .catch((error) => console.log(error));
  }, []);
  if (userState.data != null) {
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  }
  return (
    <>
      <div className="flex gap-11">
        <div className=" w-5/12">
          {/* Sara aqui va tu compoente image */}
          <ImageCompo
            texto="RequestHub"
            url="https://res.cloudinary.com/dtd4ibgoz/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1692828667/prompthero-prompt-dba1357865c_bfs7ro.jpg?_s=public-apps"
          />
        </div>
        <div className="flex w-1/2 justify-center">
          <Tabs
            defaultValue="account"
            className="w-[400px] h-screen flex flex-col justify-center "
          >
            <TabsList className=" w-fit">
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
    </>
  );
}
