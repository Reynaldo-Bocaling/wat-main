import React from "react";
import Image from "next/image";
import cloudleft from "@/public/img/cloud1.webp";
import cloudRight from "@/public/img/cloud2.webp";

const Cloud = () => {
  return (
    <>
      <Image
        src={cloudleft}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute left-[-30px] md:left-[-350px] top-44 w-[130px] md:w-[230px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloudRight}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute left-[100px] -top-16 w-[70px] md:w-[150px] z-10 ]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloudRight}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud  absolute -left-[30px] md:-left-[170px] top-[320px] w-[70px] md:w-[180px] z-10 scale-x-[-1]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloudRight}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute right-[100px] top-0 w-[70px] md:w-[150px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloudleft}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute right-[200px] top-44 w-[120px] md:w-[230px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloudRight}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute -right-[20px] md:-right-[80px] top-48 w-[90px] md:w-[180px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </>
  );
};

export default Cloud;
