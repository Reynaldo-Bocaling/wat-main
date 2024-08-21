"use client";
import React, { useLayoutEffect } from "react";

const ShootingStar = ({ left, top, duration, delay }: any) => {
  const [shootingStarStyle, setShootingStarStyle] = React.useState({
    left: "0%",
    top: "0%",
    animationDuration: "0s",
    animationDelay: "0s",
  });

  useLayoutEffect(() => {
    setShootingStarStyle({
      left: `${left}%`,
      top: `${top}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    });
  }, [left, top, duration, delay]);

  return <div className="shooting-star" style={shootingStarStyle}></div>;
};

export default ShootingStar;
