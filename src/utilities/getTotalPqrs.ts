import { client } from '@/supabase';
import { getUserId } from '@/utilities/getUserId';

// Get Totals pqrs by user
export const pqrQuantity = async () => {
  const id = await getUserId();
  // por ahora usar el id harcodiado

  try {
    const { data, error } = await client
      .from('pqr_form')
      .select('*')
      .eq('id_profile', id);

    if (error) {
      console.error('Error al actualizar el campo message:', error.message);
      return [];
    }

    if (data) {
      console.log('Campo message actualizado con éxito:', data);
      return data || [];
    }
  } catch (error) {
    console.error('Error inesperado:', error.message);
    return [];
  }
};
