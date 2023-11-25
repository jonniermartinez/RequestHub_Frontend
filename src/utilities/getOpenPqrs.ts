import { client } from '@/supabase';
import { getUserId } from '@/utilities/getUserId';

export const getOpenPqrs = async () => {
  const id = await getUserId();
  // por ahora usar el id harcodiado

  try {
    const { data, error } = await client
      .from('pqr_form')
      .select('*')
      .eq('id_profile', id)
      .eq('state', 'open');

    if (error) {
      return [];
    }

    if (data) {
      return data.length || [];
    }
  } catch (error) {
    console.error('Error inesperado:', error.message);
    return [];
  }
};
