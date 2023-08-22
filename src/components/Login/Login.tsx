import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import foto from "./img/fotocualquiera.jpg";
import "./Login.css";
import { client } from "@/supabase";

function Login() {
  const handleSingIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const result = await client.auth.signInWithPassword({
        email: "test@gmail.com",
        password: "123456",
      });
      console.log(result);
      // si sale bien hacer el redirect a dashboard
      // guardar la seccion en el estado glbal de la app
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* implementar la logica tabs sing in or create account  */}
      <div className="principal">
        <img className="img" src={foto} alt="foto para el login" />
        <div className="grid w-full max-w-sm max-h-96 items-center gap-1.5">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Login
          </h2>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password"></Input>
          <Button onClick={handleSingIn}>Login</Button>
          <Button variant="outline">
            {/* hacer un componenete icono */}
            <img
              className="icono-google"
              src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
              alt=""
            />
            Login with Email
          </Button>
        </div>
      </div>
    </>
  );
}
export default Login;
