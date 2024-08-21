"use client";
import React from "react";
import { motion } from "framer-motion";

const RightContent = () => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [25, 0], opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-[65%] right flexColStart   md:translate-x-[150px]"
    >
      <h1 className="neon-text-title text-[6rem] md:text-[4.5rem] font-bold flexCenter gap-7">
        ABOUT <span className="underline">$WAT</span>
      </h1>
      <div className=" max-w-[450px] md:max-w-[800px] ">
        <p className="neon-text-p text-[3.5rem] md:text-4xl  tracking-wider leading-[5rem] text-[#f1eeee] mt-10">
          To honor Matt Furie's contribution on the meme space, his pet $WAT is
          now being reborn on the Tron Blockchain.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 translate-y-[10px] md:translate-y-[80px] ">
        <p className=" font-semibold text-3xl mb-5 neon-text-span">BASE CA:</p>
        <button className="neon-button rounded-md py-4 px-12 ">Buy Now</button>
      </div>
    </motion.div>
  );
};

export default RightContent;
