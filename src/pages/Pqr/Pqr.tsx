import PQRCompo from "@/components/pqrCompo/pqrCompo";
import { useParams } from "react-router-dom";

function Pqr() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <PQRCompo empresa="Jonnier SAS"></PQRCompo>
    </div>
  );
}
export default Pqr;
