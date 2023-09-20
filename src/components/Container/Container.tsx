interface Props {
  children: JSX.Element[] | JSX.Element;
}

function Container({ children }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">{children}</div>
  );
}
export default Container;
