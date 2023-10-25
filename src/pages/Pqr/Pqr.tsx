import { useParams } from "react-router-dom";
import { PQRCompo } from "@/components";
import { client } from "@/supabase";
import { useState, useEffect } from "react";
import Errorpagina from "@/components/404notfound/Errorpagina";


function Pqr() {
  const [existProfile, setExistProfile] = useState(Boolean)
  const { id, name } = useParams();
  // verificar si el id pertenece a alguna organizacion de nuestra base datos
  useEffect(() => {
    verifyTheId()
  }, [id])

  async function verifyTheId() {
    try {
      const { data, error } = await client
        .from("profiles")
        .select("id")
        .eq("id", id)

      data ? setExistProfile(true) : setExistProfile(false)

    } catch (error) {
      console.log(error)
    }

  }

  return <div>
    {
      existProfile ? <PQRCompo empresa="Jonnier" profileId={id}></PQRCompo> : <Errorpagina />
    }
  </div>;
}
export default Pqr;
