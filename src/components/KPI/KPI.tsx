import { pqrQuantity } from '@/utilities/getTotalPqrs';
import {
  getNumberOfClaims,
  getNumberOfRequest,
} from '@/utilities/getNumberOfClaims';
import { getOpenPqrs } from '@/utilities/getOpenPqrs';
import { useEffect, useState } from 'react';

export const UserKPI = (): JSX.Element => {
  const [data, setData] = useState<number | undefined>(undefined);
  const [totalClaims, setTotalClaims] = useState<number | undefined>(undefined);
  const [totalRequest, setTotalRequest] = useState<number | undefined>(
    undefined
  );
  const [openPqrs, setOpenPqrs] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pqrsQuantity = await pqrQuantity();
        setData(Array.isArray(pqrsQuantity) ? pqrsQuantity.length : undefined);

        const claims = await getNumberOfClaims();
        setTotalClaims(Array.isArray(claims) ? undefined : claims);

        const requests = await getNumberOfRequest();
        setTotalRequest(Array.isArray(requests) ? undefined : requests);

        const openPqrsCount = await getOpenPqrs();
        setOpenPqrs(Array.isArray(openPqrsCount) ? undefined : openPqrsCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-10">
      <Card
        textPrincipal={data}
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
