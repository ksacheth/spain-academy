"use client";
import TextReveal from "../templates/TextReveal";
import { motion } from "motion/react";

export default function Hero2() {
  return (
    <div className=" relative z-10 bg-transparent">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 850 120"
        className="-mt-[10vw]"
        aria-hidden="true"
      >
        <path
          className="fill-[#F9F9F9]"
          d="M850,43.5v157.5H0v-112c1.1.13,1.36-.69,1.91-1.34,1.3-1.51,2.34-3.36,3.58-4.92,27.33-34.31,60.77-56.09,106.27-51.26,44.73,4.76,82.96,29.63,118.25,55.75,14.12,8.66,28.34,12.21,44.47,10.53,18.99-1.99,29.19-10.13,45.67-18.36,49.29-24.62,97.84-38.22,153.08-40.42,6.89-.27,13.92.21,20.5.54,31.59,1.59,60.34,7.22,90.13,17.87,20.06,7.17,39.96,17.8,61.41,20.09,31.88,3.41,55.11-9.89,83.59-19.88,14.02-4.92,28.2-9.09,42.3-12.7s27.89-6.65,42.11-7.38c9.06-.47,20.49-.27,29.25,2.71,2.58.88,4.86,2.5,7.48,3.27Z"
        />
      </svg>

      {/* Hero */}
      <div className="bg-[#F9F9F9] rounded-b-[70px] flex h-full ">
        {/* LEFT: text */}
        <div className="flex w-[65vw] justify-center mb-[8rem]">
          <div className="flex flex-col gap-[4rem]">
            {/* Logot */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Spain Academy"
                className="w-[12rem] md:w-[7rem] lg:w-[9rem] xl:w-[11rem] 2xl:w-[14rem]"
              />
            </div>
            <div className="text-[2.5rem] md:text-[1.6rem] lg:text-[2rem] xl:text-[2.4rem] 2xl:text-[2.9rem]">
              <TextReveal>
                <div className="font-serif leading-[1.23] tracking-[-0.065em] text-black">
                  <span className="block">
                    <span className="text-VividGreen italic">Spain Academy </span>is your all-in-one
                  </span>
                  onboarding kit for life in <span className="italic"> Spain</span>.
                </div>
              </TextReveal>

              <TextReveal>
                <div className="mt-[2rem] font-serif  leading-[1.23] tracking-[-0.065em] text-black">
                  <span className="text-[#959595] block">
                    From <span className="italic">visas</span> and
                    <span className="italic"> university admissions</span>
                  </span>
                  <span className="text-[#5A5A5A] block">
                    to <span className="italic">cultural immersion</span> and
                    <span className="italic"> community</span>
                  </span>
                  <span className="text-[#3C3C3C] block">
                    <span className="italic">support,</span> we make sure you
                    arrive
                  </span>
                  <span className="block">
                    prepared, feel at home, and have
                  </span>
                  <span className="block">
                    everything you need to
                    <span className="text-VividGreen italic"> thrive</span>.
                  </span>
                </div>
              </TextReveal>
            </div>
          </div>
        </div>

        {/* RIGHT: images */}
        <div className="relative overflow-visible w-[35vw]">
          <motion.img
            src="/green.webp"
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-0  -rotate-18 w-[12rem] md:w-[8rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[15rem]"
            aria-hidden="true"
          />
          <motion.img
            src="/yellow.webp"
            alt=""
            className="absolute top-0 -translate-y-2/5 left-full -translate-x-4/5  rotate-18 w-[12rem] md:w-[8rem] lg:w-[10rem] xl:w-[12rem] 2xl:w-[15rem]"
            aria-hidden="true"
          />
          <motion.img
            src="/red.webp"
            alt=""
            className="absolute bottom-0 left-full -translate-x-1/2  w-[14rem] md:w-[10rem] lg:w-[12rem] xl:w-[14rem] 2xl:w-[17rem]"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
