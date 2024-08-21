import React from "react";

const Moon = ({ variant }: { variant: string }) => {
  return (
    <>
      <div
        className={`${variant} absolute  rounded-full  neon-turquoise-moon  `}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">{""}</span>
        </div>
      </div>
    </>
  );
};

export default Moon;
