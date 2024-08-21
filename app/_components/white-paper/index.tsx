"use client";
import React from "react";
import Floor from "./Floor";
import { motion } from "framer-motion";

const index = () => {
  const whitePaper = [
    {
      title: "Introduction",
      value:
        "WHITEPAPER Introduction MEG is a fun and supportive memecoin inspired by MOG, aiming to bring balance, positivity, and a strong community spirit to the crypto space. Positioned as MOG`s girlfriend, MEG complements the dynamic by fostering an inclusive and engaging environment for all holders.",
    },
    {
      title: "Vision",
      value:
        "MEG strives to be more than just a memecoin. Our vision is to build a community-driven ecosystem that leverages the power of collective engagement and fun. We aim to create a space where every holder feels valued and excited about their participation.",
    },
    {
      title: "Community and Governance",
      value:
        "MEG will be driven by its community, with decisions made through a decentralized governance model. Holders will have the ability to propose and vote on changes, ensuring that the future of MEG is shaped by those who support it the most.",
    },
    {
      title: "Security and Transparency",
      value:
        "We prioritize the security of our holders and the transparency of our operations. Regular audits and open communication will be cornerstones of our approach, ensuring trust and confidence within the MEG community.",
    },
    {
      title: "Conclusion",
      value:
        "MEG is more than just a token; it’s a movement. Join us on this exciting journey as we create a fun, supportive, and inclusive community in the world of cryptocurrency. Together, we can achieve great things.",
    },
  ];
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [100, 0], opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-[#23259e] pt-12  "
      id="target_bg"
    >
      <div className="relative max-w-[1500px] w-full  mx-auto mt-10  pb-12">
        <div className=" ">
          <h1 className="neon-text-title text-[3.5rem] font-bold text-center mb-12">
            WHITE PAPER
          </h1>
          <div className="w-full p-7  grid grid-cols-3 justify-center md:grid-cols-5 gap-9 relative z-40">
            {whitePaper.map(({ title, value }, index) => (
              <div
                key={index}
                className="blurd p-5 rounded-lg border border-[rgba(250,250,250,0.5)]"
              >
                <h1 className="neon-text-title text-[4rem] md:text-base font-bold mb-5">
                  {title}
                </h1>
                <p className="whitepaper_p text-[2.3rem] md:text-sm tracking-wider font-semibold text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Floor />
      </div>
    </motion.div>
  );
};

export default index;
