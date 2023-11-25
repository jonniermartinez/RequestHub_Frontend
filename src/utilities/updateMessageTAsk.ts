import { client } from '@/supabase';

export async function actualizarCampoMessage(
  taskId: number,
  nuevoMessage: string
) {
  try {
    const { data, error } = await client
      .from('pqr_form')
      .update({ message: nuevoMessage })
      .eq('id', taskId);

    if (error) {
      console.error('Error al actualizar el campo message:', error.message);
      return null;
    }

    if (data) {
      console.log('Campo message actualizado con éxito:', data);
      return data;
    }
  } catch (error) {
    console.error('Error inesperado:', error.message);
    return null;
  }
}
