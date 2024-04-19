import Image from "next/image";
import React from "react";
import logo from "../public/assets/logos/logo_whi.svg";

const Fox = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mx-40 text-white kode_font">Join the Crypto Fox</div>
      <div className="flex justify-center items-center w-full">
        <Image src={logo} width={450} height={450} alt="fox" />
      </div>
    </div>
  );
};

export default Fox;
