import { useState } from "react";
import { client } from "@/supabase";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button, Input } from "@/components";
import { Label } from "@/components";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Register() {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  async function createUser(event: { preventDefault: () => void }) {
    event.preventDefault();

    // CONTRASEÑA MIN 8 CARACTERES
    if (password.length < 8) {
      setError(true);
      toast({
        title: "Error with the password ",
        description: "The password must be must langer that 8 characters.",
      });
    } else {
      const { data, error } = await client.auth.signUp({
        email: email,
        password: password,
      });
      if (data.user != null) {
        console.log(data);
        setIsAlertDialogOpen(true);
      } else {
        console.log(error);
      }
    }
  }

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-6">
        <form
          onSubmit={createUser}
          className="grid w-full max-w-sm items-center gap-6"
        >
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Register
          </h2>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={(event) => setEmail(event.target.value)}
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
          <Button>Register</Button>
        </form>
      </div>
      {error ? <Toaster /> : ""}
      <Dialog open={isAlertDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Verify Your Email</DialogTitle>
            <DialogDescription>
              Could you please take a moment to review the email in your inbox?
              The details provided in the description require your confirmation
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => navigate(`/`, { replace: true })}>
            Go to home page
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
