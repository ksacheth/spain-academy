"use client";
import { motion } from "motion/react";
import { useState } from "react";
import TextReveal from "../templates/TextReveal";

export default function Questions() {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
      <div className="h-[150svh] bg-white pt-[2rem]">
        <div className="flex flex-col items-center z-10">
          <div className="pt-[5rem] w-[80vw] font-serif flex flex-col items-center">
            <TextReveal>
              <div>
                <h1 className="text-[2.8rem]">
                  <span className="italic">Frequently</span> Asked Questions
                </h1>
                <p className="mt-[0.5rem] font-inter sm:text-[1rem] sm:pr-[0rem] sm:leading-[1.1] md:text-[1.1rem] ">
                  Got questions? Our FAQ section is built for curious minds,
                  anxious hearts, and future Spain-bound legends. Whether you're
                  wondering about visas, language, or just how to survive
                  without your mom's cooking, we've got answers that are bold,
                  clear, and a little bit fun; just like Spain Academy.
                </p>
              </div>
            </TextReveal>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-screen ">
          <div className="relative text-white h-[40rem] w-[60rem]">
            <motion.div
              whileHover={{ scale: 1.2, cursor: "pointer", zIndex: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                filter:
                  hoveredCard !== null && hoveredCard !== 0
                    ? "blur(4px)"
                    : "blur(0px)",
              }}
              className="bg-VividBlack w-[20rem] p-[2rem] rounded-[1.6rem] absolute left-[5%] top-[20%] z-10 shadow-2xl"
            >
              <h2 className="text-[1.5rem]">
                Will you help me get a job in Spain too?
              </h2>
              <p className="mt-[1rem] text-[1rem]">
                We'll teach you. We make learning Spanish easier than learning
                to parallel park. Plus, we'll show you how to order churros like
                a local. :)
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, cursor: "pointer", zIndex: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                filter:
                  hoveredCard !== null && hoveredCard !== 1
                    ? "blur(2px)"
                    : "blur(0px)",
              }}
              className="bg-[#F7F7F7] w-[20rem] p-[2rem] rounded-[1.6rem] absolute left-[65%] top-[15%] text-black z-10 shadow-2xl"
            >
              <h2 className="text-[1.5rem]">
                Will you help me get a job in Spain too?
              </h2>
              <p className="mt-[1rem] text-[1rem]">
                We'll teach you. We make learning Spanish easier than learning
                to parallel park. Plus, we'll show you how to order churros like
                a local. :)
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, cursor: "pointer", zIndex: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                filter:
                  hoveredCard !== null && hoveredCard !== 2
                    ? "blur(2px)"
                    : "blur(0px)",
              }}
              className="bg-VividGreen w-[20rem] p-[2rem] rounded-[1.6rem] absolute left-[50%] -translate-x-1/2 top-[10%] z-10 shadow-2xl"
            >
              <h2 className="text-[1.5rem]">
                Will you help me get a job in Spain too?
              </h2>
              <p className="mt-[1rem] text-[1rem]">
                We'll teach you. We make learning Spanish easier than learning
                to parallel park. Plus, we'll show you how to order churros like
                a local. :)
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, cursor: "pointer", zIndex: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                filter:
                  hoveredCard !== null && hoveredCard !== 3
                    ? "blur(2px)"
                    : "blur(0px)",
              }}
              className="bg-VividYellow w-[20rem] p-[2rem] rounded-[1.6rem] absolute left-[25%] top-[45%] z-10 shadow-2xl"
            >
              <h2 className="text-[1.5rem]">
                Will you help me get a job in Spain too?
              </h2>
              <p className="mt-[1rem] text-[1rem]">
                We'll teach you. We make learning Spanish easier than learning
                to parallel park. Plus, we'll show you how to order churros like
                a local. :)
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, cursor: "pointer", zIndex: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                filter:
                  hoveredCard !== null && hoveredCard !== 4
                    ? "blur(2px)"
                    : "blur(0px)",
              }}
              className="bg-VividRed w-[20rem] p-[2rem] rounded-[1.6rem] absolute top-[40%] left-[55%] z-10 shadow-2xl"
            >
              <h2 className="text-[1.5rem]">
                Will you help me get a job in Spain too?
              </h2>
              <p className="mt-[1rem] text-[1rem]">
                We'll teach you. We make learning Spanish easier than learning
                to parallel park. Plus, we'll show you how to order churros like
                a local. :)
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="sticky -z-20 bottom-0 left-0 w-full h-[50vh] bg-VividYellow flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-[#ff5941]">
          <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Docs</li>
              <li className="hover:underline cursor-pointer">Comps</li>
            </ul>
            <ul>
              <li className="hover:underline cursor-pointer">Github</li>
              <li className="hover:underline cursor-pointer">Instagram</li>
              <li className="hover:underline cursor-pointer">X (Twitter)</li>
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0  translate-y-1/3 sm:text-[192px]  text-[80px] text-[#ff5941] font-calendas">
            Spain Academy
          </h2>
        </div>
      </div>
    </>
  );
}
