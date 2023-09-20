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
      <div className="max-h-screen w-full relative">
        <div className="absolute z-10 bg-gradient-to-t from-black/[0.5] via-/[0.5] to-transparent h-full w-full" />
        <p className="absolute bottom-20 right-32 z-10 scroll-m-20 text-3xl text-white font-semibold tracking-tight first:mt-0">
          {texto}
        </p>
        <img
          className="object-scale-contain max-h-screen w-full"
          src={url}
          alt={`Foto de ${texto}`}
        />
      </div>
    </>
  );
};

export default ImageCompo;
