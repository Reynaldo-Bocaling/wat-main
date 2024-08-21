import React from "react";
import pie from "@/public/images/pieChart.png";
import Image from "next/image";

const PieChart = () => {
  const percentage = [
    {
      value: "80% LP",
      variant:
        "text-[4.5rem] md:text-[2rem] absolute top-1/2 -translate-y-1/2 left-[11%]",
    },
    {
      value: "10% MARKETING",
      variant: "text-[2.6rem] md:text-[1.2rem] absolute top-[23%] right-[22%]",
    },
    {
      value: " 5% TEAM",
      variant:
        "absolute text-[2.8rem] md:text-[1.4rem] bottom-[35%] right-[15%]",
    },
    {
      value: " 5% AIRDROP",
      variant: "absolute text-[2.2rem] md:text-[1rem] bottom-[15%] right-[29%]",
    },
  ];
  return (
    <div className="relative  w-[600px] md:w-[800px] mx-auto mt-44">
      <Image
        src={pie}
        alt="grass"
        className="neon-image w-full  opacity-0 duration-[2s]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />

      <>
        {percentage.map((item, index) => (
          <div key={index} className={`${item.variant} neon-text-title `}>
            {item.value}
          </div>
        ))}
      </>
    </div>
  );
};

export default PieChart;
