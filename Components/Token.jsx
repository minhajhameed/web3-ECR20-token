"use client";

import React from "react";
import { useStateContext } from "@Context";
import { TokenDetails, TokenSale } from "@Components";

const Token = () => {
  const { buyToken, tokenSale, tokenBalance } = useStateContext();
  return (
    <div className="w-full">
      <TokenDetails tokenSale={tokenSale} />
      <TokenSale buyToken={buyToken} tokenSale={tokenSale} balance={tokenBalance} />
    </div>
  );
};

export default Token;
