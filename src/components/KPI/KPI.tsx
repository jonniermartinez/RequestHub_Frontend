import { pqrQuantity } from '@/utilities/getTotalPqrs';

import {
  getNumberOfClaims,
  getNumberOfRequest,
} from '@/utilities/getNumberOfClaims';
import { getOpenPqrs } from '@/utilities/getOpenPqrs';

const data = await pqrQuantity();
const totalClaims = await getNumberOfClaims();
const totalRequest = await getNumberOfRequest();
const openPqrs = await getOpenPqrs();

export const UserKPI = (): JSX.Element => {
  return (
    <div className="flex gap-10">
      <Card
        textPrincipal={data?.length}
        texSecundary="Total PQR's"
        className=" bg-blue-200"
      ></Card>
      <Card
        textPrincipal={totalClaims?.toString()}
        texSecundary="Total Claims"
        className=" bg-yellow-200"
      ></Card>
      <Card
        textPrincipal={totalRequest?.toString()}
        texSecundary="Total Request"
        className=" bg-violet-200"
      ></Card>
      <Card
        textPrincipal={openPqrs?.toString()}
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
