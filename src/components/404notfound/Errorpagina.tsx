import "./estilo.css";


function Errorpagina() {
  return (
    <div className="contenedor-principal">
      <h1 className="title"> ¡oops!</h1> <br />
      <br />
      <p className="texto-principal">404 Not Found </p> <br />

      <div className="contenedor-final">
        <p className="texto-final"> ¡¡ no se encuentra lo que estas buscando !!</p> <br />
        <a href="#" className="btn">Go To Home</a>
      </div>

    </div>
  )
}
export default Errorpagina