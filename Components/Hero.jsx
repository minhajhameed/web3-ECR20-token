"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import arrow from "../public/assets/buttons/downArrow.svg";
import Link from "next/link";
import LogoSlide from "./LogoSlide";
import { company } from "@constants";

const Hero = () => {
  const images = [company.eth, company.doge, company.solana, company.bitcoin, company.binance];
  return (
    <div id="home" className="bg-black-1">
      <div className="bg-black h-16" />
      <div className="flex flex-col justify-center items-center rounded-b-xl bg-black-1">
        <div className="flex flex-row px-10 py-20 gap-5">
          <div className="flex flex-col w-1/2 gap-4">
            <div className="flex p-4 h-1/3 ubuntu_font items-center cursor-default tracking-wider border-4 border-black hover:border-primary-color text-[#0e100f] lg:text-[5rem] text-[4rem] font-extrabold text-stroke">
              Welcome to
            </div>

            <div className="flex flex-row h-2/3 rounded text-white gap-4">
              <div className="flex flex-col w-2/3 p-4 items-start justify-center bg-black cursor-default">
                <div className="lg:text-8xl text-6xl uppercase">Crypto</div>
                <div
                  className="lg:text-[11rem] text-[8rem] uppercase "
                  style={{ lineHeight: "1" }}
                >
                  Fox
                </div>
              </div>

              <div className="flex flex-col w-1/3 gap-4">
                <Link
                  href="#buyToken"
                  className="bg-black h-1/2 w-full flex justify-center items-center hover:text-primary-color hover:bg-zinc-950"
                >
                  Buy Token
                </Link>
                <Link
                  href="/whitepaper"
                  className="bg-black h-1/2 w-full flex justify-center text-center items-center hover:text-white text-primary-color hover:bg-zinc-950"
                >
                  WhitePaper
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded p-2 w-1/2 h-full bg-primary-color bebas_font text-6xl overflow-hidden">
            Your Future in Finance Starts Here! Fund the simplicity, security,
            and transparency of tomorrow's finance today with CFT erc20 Token.
            Join us in revolutionizing digital transactions with Fox Crypto's
            secure blockchain solution.
          </div>
        </div>
        <div className="flex justify-center shadow-sm shadow-primary-color animate-bounce w-10 h-10 items-center p-1 bg-black rounded-full">
          <Image alt="fox" src={arrow} width={28} height={28} />
        </div>
      </div>
      <LogoSlide images={images} title={"Compatible with:"} direction={"left_animate"} />
    </div>
  );
};

export default Hero;

{
  /* <div className="flex items-center justify-center p-2 rounded-lg w-1/2 h-[30rem] bg-gradient-to-tr from-green-300 via-lime-400 to-lime-300">
      <div>Text</div>
      <div>Text</div>
        <Image alt="fox" className="absolute" src={logo} width={500} height={500} />
      </div> */
}
