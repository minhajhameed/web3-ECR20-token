import React from "react";

const TokenDetails = ({ tokenSale, balance }) => {
  return (
    <div className="flex flex-col pb-20 justify-center items-center gap-20 w-full">
      <div class="flex items-center  w-40 justify-center gap-3 space-x-1 bg-gradient-to-tr from-red-500 via-red-600 to-pink-500 rounded-lg p-[1px]">
        <div class="flex items-center h-10 w-full justify-center gap-3 space-x-1 bg-[#0a0a0a] rounded-lg p-3">
          <span className="text-red-600 text-xl">Live</span>
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col mb-16 rounded-lg px-5 text-center text-primary-color  text-8xl kode_font bg-black border p-2.5 border-gray-600 dark:placeholder-gray-400 dark:text-primary-color">
          <div className="kode_font text-4xl text-white">Available Token:</div>
          {Math.floor(tokenSale.tokenSaleBalance)} CFT
        </div>

        <div className="flex flex-row justify-around w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="kode_font text-white text-6xl">7</div>
            <div className="text-white text-3xl">days left</div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="kode_font text-white text-6xl">
              10000
            </div>
            <div className="text-white text-3xl">Total Token</div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="kode_font text-white text-6xl">
              {tokenSale.tokenSold}
            </div>
            <div className="text-white text-3xl">Token Sold</div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default TokenDetails;
