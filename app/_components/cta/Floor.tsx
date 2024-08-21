"use client";
import React from "react";
import buildLeft1 from "@/public/img/building7.webp";
import buildRight1 from "@/public/img/bridge.webp";
import buildRight2 from "@/public/img/building2.webp";
import bus from "@/public/img/bus.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const Floor = () => {
  return (
    <div className="absolute bottom-0 w-full flex ">
      <div className="w-full max-w-full">
        <div className="neon-red-line"></div>
      </div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [15, 0], opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-2  right-5 flex items-end gap-5 z-10"
      >
        <Image
          src={buildRight1}
          alt="cloud"
          className="opacity-0 duration-[2s]  w-[1024px] translate-x-[80px]  z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={bus}
          alt="cloud"
          className="opacity-0 duration-[2s] neon-image absolute bottom-5 left-[70px] h-[80px] md:h-[100px] w-[250px]  md:w-[450px]  z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={buildRight2}
          alt="cloud"
          className=" opacity-0 duration-[2s] w-[120px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={buildLeft1}
          alt="cloud"
          className=" opacity-0 duration-[2s] w-[170px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </motion.div>
    </div>
  );
};

export default Floor;
