"use client";

import React from "react";
import logo from "../public/assets/logos/logo.svg";

import { useStateContext } from "@Context";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { connectWallet, setAddress, address } = useStateContext();

  return (
    <header className="flex flex-row justify-between px-10 py-7 items-center text-center text-primary-color">
      <div className="flex flex-row gap-5">
        <Image alt="logo" src={logo} width={28} height={28} />

        <Link href="/" className="flex">
          <h1 className="jose_font text-xl font-bold uppercase">Crypto Fox</h1>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-5">
        <Link
          href="/#about"
          className="flex jose_font text-lg font-semibold underline underline-offset-4"
        >
          About
        </Link>
        <Link
          href="/whitepaper"
          className="jose_font text-lg font-semibold underline underline-offset-4"
        >
          Whitepaper
        </Link>
        <Link
          href="/#buyToken"
          className="jose_font text-lg font-semibold underline underline-offset-4"
        >
          Token
        </Link>
      </div>
      <>
        {address ? (
          <div className="border border-primary-color px-4 jose_font text-lg font-semibold">
            {address.slice(0, 10)}...
          </div>
        ) : (
          <div onClick={connectWallet} className="border cursor-pointer border-primary-color px-4 jose_font text-lg font-semibold">
            Connect
          </div>
        )}
      </>
    </header>
    
  );
};

export default Header;

{
  /* <div>
        {address ? (
          <div>
            {""}
            {address.slice(0, 10)}...
          </div>
        ) : (
          <div onClick={() => connectWallet}>connect</div>
        )}
      </div> */
}
