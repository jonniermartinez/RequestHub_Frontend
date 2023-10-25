import { Button } from "@/components/ui/button";
import { client } from "@/supabase";
function SingWithGoogle() {
  const handleClick = async () => {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/app",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    data ? console.log(data) : console.log(error);
  };
  return (
    <Button variant="outline" onClick={handleClick}>
      {/* hacer un componenete icono */}
      <img
        className="icono-google"
        src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
        alt=""
      />
      Login with Email
    </Button>
  );
}
export default SingWithGoogle;
