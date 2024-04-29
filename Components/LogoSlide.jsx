import React from "react";
import Image from "next/image";

const LogoSlide = ({ images, title, direction }) => {
  return (
    <>
      <div className="flex kode_font text-center items-center justify-center text-white text-3xl mt-20">
        {title}{" "}
      </div>

      {/* <div className="flex justify-around w-full my-20"> */}

      <div className=" flex items-center justify-center py-10">
        {/* 1. */}
        <div className="w-[200%] h-40 overflow-hidden relative">
          {/* 2. */}
          <div
            className={`${direction} w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate`}
          >
            {/* 3 */}
            {images.map((img, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-start w-[20rem]"
                >
                  <Image
                    alt="logo"
                    src={img}
                    width={80}
                    height={80}
                    className="absolute"
                  />
                </div>
              );
            })}
            {images.map((img, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-start w-[20rem]"
                >
                  <Image
                    alt="logo"
                    src={img}
                    width={80}
                    height={80}
                    className="absolute"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSlide;

{
  /* <div className="flex flex-col justify-center items-center">
  <Image alt="fox" src={logo} width={100} height={100} />
  <div className="text-white text-2xl font-medium">Logo</div>
</div>; */
}
