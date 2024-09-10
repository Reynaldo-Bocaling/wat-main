"use client";
import React from "react";
import Cloud from "./Cloud";
import Floor from "./Floor";
import { motion } from "framer-motion";

const index = () => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [-100, 0], opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-[#3653f7] pt-24"
      id="shortFlight_bg"
    >
      <div className="relative max-w-[1365px] w-full  mx-auto mt-40  pb-[200px] ">
        <h1 className="neon-text-title text-[4.5rem] md:text-[3.2rem] font-bold text-center">
          A SHORT FLIGHT ABOUT
        </h1>
        <h1 className="neon-text-title text-[6.5rem] md:text-[5.5rem] font-bold text-center my-9">
          SOLDOG
        </h1>
        <div className="flexColCenter gap-5 mb-16">
          <div className="relative overflow-hidden w-full mt-2 mb-5">
            <div className=" slide-infinite mx-7 bg-transparent">
              <span className="neon-text-extra text-[5rem] md:text-3xl text-yellow-500">
                The Solana's Dog
              </span>
            </div>
          </div>
        </div>

        <Cloud />

        <Floor />
      </div>
    </motion.div>
  );
};

export default index;
