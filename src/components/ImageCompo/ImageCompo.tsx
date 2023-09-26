import * as React from "react";
import "./style.css";

interface Image {
  texto: string;
  url: string;
}

// refactorizar

const ImageCompo: React.FC<Image> = ({ texto, url }) => {
  const imageStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <>
      <div className="w-1/2 image contenedor-imageCompo">
        <div className="imagenCompo" style={imageStyle} />

        {/* <img
					className='imagenCompo'
					src={url} 
					style={imageStyle}
					alt={`Foto de ${texto}`} 
				/> */}
        <label className="texto">{texto}</label>
      </div>
    </>
  );
};

export default ImageCompo;
