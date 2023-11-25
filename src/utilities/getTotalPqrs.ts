import { client } from '@/supabase';
import { getUserId } from '@/utilities/getUserId';

// Get Totals pqrs by user
export const pqrQuantity = async () => {
  const id = await getUserId();
  // por ahora usar el id harcodiado

  try {
    const { data, error } = await client
      .from('pqr_form')
      .select(
        'creation_time, id, id_profile, message, pqr_owner, category(category), state, subject'
      )
      .eq('id_profile', id);

    if (error) {
      return [];
    }

    if (data) {
      return data || [];
    }
  } catch (error) {
    console.error('Error inesperado:', error.message);
    return [];
  }
};
