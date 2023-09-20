interface Props {
  children: JSX.Element[] | JSX.Element;
}
function Icono({ children }: Props) {
  return <div>{children}</div>;
}
export default Icono;
