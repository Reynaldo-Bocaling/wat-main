"use client";
import React from "react";
import telegram from "@/public/img/telegram.webp";
import dexscreener from "@/public/img/dexscreener.webp";
import x from "@/public/img/x.webp";
import dextools from "@/public/img/dextools.webp";
import Image from "next/image";
import Floor from "./Floor";
import coingecko from "@/public/img/coingecko.webp";
import coinmarketcap from "@/public/img/CoinMarketCap.webp";
import { motion } from "framer-motion";

const index = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: [25, 0], opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full bg-[#d6c4ff] pt-32 py-[70px]"
      id="social_bg"
    >
      <div className="relative max-w-[1365px] w-full  mx-auto mt-40 ">
        <div className="pb-[250px] flexCenter gap-[30px] px-12 mb-[100px]">
          <div className="blurds p-8 rounded-full flexCenter border border-[rgba(250,250,250,0.4)]">
            <a href="https://t.me/basedmeg">
              <Image
                src={telegram}
                alt="roadmap"
                className="neon-image w-[350px]  mx-auto mb-4 opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </a>
          </div>
          <div className="blurds p-10 rounded-full flexCenter border border-[rgba(250,250,250,0.4)]">
            <a href="https://x.com/BasedMegCoin">
              <Image
                src={x}
                alt="cloud"
                className="neon-image  w-[300px] z-10 mx-auto opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </a>
          </div>
          <div className="blurds p-10 rounded-full flexCenter border border-[rgba(250,250,250,0.4)]">
            <a href="https://x.com/Meg_Mogs_gf">
              <Image
                src={dextools}
                alt="cloud"
                className="neon-image  w-[280px] z-10 mx-auto opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </a>
          </div>
          <div className="blurds p-10 rounded-full flexCenter border border-[rgba(250,250,250,0.4)]">
            <a href="">
              <Image
                src={dexscreener}
                alt="cloud"
                className="neon-image  w-[300px] z-10 mx-auto opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </a>
          </div>
          <div className="blurds p-10 rounded-full flexCenter border border-[rgba(250,250,250,0.4)]">
            <a href="">
              <Image
                src={coinmarketcap}
                alt="cloud"
                className="neon-image  w-[300px] z-10 mx-auto opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </a>
          </div>
          <div className="blurds p-10 rounded-full flexCenter border border-[rgba(250,250,250,0.4)]">
            <a href="">
              <Image
                src={coingecko}
                alt="cloud"
                className="neon-image  w-[300px] z-10 mx-auto opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </a>
          </div>
        </div>

        <h1 className="neon-text-title text-[4.5rem] font-bold text-center translate-y-[-300px] ">
          SOCIAL MEDIA
        </h1>

        <Floor />
        <div className="w-full max-w-[80%] mx-auto">
          <div className="neon-red-line"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
