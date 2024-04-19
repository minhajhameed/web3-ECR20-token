"use client";

import React from "react";
import TokenButton from "./tokenButton/TokenButton";

const BuyToken = () => {
  return (
    <div id="buyToken" className="flex flex-col justify-center items-center py-40">
      <h2 className="text-5xl text-white kode_font uppercase text-center mb-5">
        Revolutionizing Digital Transactions <br /> with <span className="kode_font text-primary-color"> Crypto Fox </span>
      </h2>
      <p className="text-lg text-gray-300 jost_font text-center mb-20">
        Secure the Crypto Fox ERC20 CFT Tokens now!
      </p>
      <TokenButton />
    </div>
  );
};

export default BuyToken;
