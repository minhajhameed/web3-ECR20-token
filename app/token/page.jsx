import { Footer, Header, Token, Fox, TokenSale } from "@Components";
import React from "react";

const page = () => {
  return (
    <div className="dotted_background">
      <div id="tokenHome" className="flex flex-col p-20">
        <h1 className="kode_font text-7xl pt-20 text-primary-color text-center uppercase neonText">
          Crypto Fox Token <span className="kode_font text-white">(</span>CFT
          <span className="kode_font text-white">)</span>
        </h1>
        <h2 className="kode_font text-5xl pt-5 text-gray-300 text-center uppercase ">
          ERC20 Token
        </h2>
        <p className="text-2xl kode_font font-light pt-5 text-gray-400 text-center px-20">
          Invest in Crypto Fox Token (CTF) for secure, fast Ethereum
          transactions. Access utilities like fees and governance rights. Grow
          with the ecosystem for potential value appreciation. Join the
          community for exclusive features, aligning with future cryptocurrency
          trends.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center px-20">
        <Token />
      </div>
      <Fox />
      <Header />
      <Footer />
    </div>
  );
};

export default page;
