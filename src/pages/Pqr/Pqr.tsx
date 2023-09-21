import { useParams } from "react-router-dom";

function Pqr() {
  const { id } = useParams();
  console.log(id);
  return <div></div>;
}
export default Pqr;
