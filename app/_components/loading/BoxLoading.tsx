"use client";
import Image from "next/image";
import React from "react";
import loading from "@/public/img/boxloading.gif";
const BoxLoading = () => {
  return (
    <>
      <div className="fixed h-full w-full flexColCenter gap-[30px] bg-[#1b1b1c]">
        <div className="flexColCenter gap-16 md:gap-7 md:translate-y-[70px]">
          <h1 className="neon-text-title text-[10rem] md:text-[3.5rem] font-bold text-left mb-4">
            $WAT
          </h1>

          <h1 className="neon-text-extra text-[8rem] md:text-[1.2rem] font-bold text-left mb-4">
            Matt Furie's Pet Rat
          </h1>
        </div>
        <Image
          src={loading}
          alt="loading image"
          className="max-w-[700px] w-full opacity-0 duration-[2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
    </>
  );
};

export default BoxLoading;
