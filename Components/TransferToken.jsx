"use client"

import { useStateContext } from "@Context";
import Image from "next/image";
import React from "react";
import ball from "../public/assets/images/ball.png";


const TransferToken = () => {
  const { transferNativeToken, tokenBalance } = useStateContext();
  return (
    <div className="flex flex-col justify-center gap-10 items-center mt-20 p-20">
    <h1 className="text-white text-7xl kode_font">Transfer Token</h1>
    <div className="text-white text-8xl kode_font">{tokenBalance}</div>
    <button className="text-white p-5 border border-gray-600 px-10 hover:text-primary-color text-2xl" onClick={() => transferNativeToken()}>Transfer 500 CFT</button>
    <Image src={ball} width={200} height={200}/>
    </div>
  );
};

export default TransferToken;
