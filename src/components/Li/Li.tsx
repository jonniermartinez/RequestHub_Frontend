interface LiProps {
  icon: JSX.Element;
  text: string;
  number?: number;
  short?: boolean;
}
export const Li = ({
  icon,
  text,
  number,
  short = false,
}: LiProps): JSX.Element => {
  return (
    <li className="p-1 flex justify-between items-center text-black/70 hover:text-black hover:bg-black/5 cursor-pointer rounded-sm">
      <div className="flex gap-2">
        {icon}
        {!short ? (
          <span className=" text-black hover:text-black ">{text}</span>
        ) : (
          ''
        )}
      </div>
      {number ? (
        !short ? (
          <p className="px-2 text-sm bg-blue-300 text-blue-800 rounded-full">
            {number}
          </p>
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </li>
  );
};
