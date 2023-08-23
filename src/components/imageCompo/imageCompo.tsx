import * as React from "react";
import "../imageCompo/style-imageCompo.css";

interface Image {
	texto: string;
	url: string;
  }

const ImageCompo: React.FC<Image> = ({ texto, url }) => {
	return (
		<>
			{/* <div className="col-md-6 image contenedor-imageCompo"> */}
			<div className="w-1/2 image contenedor-imageCompo">
				<img
					className='imagenCompo'
					src={url}
					alt={`Foto de ${texto}`} />
				<label className="texto">{texto}</label>
			</div>
		</>
	);
};

export default ImageCompo;