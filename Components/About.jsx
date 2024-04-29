import React from "react";

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center p-20">
      <h1 className="ubuntu_font text-6xl font-medium text-center text-white">
        We build{" "}
        <span className="ubuntu_font bg-gradient-to-tr from-pink-600 via-pink-600 to-violet-600 text-transparent bg-clip-text">
          {" "}
          beyond imagination
        </span>{" "}
        <br /> with Ethereum.
      </h1>
      <div className="w-full flex flex-row justify-between bg-red-40 mt-20">
        <div className="flex flex-col items-center mt-24 gap-2 bg-black-1 w-80 h-80 p-10 justify-center rounded-full">
          <h3 className="bebas_font font-medium text-2xl text-white">Transparency & Trust</h3>
          <p className="arimo_font text-center text-white">
            Trust is the cornerstone of our operations. We prioritize
            transparency, ensuring every user interaction is secure,
            accountable, and trustworthy.
          </p>
        </div>
        <div className="flex flex-col  items-center gap-2 border-2 border-white w-80 h-80 p-10 justify-center rounded-full">
          <h3 className="bebas_font font-medium text-2xl text-white">Innovation</h3>
          <p className="arimo_font text-center text-white">
            At Crypto Fox, we are committed to pioneering innovative solutions
            in the cryptocurrency space. From developing cutting-edge blockchain
            technology to creating user-friendly platforms.
          </p>
        </div>
        <div className="flex flex-col mt-24 items-center gap-2 bg-black-1 w-80 h-80 p-10 justify-center rounded-full">
          <h3 className="bebas_font font-medium text-2xl text-white">Community</h3>
          <p className="arimo_font text-center text-white">
            We're more than just a company; we're a community. Our inclusive
            approach fosters collaboration and empowers users to shape the
            future of finance together with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
