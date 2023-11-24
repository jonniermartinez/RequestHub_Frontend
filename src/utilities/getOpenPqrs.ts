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
      console.error('Error al actualizar el campo message:', error.message);
      return [];
    }

    if (data) {
      console.log('Campo message actualizado con éxito:', data);
      return data.length || [];
    }
  } catch (error) {
    console.error('Error inesperado:', error.message);
    return [];
  }
};
