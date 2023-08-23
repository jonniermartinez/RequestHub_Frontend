<<<<<<< HEAD
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import "./Login.css";
import { client } from "@/supabase";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "@/redux/states/userSlice";
import { PrivateRoutes } from "@/models";
import SingWithGoogle from "../SingWithGoogle/SingWithGoogle";
=======
import { Input } from "../ui/input"
import { Label } from "@/components/ui/label"
import { Button} from "../ui/button";
import foto from "./img/fotocualquiera.jpg";
import ImageCompo from "../imageCompo/imageCompo";
import './Login.css';
>>>>>>> 606c4e3eaf66f172d233a89f9f6c19e35fdd5896

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCredentias, setErrorCredentias] = useState(true);
  const { toast } = useToast();

  const handleSingIn = async (e: { preventDefault: () => void }) => {
    // sing in with email and password
    e.preventDefault();

    try {
      const result = await client.auth.signInWithPassword({
        email: email,
        password: password,
      });

      // si el error es 400 => indicarle al usuario que revise si escribio bien el correo y la contreaseña
      if (result.error?.status === 400) {
        setErrorCredentias(true);
        toast({
          title: "Error: Invalid Credentials",
          description:
            "Please double-check your username and password and try again.",
        });
      }

      // guardar la seccion en el estado glbal de la app
      if (result.data.session != null) {
        dispatch(addUser(result.data.user));
        dispatch(addUser(result.data.session));
        // si sale bien hacer el redirect a dashboard
        navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
      }
    } catch (error) {
      console.log(error.error.status);
    }
  };

  return (
    <>
<<<<<<< HEAD
      <div className="grid w-full max-w-sm items-center gap-6">
        <form
          onSubmit={handleSingIn}
          className="grid w-full max-w-sm items-center gap-6"
        >
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Login
          </h2>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="w-full flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <p className=" text-right cursor-pointer pb-1 text-sm text-muted-foreground">
                Forgot Password
                {/* The dialog Componente to send email changin the password  */}
              </p>
            </div>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button>Login</Button>
        </form>
        <SingWithGoogle />
      </div>
=======
    <div className="principal">
    <ImageCompo texto="RequestHub"
    url="src/components/imageCompo/img/img1.svg" />
    {/* <img className="img" src={foto} alt="foto para el login" />   */}
        <div className="grid w-full max-w-sm max-h-96 items-center gap-1.5">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Login</h2>        
         <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password"></Input>
            <Button>Login</Button>
            <Button variant="outline">
              {/* hacer un componenete icono */}
              <img className="icono-google" src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />
              Login with Email
            </Button>
        </div>
    </div>
>>>>>>> 606c4e3eaf66f172d233a89f9f6c19e35fdd5896

      {errorCredentias ? <Toaster></Toaster> : ""}
    </>
  );
}
// email: "test@gmail.com",
// password: "123456",
