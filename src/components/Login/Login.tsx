import { Input } from "../ui/input"
import { Label } from "@/components/ui/label"
import { Button} from "../ui/button";
import foto from "./img/fotocualquiera.jpg";
import ImageCompo from "../imageCompo/imageCompo";
import './Login.css';


function Login() {
  return (
    
    <>
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

    
    </>
    
  )
}
export default Login