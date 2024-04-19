"use client";

import React from "react";
import { useStateContext } from "@Context";
import {
  About,
  Hero,
  WhyUs,
  BuyToken,
  Faq,
  Footer,
  Header,
  Loader,
  Stat,
  TokenSale,
  TransferToken,
} from "./index";

const Main = () => {
  const {
    transferNativeToken,
    buyToken,
    TOKEN_ICO,
    currentHolder,
    tokenSale,
    tokenHolder,
    nativeToken,
    tokenBalance,
    balance,
  } = useStateContext();
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <WhyUs />
      <Stat />
      <BuyToken />
      {/* <TransferToken transferNativeToken={transferNativeToken} tokenBalance={tokenBalance} /> */}
      {/* <TokenSale buyToken={buyToken} tokenSale={tokenSale} /> */}
      {/* <Team /> */}
      {/* <Faq /> */}
      <Header />
      <Footer />
    </div>
  );
};

export default Main;
