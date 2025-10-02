"use client";
import Button from "./Button";
import TextReveal from "../templates/TextReveal";
import { motion } from "motion/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const [hovered, setHovered] = useState(null);
  return (
    <div className="relative flex flex-col sm:flex-row  sm:h-[clamp(400px,48vw,1000px)] text-black bg-white  z-10">
      {/* Text Section */}
      <div className="flex flex-col w-[45.8%] shrink-0 items-center justify-center bg-white  relative">
        <div className="absolute  max-w-[943.8464px]">
          <div className="font-serif leading-[1.25] tracking-[-0.045em] 2xl:text-[5rem] xl:text-[4rem] lg:text-[3.2rem] md:text-[2.5rem] text-VividGreen">
            <TextReveal delay={0}>
              <h1 className="">
                <span className="block">The only Study-in-</span>{" "}
                <span className="block">
                  <span className="italic">Spain</span> program for
                </span>{" "}
                Southeast <span className="italic">Asians</span>
              </h1>
            </TextReveal>
          </div>
          <TextReveal delay={0.5}>
            <div className="mt-4 font-sans-alt leading-[1.25] tracking-[-0.035em] text-black 2xl:text-[1.55rem] xl:text-[1.25rem] lg:text-[1rem] md:text-[0.8rem] ">
              <span className="block">
                Any questions big or small, We are here to listen, support,
              </span>{" "}
              and guide. So, what are you{" "}
              <span className="text-VividGreen italic">waiting</span> for?"
            </div>
          </TextReveal>
          <motion.div
            whileHover={{ scale: 1.1, cursor: "pointer" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="ml-5 mt-[2rem] w-fit"
          >
            <Button scaleV={55} backgroundColor="var(--color-VividGreen)">
              Book a Consultation
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Images Section */}
      <div className="h-[50vw] sm:h-auto sm:grow overflow-visible bg-white">
        <div className="mx-auto my-auto max-w-[1214px] sm:w-full h-full relative  ">
          <motion.span
            className="absolute bottom-0 z-10 w-[30vw] sm:w-[clamp(100px,20vw,448px)]"
            whileHover={{ scale: 1.08, cursor: "pointer", zIndex: 21 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              filter:
                hovered !== null && hovered !== 0 ? "blur(1px)" : "blur(0px)",
            }}
          >
            <img src="Person1.webp" alt="Hero Image" className="w-full" />
          </motion.span>

          <motion.span
            className="absolute bottom-0 left-[35%] z-20 w-[35vw] sm:w-[clamp(100px,27vw,604.8px)]"
            whileHover={{ scale: 1.08, cursor: "pointer", zIndex: 21 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              filter:
                hovered !== null && hovered !== 1 ? "blur(1px)" : "blur(0px)",
            }}
          >
            <img src="Person2.webp" alt="Hero Image" className="w-full" />
          </motion.span>

          <motion.span
            className="absolute bottom-0 left-[75%] z-10 w-[30vw] sm:w-[clamp(100px,23vw,515.2px)]"
            whileHover={{ scale: 1.08, cursor: "pointer", zIndex: 21 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              filter:
                hovered !== null && hovered !== 2 ? "blur(1px)" : "blur(0px)",
            }}
          >
            <img src="Person3.webp" alt="Hero Image" className="w-full" />
          </motion.span>
        </div>
      </div>
    </div>
  );
}
