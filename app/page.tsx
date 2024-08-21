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
import BackgroundSound from "./_components/bg-sound/BackgroundSound";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContinue, setIsContinue] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  const playContinue = () => {
    setIsContinue(true);
  };
  return (
    <div className="w-full min-h-screen relative pb-20 flexColCenter overflow-hidden">
      <BackgroundSound isContinue={isContinue} playContinue={playContinue} />
      <Home />
      <About />
      <RoadMap />
      <BuyMeg />
      <Tokenomics />
      <ShortFlight />
      <Cta />
      <Social />
    </div>
  );
};

export default page;
