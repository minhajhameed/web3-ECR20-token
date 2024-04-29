import React from "react";

const Faq = () => {
  const { transferNativeToken, tokenBalance } = useStateContext();

  return (
    <div>
      <div
        onClick={() => transferNativeToken()}
        className="bg-black p-3 rounded-lg text-white"
      >
        Transfer
      </div>
    </div>
  );
};

export default Faq;
