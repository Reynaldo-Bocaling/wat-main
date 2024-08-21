"use client";
import React from "react";
import Image from "next/image";
import grass1 from "@/public/img/grass1.webp";
import light from "@/public/img/light3.webp";
import chair from "@/public/img/wall4.webp";
import pet from "@/public/img/pet1.webp";
import house from "@/public/img/building6.webp";
import { motion } from "framer-motion";
const Content = () => {
  return (
    <div className=" ">
      <div className="reltive">
        <div className=" flex flex-col items-center">
          <div className="relative  flexBetween w-full ">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-25, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-1/2"
            >
              <Image
                src={pet}
                alt="cloud"
                className="opacity-0 duration-[2s] absolute bottom-40 md:bottom-20 left-[100px] md:left-[250px] w-[90px] md:w-[150px] z-50"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
              <Image
                src={chair}
                alt="cloud"
                className="opacity-0 duration-[2s] absolute bottom-0 left-44 w-[200px] md:w-[330px] z-40"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
              <Image
                src={light}
                alt="cloud"
                className="opacity-0 duration-[2s] absolute bottom-0 left-24 w-[120px] md:w-[175px] z-20"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />

              <Image
                src={grass1}
                alt="cloud"
                className="opacity-0 duration-[2s] absolute bottom-0 left-0 w-[170px] md:w-[350px] "
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [25, 0], opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-1/2 bg-blue-500"
            >
              <Image
                src={house}
                alt="cloud"
                className="opacity-0 duration-[2s]   absolute left-1/2 -translate-x-24 bottom-0 z-30 w-[180px]  md:w-[350px] "
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
              />
              <div className="flex gap-12 absolute bottom-0 -right-40">
                <Image
                  src={grass1}
                  alt="cloud"
                  className="opacity-0 duration-[2s] w-[120px] md:w-[350px] scale-x-[-1]"
                  onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                  }
                />

                <Image
                  src={grass1}
                  alt="cloud"
                  className="opacity-0 duration-[2s] w-[170px] md:w-[350px]  scale-x-[-1]"
                  onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                  }
                />
              </div>
            </motion.div>
          </div>
          <div className="w-full max-w-full">
            <div className="neon-red-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
