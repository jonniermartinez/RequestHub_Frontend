import * as React from "react";
import "./style.css";
import img from "@/assets/Group.svg"

interface Image {
  texto?: string;
  url?: string;
}

// refactorizar

const ImageCompo: React.FC<Image> = ({ texto, url }) => {
  // const imageStyle = {
  //   backgroundImage: `url(${url})`,
  // };

  return (
    <>
      <div className="w-5/12 max-[1093px]:hidden">
        <div className="w-full h-full relative">
          <img src={img} className=" max-h-screen" alt="" />

          <p className=" absolute top-1 p-5">RequestHub</p>
          <p className=" absolute bottom-1 right-20">asasa</p>
        </div>

      </div>
    </>
  );
};

export default ImageCompo;
