import { useParams } from "react-router-dom";
import { PQRCompo } from "@/components";

function Pqr() {
  const { id } = useParams();
  console.log(id);
  return <div>
    <PQRCompo empresa="Jonnier"></PQRCompo>
  </div>;
}
export default Pqr;
