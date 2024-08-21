"use client";
import React from "react";
import Floor from "./Floor";
import Cloud from "./Cloud";
import Stars from "../star/index";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div className="w-full" id="cta_bg">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative max-w-[1365px] w-full  mx-auto mt-[100px] translate-y-[-100px]"
      >
        <Stars />
        <div id="cta" className=" pb-[200px] md:pb-[270px]">
          <h1 className="neon-text-title text-[7.5rem] md:text-[3.5rem] font-bold text-center mb-4">
            $WAT
          </h1>
          <div className="flexColCenter gap-5 mb-16">
            <div className="relative overflow-hidden w-full mt-2 mb-5">
              <div className=" slide-infinite mx-7 bg-transparent">
                <span className="neon-text-extra text-[5rem] md:text-3xl text-yellow-500">
                  To the Sun and Beyond
                </span>
              </div>
            </div>
          </div>
        </div>
        <Cloud />
        <Floor />
      </motion.div>
    </div>
  );
};

export default index;
