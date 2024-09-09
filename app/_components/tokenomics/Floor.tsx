"use client";
import React from "react";
import shed from "@/public/img/building9.webp";
import Image from "next/image";
import Cloud from "./Cloud";
import sign from "@/public/img/sign5.webp";
import wal2 from "@/public/img/wall5.webp";
import buy from "@/public/img/buy.webp";

const Floor = () => {
  return (
    <div className="relative w-full    mt-12">
      <div className="w-full flex justify-between items-end">
        <div className="flex items-start justify-start">
          <div className="relative l-7">
            <Image
              src={shed}
              alt="grass"
              className="w-[550px] opacity-0 duration-[2s]"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
          </div>

          <div className="relative w-[550px]   -translate-x-32">
            <Image
              src={wal2}
              alt="grass"
              className="w-full opacity-0 duration-[2s]"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
            <Image
              src={buy}
              alt="grass"
              className="animate-pulse-star w-[150px] absolute top-9 right-8 opacity-0 duration-[2s]"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
            <p className="text-3xl text-red-500  font-bold absolute top-1/2 -translate-y-1/2 left-10">
              BUY SOLDOG TODAY
            </p>
          </div>
        </div>
        <Image
          src={sign}
          alt="grass"
          className="w-[350px] ml-7 opacity-0 duration-[2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <div className="w-full max-w-full">
        <div className="neon-red-line"></div>
      </div>

      <Cloud />
    </div>
  );
};

export default Floor;
