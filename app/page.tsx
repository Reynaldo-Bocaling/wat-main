"use client";
import React, { useEffect, useState } from "react";
import Home from "./_components/home";
import About from "./_components/about";
import RoadMap from "./_components/roadmap";
import BuyMeg from "./_components/buy-meg/BuyMeg";
import Tokenomics from "./_components/tokenomics";
import ShortFlight from "./_components/short-flight";
import Cta from "./_components/cta";
import Social from "./_components/social";
import Loading from "./_components/loading/BoxLoading";
import BackgroundMusic from "./_components/bg-sound/BackgroundSound";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full min-h-screen relative pb-20 flexColCenter overflow-hidden">
      <Home />
      <About />
      <RoadMap />
      <BuyMeg />
      <Tokenomics />
      <ShortFlight />
      <Cta />
      <Social />

      {/* background sound */}
      <BackgroundMusic />
    </div>
  );
};

export default page;
