"use client";

import Image from "next/image";
import React, { useState } from "react";

import ball from "../public/assets/images/ball.png";

const TokenSale = ({ buyToken, tokenSale, balance }) => {
  const [nToken, setNToken] = useState(1);

  const persentage = (tokenSale?.tokenSold / tokenSale?.tokenSaleBalance) * 100;
  const showPercentage = persentage.toString();
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-20">
      <div className="flex flex-row gap-10">
        <input
          className="rounded-lg px-5  w-96 text-center text-primary-color h-52 text-9xl kode_font bg-[#101010] focus:bg-black border border-gray-300  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-[#101010] dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary-color dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          required
          placeholder="000"
          min={1}
          onChange={(e) => setNToken(e.target.value)}
          name="token"
        />
        <button
          onClick={() => buyToken(nToken)}
          className="flex text-white h-52 hover:text-primary-color  border border-gray-300 bg-[#101010] hover:bg-black p-2 rounded-lg w-40 text-xl text-center justify-center items-center"
        >
          Buy
        </button>
      </div>
      <div className="flex flex-row gap-10 items-center mt-20 bg-black border border-gray-600 pr-6 rounded-lg ">
        <Image src={ball} width={200} height={200} />
        <div className="text-white text-5xl kode_font">Your Wallet:</div>
        <div className="text-primary-color text-8xl kode_font">
          {Math.floor(balance)}
          <span className="text-white text-4xl kode_font">CFT</span>
        </div>
      </div>
    </div>
  );
};

export default TokenSale;
