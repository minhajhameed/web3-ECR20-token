"use client";

import React from "react";
import logo from "../public/assets/logos/logo.svg";
import arrow from "../public/assets/buttons/topArrow.svg";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="flex flex-row justify-between border-t border-white mx-40 mt-10 py-10">
      <Link
        href="https://github.com/minhajHameed"
        target="_blank"
        className="flex gap-5"
      >
        <Image alt="logo" src={logo} width={28} height={28} />
        <p className="text-gray-500 uppercase">© 2024, Crypto Fox</p>
      </Link>
      <Link
        href="/#home"
        className={`${pathname === "/" ? "flex" : "hidden"} gap-2`}
      >
        <Image alt="logo" src={arrow} width={28} height={28} />
        <p className="text-gray-500">Back to top </p>
      </Link>

      <Link
        href="/token/#tokenHome"
        className={`${pathname !== "/" ? "flex" : "hidden"} gap-2`}
      >
        <Image alt="logo" src={arrow} width={28} height={28} />
        <p className="text-gray-500">Back to top </p>
      </Link>
    </footer>
  );
};

export default Footer;
