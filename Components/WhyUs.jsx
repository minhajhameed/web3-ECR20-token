import Image from "next/image";
import React from "react";
import { images } from "@constants";

const WhyUs = () => {
  return (
    <div className="flex flex-col justify-center items-center px-40 gap-20">
      <div className="text-white text-center kode_font text-5xl uppercase">
        {" "}
        Empowering DeFi with The ultimate Integrated Solutions
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-center gap-5 w-2/3">
          <h2 className="text-white text-4xl kode_font uppercase">
            DeFi Execution
          </h2>
          <p className="text-gray-400 font-medium text-2xl jose_font pr-28">
            All-in-one, self-custodial DeFi automation platform that seamlessly
            manages positions across top DeFi protocols, providing a
            comprehensive solution of AI-powered tools for DeFi operations.
          </p>
        </div>
        <Image
          alt="human"
          src={images.human1}
          width={300}
          height={300}
          className="rounded-b-full"
        />
      </div>

      <div className="flex flex-row justify-between">
        <Image
          alt="human"
          src={images.human2}
          width={300}
          height={300}
          className="rounded-b-full"
        />
        <div className="flex flex-col justify-center gap-5 w-2/3 pl-28">
          <h2 className="text-white text-4xl kode_font uppercase">
            boosted Yields
          </h2>
          <p className="text-gray-400 font-medium text-2xl jose_font">
            Institutional-grade DeFi strategies curated by experts and built on
            top-tier protocols, designed to optimize yield in the DeFi space and
            AI-driven insights for managing risk.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-center gap-5 w-2/3">
          <h2 className="text-white text-4xl kode_font uppercase">
            advanced crypto data
          </h2>
          <p className="text-gray-400 font-medium text-2xl jose_font pr-28">
            A dynamic data platform that delivers AI-driven, real-time insights
            into the crypto market, catering to the needs of both retail
            investors and institutional users.
          </p>
        </div>
        <Image
          alt="human"
          src={images.human3}
          width={300}
          height={300}
          className="rounded-b-full"
        />
      </div>
    </div>
  );
};

export default WhyUs;
