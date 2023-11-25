import { client } from '@/supabase';

export async function getUserId() {
  try {
    const { data } = await client.auth.getSession();
    data.session?.user.id;
    return '2d11eba4-24c5-46b2-b34b-3d78f171a850';
  } catch (error) {
    console.log(error);
    return '';
  }
}
