import React from "react";
import Image from "next/image";
import cloud2 from "@/public/img/cloud3.webp";

const Cloud = () => {
  return (
    <>
      <Image
        src={cloud2}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute left-[100px] top-16 w-[70px] md:w-[140px] z-10 scale-x-[-1]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloud2}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud  absolute left-[170px] top-[320px] w-[90px] md:w-[180px] z-10 scale-x-[-1]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloud2}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute right-[200px] top-16 w-[90px] md:w-[180px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloud2}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute right-[250px] top-48 w-[120px] md:w-[230px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </>
  );
};

export default Cloud;
