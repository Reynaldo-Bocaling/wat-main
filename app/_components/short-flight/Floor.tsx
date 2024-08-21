import React from "react";
import buildLeft1 from "@/public/img/building10.webp";
import buildLeft2 from "@/public/img/building3.webp";
import buildRight1 from "@/public/img/building1.webp";
import buildRight2 from "@/public/img/building2.webp";
import Image from "next/image";
const Floor = () => {
  return (
    <div className="absolute bottom-0 w-full flex ">
      <div className="w-full max-w-full">
        <div className="neon-red-line"></div>
      </div>

      <div className="absolute bottom-2  right-14 flex items-end gap-5 z-10">
        <Image
          src={buildRight1}
          alt="cloud"
          className="opacity-0 duration-[2s] w-[100px] h-[220px] md:h-auto md:w-[200px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={buildRight2}
          alt="cloud"
          className="opacity-0 duration-[2s] w-[70px] md:w-[100px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <div className="absolute bottom-2  left-14 flex items-end gap-5 z-10">
        <Image
          src={buildLeft1}
          alt="cloud"
          className="opacity-0 duration-[2s] w-[100px] h-[220px] md:h-auto md:w-[150px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={buildLeft2}
          alt="cloud"
          className="opacity-0 duration-[2s] w-[100px] md:w-[120px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
    </div>
  );
};

export default Floor;
