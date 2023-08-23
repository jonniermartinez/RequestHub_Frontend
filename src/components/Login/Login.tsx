import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import "./Login.css";
import { client } from "@/supabase";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCredentias, setErrorCredentias] = useState(true);
  const { toast } = useToast();

  const handleSingIn = async (e: { preventDefault: () => void }) => {
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

      // si sale bien hacer el redirect a dashboard
    } catch (error) {
      console.log(error.error.status);
    }
  };
  return (
    <>
      <form
        className="grid w-full max-w-sm items-center gap-6"
        onSubmit={handleSingIn}
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
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button>Login</Button>
        <Button variant="outline">
          {/* hacer un componenete icono */}
          <img
            className="icono-google"
            src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
            alt=""
          />
          Login with Email
        </Button>
      </form>

      {errorCredentias ? <Toaster></Toaster> : ""}
    </>
  );
}
// email: "test@gmail.com",
// password: "123456",
