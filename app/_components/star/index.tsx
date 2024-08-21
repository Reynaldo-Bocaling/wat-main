import React from "react";
import Star from "./Star";
import ShootingStar from "./ShootingStar";

const index = () => {
  const starCount = 50;
  const shootingStarCount = 5;
  const generateRandomValue = (min: any, max: any) =>
    Math.random() * (max - min) + min;

  const generateRandomColor = () => {
    const colors = ["#FFFFFF", "#FFD700", "#FFA500", "#FF4500"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <>
      {Array.from({ length: shootingStarCount }).map((_, index) => (
        <ShootingStar
          key={index}
          left={generateRandomValue(0, 100)}
          top={generateRandomValue(0, 50)}
          duration={generateRandomValue(1, 3)}
          delay={generateRandomValue(0, 5)}
        />
      ))}
    </>
  );
};

export default index;
