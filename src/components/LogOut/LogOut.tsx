import { client } from "@/supabase";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "@/models";
import { useDispatch } from "react-redux";
import { resetUser } from "@/redux/states/userSlice";

function LogOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    const { error } = await client.auth.signOut();
    dispatch(resetUser());

    navigate(`/${PublicRoutes.AUTH}`, { replace: true });
    console.log(error);
  };

  return <Button onClick={handleClick}>LogOut</Button>;
}
export default LogOut;
