import { client } from '@/supabase';
import { getUserId } from '@/utilities/getUserId';

export const getNumberOfClaims = async () => {
  const id = await getUserId();
  // por ahora usar el id harcodiado

  try {
    const { data, error } = await client
      .from('pqr_form')
      .select('*')
      .eq('id_profile', id)
      .eq('pqr_type', '2');

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

export const getNumberOfRequest = async () => {
  const id = await getUserId();
  // por ahora usar el id harcodiado

  try {
    const { data, error } = await client
      .from('pqr_form')
      .select('*')
      .eq('id_profile', id)
      .eq('pqr_type', '4');

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
