import React from "react";
import Image from "next/image";
import cloudleft from "@/public/img/cloud1.webp";
import cloudRight from "@/public/img/cloud2.webp";
import cloud from "@/public/img/cloud1.webp";

const Cloud = () => {
  return (
    <>
      <Image
        src={cloudleft}
        alt="cloud"
        className="neon-image opacity-0 duration-[2s] animate-move-cloud  absolute -left-[30px] md:-left-[170px] -top-[80px] w-[170px] md:w-[340px] z-10 scale-x-[-1]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloud}
        alt="cloud"
        className="neon-image opacity-0 duration-[2s] animate-move-cloud absolute right-[50px] md:right-[400px] top-[150px] md:top-[300px] w-[250px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloudRight}
        alt="cloud"
        className="neon-image opacity-0 duration-[2s] animate-move-cloud absolute -right-[30px] md:-right-[120px] -top-52 w-[120px] md:w-[230px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </>
  );
};

export default Cloud;
