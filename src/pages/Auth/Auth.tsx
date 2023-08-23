import { Login } from "@/components";
import SingIn from "@/components/Sing/Singin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Auth() {
  return (
    <>
      <div className="flex gap-11">
        <div className=" w-5/12">
          {/* Sara aqui va tu compoente image */}
          <img
            src="https://res.cloudinary.com/dtd4ibgoz/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1692712582/image_25_dxlig4.jpg?_s=public-apps"
            alt=""
            className=" max-h-screen w-full object-scale-contain"
          />
        </div>
        <div className="flex w-1/2 justify-center">
          <Tabs
            defaultValue="account"
            className="w-[400px] h-screen flex flex-col justify-center "
          >
            <TabsList className=" w-fit">
              <TabsTrigger value="account">Login</TabsTrigger>
              <TabsTrigger value="password">SingIn</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className=" h-1">
              <Login></Login>
            </TabsContent>
            <TabsContent value="password">
              <SingIn></SingIn>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
