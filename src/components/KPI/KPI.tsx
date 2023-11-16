export const UserKPI = (): JSX.Element => {
  return (
    <div className="flex gap-10">
      <Card
        textPrincipal="324323"
        texSecundary="jonnier"
        className=" bg-blue-200"
      ></Card>
      <Card
        textPrincipal="324323"
        texSecundary="jonnier"
        className=" bg-green-200"
      ></Card>
      <Card
        textPrincipal="324323"
        texSecundary="jonnier"
        className=" bg-yellow-200"
      ></Card>
      <Card
        textPrincipal="324323"
        texSecundary="jonnier"
        className=" bg-slate-200"
      ></Card>
    </div>
  );
};

interface CardProps {
  textPrincipal: string;
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
