import { client } from '@/supabase';

export const getUserTotal = async () => {
  try {
    const { data, error } = await client
      .from('pqr_owner')
      .select('*', { count: 'exact', head: true });
    if (error) {
      console.error('Error al obtener el id: ', error.message);
    } else {
      return data;
    }
  } catch (error) {
    console.error('Error al obtener el id: ', error.message);
  }
};
