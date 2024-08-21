import React from "react";
import Image from "next/image";
import cloudleft from "@/public/img/cloud1.webp";
import cloudRight from "@/public/img/cloud2.webp";

const Cloud = () => {
  return (
    <>
      <Image
        src={cloudRight}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute left-[100px] -top-16 w-[80px] md:w-[150px] z-10 ]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloudleft}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute right-[450px] top-[-80px] w-[120px] md:w-[250px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloudRight}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute right-[300px] top-[-50px] w-[80px] md:w-[130px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />

      <Image
        src={cloudRight}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute right-0 top-48 w-[80px] md:w-[180px] z-10"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />

      <Image
        src={cloudRight}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud  absolute right-[270px] top-[280px] w-[80px] md:w-[150px] z-40 scale-x-[-1]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </>
  );
};

export default Cloud;
