interface IconProps {
  children: JSX.Element;
}

export const Icon = ({ children }: IconProps): JSX.Element => {
  return <div className="p-1 rounded-sm hover:bg-slate-200">{children}</div>;
};
