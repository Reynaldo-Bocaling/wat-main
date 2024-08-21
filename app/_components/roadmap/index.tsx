"use client";
import React from "react";
import Cloud from "./Cloud";
import { motion } from "framer-motion";
import RoadMap from "./RoadMap";

const index = () => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [-100, 0], opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-[#23259e]"
      id="roadmap_bg"
    >
      <div className="relative max-w-[1500px] w-full  mx-auto mt-28 -mb-5  rounded-lg py-[40px] px-[20px]">
        <h1 className="neon-text-title text-[4.5rem] font-bold text-center mb-16">
          HOW TO BUY
        </h1>
        <Cloud />
        <RoadMap />

        <div className="w-full max-w-full mt-10">
          <div className="neon-red-line"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
