import { Footer, Header } from "@Components";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-black flex flex-col pt-16">
      <div className="flex flex-col px-40  my-20 gap-5">
        <h1 className="w-full text-primary-color kode_font font-bold text-3xl mb-10 text-center">
          Crypto Fox <span className="kode_font text-white"> Whitepaper </span>
        </h1>

        <h2 className="text-primary-color kode_font font-bold text-2xl">
          Introduction:
        </h2>
        <p className="text-gray-300 kode_font font-semibold text-lg">
          Welcome to the Crypto Fox whitepaper, your guide to the future of
          digital transactions. In this document, we outline the vision,
          technology, and benefits of the Crypto Fox ERC20 token.
        </p>

        <h2 className="text-primary-color kode_font font-bold text-2xl">
          Problem Statement:
        </h2>
        <p className="text-gray-300 kode_font font-semibold text-lg">
          The digital transactions landscape faces challenges such as high fees,
          slow processing times, and lack of transparency. Traditional financial
          systems often fail to meet the needs of users in an increasingly
          digital world.
        </p>

        <h2 className="text-primary-color kode_font font-bold text-2xl">
          Solution Overview:
        </h2>
        <p className="text-gray-300 kode_font font-semibold text-lg">
          Crypto Fox is an ERC20 token built on the Ethereum blockchain,
          providing a seamless and secure solution for digital transactions.
          Leveraging blockchain technology, Crypto Fox offers fast, low-cost
          transactions with enhanced security and transparency.
        </p>

        <h2 className="text-primary-color kode_font font-bold text-2xl">
          Tokenomics:
        </h2>
        <p className="text-gray-300 kode_font font-semibold text-lg">
          - Token Symbol: FOX
          <br />
          - Total Supply: 1 billion FOX
          <br />
          - Distribution: 50% allocated for ICO, 25% for team and advisors, 15%
          for ecosystem development, 10% for marketing and partnerships
          <br />- Utility: FOX tokens are used for transaction fees, governance,
          and incentivizing network participants.
        </p>

        <h2 className="text-primary-color kode_font font-bold text-2xl">
          Technical Details:
        </h2>
        <p className="text-gray-300 kode_font font-semibold text-lg">
          Crypto Fox is based on the Ethereum blockchain, utilizing the ERC20
          standard for compatibility and interoperability with existing
          platforms and wallets. Smart contracts govern token distribution,
          transactions, and governance processes, ensuring transparency and
          security.
        </p>

        <h2 className="text-primary-color kode_font font-bold text-2xl">
          Roadmap:
        </h2>
        <p className="text-gray-300 kode_font font-semibold text-lg">
          - Q2 2024: Launch of Crypto Fox ICO
          <br />
          - Q3 2024: Listing on major exchanges
          <br />
          - Q4 2024: Development of Crypto Fox wallet and integration with DeFi
          platforms
          <br />- 2025 and Beyond: Expansion of ecosystem, partnerships, and
          adoption efforts.
        </p>

        <h2 className="text-primary-color kode_font font-bold text-2xl">
          Team:
        </h2>
        <p className="text-gray-300 kode_font font-semibold text-lg">
          The Crypto Fox team consists of experienced professionals with
          backgrounds in blockchain development, finance, and marketing. Our
          team is dedicated to building a robust and user-friendly ecosystem for
          digital transactions.
        </p>

        <h2 className="text-primary-color kode_font font-bold text-2xl">
          Conclusion:
        </h2>
        <p className="text-gray-300 kode_font font-semibold text-lg">
          Crypto Fox aims to revolutionize digital transactions by providing a
          secure, transparent, and efficient solution powered by blockchain
          technology. Join us in shaping the future of finance with Crypto Fox.
        </p>
        <Link href="https://github.com/minhajHameed" target="_blank" className="flex justify-center items-center mt-10">
          <div className="py-2 px-8 bg-primary-color hover:opacity-80 text-white kode_font font-semibold text-xl text-center">
            Download Whitepaper
          </div>
        </Link>
      </div>

      <Header />
      <Footer />
    </div>
  );
};

export default page;
