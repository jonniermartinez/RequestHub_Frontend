// import { useEffect } from 'react';
import { client } from "@/supabase";

export const getUrlPqr = () => { 
    const fetchData = async () => {
      try {
        const { data, error } = await client
          .from('profiles')
          .select('id');
          
        if (error) {
          console.error('Error al obtener el id: ', error.message);
        } else {
            return data
        }
      } catch (error) {
        console.error('Error al obtener el id: ', error.message);
      }
    };

  return fetchData;
};

