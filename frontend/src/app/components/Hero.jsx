"use client";
import Button2 from "./Button2/Button2";
import TextReveal from "./TextReveal";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex h-[clamp(400px,48vw,1000px)] text-black mx-auto ">
      <div className="flex flex-col w-[45.8%] shrink-0 items-center justify-center bg-white  relative">
        <div className="absolute  max-w-[943.8464px]">
          <div className="font-serif leading-[1.25] tracking-[-0.045em] 2xl:text-[5rem] xl:text-[4rem] lg:text-[3.2rem] md:text-[2.5rem] text-VividGreen">
            <TextReveal delay={0.5}>
              <h1 className="">
                <span className="block">The only Study-in-</span>{" "}
                <span className="block">
                  <span className="italic">Spain</span> program for
                </span>{" "}
                Southeast <span className="italic">Asians</span>
              </h1>
            </TextReveal>
          </div>
          <TextReveal delay={1}>
            <div className="mt-4 font-sans-alt leading-[1.25] tracking-[-0.035em] text-black 2xl:text-[1.55rem] xl:text-[1.25rem] lg:text-[1rem] md:text-[0.8rem] ">
              <span className="block">
                Any questions big or small, We are here to listen, support,
              </span>{" "}
              and guide. So, what are you{" "}
              <span className="text-VividGreen italic">waiting</span> for?"
            </div>
          </TextReveal>

          <div className="block ml-5 mt-[2rem]">
            <Button2>Book a Consultation</Button2>
          </div>
        </div>
      </div>
      <div className="grow bg-transparent overflow-visible z-10 ">
        <div className="mx-auto my-auto  -4 max-w-[1214px] relative h-full ">
          <motion.div
            className="absolute bottom-0 z-15 w-[clamp(100px,20vw,448px)]"
            whileHover={{ scale: 1.08, cursor: "pointer", zIndex: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img src="Person1.webp" alt="Hero Image" className="w-full" />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-[35%] z-20 w-[clamp(100px,27vw,604.8px)]"
            whileHover={{ scale: 1.08, cursor: "pointer", zIndex: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img src="Person2.webp" alt="Hero Image" className="w-full" />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-[75%] z-15 w-[clamp(100px,23vw,515.2px)]"
            whileHover={{ scale: 1.08, cursor: "pointer", zIndex: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img src="Person3.webp" alt="Hero Image" className="w-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
