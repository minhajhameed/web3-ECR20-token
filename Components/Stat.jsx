import Image from "next/image";
import React from "react";
import { company } from "@constants";
import LogoSlide from "./LogoSlide";

const Stat = () => {
  const images = [company.eth, company.doge, company.solana, company.bitcoin, company.binance];

  return (
    <div className="flex flex-col px-8 gap-8">
      <h3 className="kode_font text-white text-5xl text-center py-20 mt-20">
        comprehensive market <br /> <span className="kode_font bg-gradient-to-tr from-pink-600 via-pink-600 to-violet-600 text-transparent bg-clip-text">intelligence</span> for the Pros
      </h3>
      <div className="flex flex-row gap-8">
        <div className="flex flex-col w-1/3 py-16 text-center card_bg_image gap-3 border-[0.01px] border-[#d3ebfd]">
          <p className="text-[#d3ebfd] kode_font text-5xl font-medium">
            100,000+
          </p>
          <p className="text-[#d3ebfd] kode_font text-2xl uppercase">users</p>
        </div>

        <div className="flex flex-col w-1/3 py-16 text-center card_bg_image gap-3 border-[0.01px] border-[#d3ebfd]">
          <p className="text-[#d3ebfd] kode_font text-5xl font-medium">
            200,000+
          </p>
          <p className="text-[#d3ebfd] kode_font text-2xl uppercase">
            tokens tracked
          </p>
        </div>

        <div className="flex flex-col w-1/3 py-16 text-center card_bg_image gap-3 border-[0.01px] border-[#d3ebfd]">
          <p className="text-[#d3ebfd] kode_font text-5xl font-medium">
            2TB+
          </p>
          <p className="text-[#d3ebfd] kode_font text-2xl uppercase">
            data processed daily
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col w-1/3 py-16 text-center card_bg_image gap-3 border-[0.01px] border-[#d3ebfd]">
          <p className="text-[#d3ebfd] kode_font text-5xl font-medium">
            5+
          </p>
          <p className="text-[#d3ebfd] kode_font text-2xl uppercase">
            CEX tracked
          </p>
        </div>

        <div className="flex flex-col w-1/3 py-16 text-center card_bg_image gap-3 border-[0.01px] border-[#d3ebfd]">
          <p className="text-[#d3ebfd] kode_font text-5xl font-medium">
            205+
          </p>
          <p className="text-[#d3ebfd] kode_font text-2xl uppercase">
            PROTOCOLS
          </p>
        </div>

        <div className="flex flex-col w-1/3 py-16 text-center card_bg_image gap-3 border-[0.01px] border-[#d3ebfd]">
          <p className="text-[#d3ebfd] kode_font text-5xl font-medium">
            20+
          </p>
          <p className="text-[#d3ebfd] kode_font text-2xl uppercase">
            chains integrated
          </p>
        </div>
      </div>

      <LogoSlide images={images} title={"CFT Integrations:"} direction={"right_animate"} />

    </div>
  );
};

export default Stat;
