import React from "react";

const RoadMap = () => {
  const howtobuy = [
    {
      title: "Wallet",
      value: "Get Phantom wallet",
    },
    {
      title: "Solana",
      value: "Fund Phantom with SOL",
    },
    {
      title: "Raydium",
      value: "Buy Soldog with Solana",
    },
  ];

  return (
    <div className="relative flex items-center justify-center gap-[1%] w-full">
      {howtobuy.map((item, index) => (
        <div
          key={index}
          className="road-blurd flex gap-3 items-start justify-center p-[30px] rounded-[25px] w-1/3"
        >
          <div className="flex flex-col  items-center justify-center">
            <p className="neon-text-title text-[5rem] md:text-[4rem] font-bold ">
              STEP {index + 1}
            </p>
            <p className="neon-text-span text-[3rem] md:text-[2rem] font-bold text-left mb-11 pt-12">
              {item.title}
            </p>
            <p className="text-center w-full md:mt-3 md:-translate-x-[40px] neon-text-p text-white text-[2.7rem] md:text-xs tracking-wider my-2 text-center">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadMap;
