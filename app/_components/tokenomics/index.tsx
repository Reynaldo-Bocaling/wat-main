"use client";
import React from "react";
import Floor from "./Floor";
import Stars from "../star/index";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div id="tokenomics_bg" className="relative w-full h-auto">
      <Stars />
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[1365px] w-full  mx-auto mt-28  rounded-[30px] py-[50px]"
        id="tokenomic"
      >
        <motion.h1
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="neon-text-title text-[5.5rem] md:text-[4.5rem] font-bold text-center"
        >
          TOKENOMICS
        </motion.h1>
        <h1 className="neon-text-span text-[4.5rem] md:text-[2.2rem] text-center font-bold  mb-10 mt-9">
          TAX : 0%
        </h1>
        <h1 className="neon-text-span text-[4.5rem] md:text-[2.2rem] text-center font-bold  mb-7">
          LP: BURN
        </h1>
        <h1 className="neon-text-span text-[4.5rem] md:text-[2.2rem] text-center font-bold  mb-7">
          CHAIN: SOLANA
        </h1>

        <Floor />
      </motion.div>
    </div>
  );
};

export default index;
