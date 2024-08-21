"use client";
import React from "react";
import Image from "next/image";
import building1 from "@/public/img//building1.webp";
import building2 from "@/public/img//building8.webp";
import Moon from "../moon/Moon";
import cloud1 from "@/public/img/cloud1.webp";
import { motion } from "framer-motion";

const LeftContent = () => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [-25, 0], opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-[35%] translate-x-[30px] md:translate-x-0 flex items-end gap-9 "
    >
      <Moon variant="neon-image top-0 md:top-16 left-[70px] md:left-[150px] w-[100px] h-[100px] md:w-[250px] md:h-[250px]" />
      <Image
        src={cloud1}
        alt="cloud"
        className={`neon-image animate-move-cloud opacity-0 duration-[2s] absolute left-[120px] md:left-[250px] top-32 md:top-40 w-[120px] md:w-[230px]`}
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={building2}
        alt="cloud"
        className="opacity-0 duration-[2s] w-[70px] md:w-[150px] md:translate-y-[70px]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={building1}
        alt="cloud"
        className="opacity-0 duration-[2s] w-[130px] h-[200px] md:h-[320px] md:w-[220px] md:translate-y-[70px]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </motion.div>
  );
};

export default LeftContent;
