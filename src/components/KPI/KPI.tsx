import { client } from '@/supabase';

// Get Totals pqrs by user
async function getSeccionID() {
  try {
    const { data } = await client.auth.getSession();
    return data.session?.user.id;
  } catch (error) {
    console.log(error);
  }
}
const pqrQuantity = async () => {
  let id = await getSeccionID();
  id = '2d11eba4-24c5-46b2-b34b-3d78f171a850';
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

const data = await pqrQuantity();
console.log(data?.length);

export const UserKPI = (): JSX.Element => {
  return (
    <div className="flex gap-10">
      <Card
        textPrincipal={data?.length}
        texSecundary="Total PQR's"
        className=" bg-blue-200"
      ></Card>
      <Card
        textPrincipal="324323"
        texSecundary="Total of Users"
        className=" bg-green-200"
      ></Card>
      <Card
        textPrincipal="324323"
        texSecundary="Total Claims"
        className=" bg-yellow-200"
      ></Card>
      <Card
        textPrincipal="324323"
        texSecundary="Open Pqrs"
        className=" bg-slate-200"
      ></Card>
    </div>
  );
};

interface CardProps {
  textPrincipal: string | number | undefined;
  texSecundary: string;
  className?: string;
}

export const Card = ({
  textPrincipal,
  texSecundary,
  className,
}: CardProps): JSX.Element => {
  return (
    <div className={'w-full h-full mt-5 rounded-xl p-5 ' + className}>
      <p className="scroll-m-20 text-xl font-semibold tracking-tights">
        {textPrincipal}
      </p>
      <span className="text-xs">{texSecundary}</span>
    </div>
  );
};
