"use client";

import React from "react";
import { useStateContext } from "@Context";
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  TimeLine,
  TokenSale,
} from "../Components/index";

const Hero = () => {
  const {
    transferNativeToken,
    buyToken,
    connectWallet,
    setAddress,
    TOKEN_ICO,
    currentHolder,
    tokenSale,
    tokenHolder,
    nativeToken,
    balance,
    address,
  } = useStateContext();
  return (
    <div>
      <Header
        address={address}
        setAddress={setAddress}
        connectWallet={connectWallet}
      />
      <Banner transferNativeToken={transferNativeToken} />
      <Service />
      <About />
      <TokenSale buyToken={buyToken} tokenSale={tokenSale} />
      <Distribution />
      <MobileApp />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Hero;
