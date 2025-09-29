"use client";
import TextReveal from "../templates/TextReveal";
import Button from "./Button";
import { motion } from "motion/react";

export function Spain() {
  return (
    <div className="">
      <TextReveal>
        <div className="flex justify-center ">
          <h1 className="text-[3.5rem] font-bold text-black font-arimo">
            Why{" "}
            <span className="text-VividYellow italic font-semibold font-noto-serif">
              Spain?
            </span>
          </h1>
        </div>
      </TextReveal>
      {/* Cards Container */}
      <div className=" flex flex-col justify-center mt-[3rem] items-center gap-10 mb-[5rem]">
        {/* Red card - expandable */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0 }} // Change delay for each card
          className="relative w-[30rem] flex flex-col group"
        >
          {/* Background shadow layer */}
          <div
            className="absolute inset-0 rounded-2xl bg-[#EBC6C5] translate-y-2
          group-hover:rotate-0 group-focus-within:rotate-0"
          />

          {/* Main card */}
          <div
            className="relative flex-col justify-between items-start rounded-2xl bg-VividRed px-6 py-5 text-white w-full rotate-[2deg] translate-y-5 shadow-lg transition-all duration-400 ease-in-out
          group-hover:rotate-0 group-focus-within:rotate-0"
          >
            {/* header */}
            <div className="min-w-0">
              <h2 className="text-lg font-bold">
                World-Class Education Starting from Just €700 a Year
              </h2>
            </div>
            {/* expandable content */}
            <div
              className="
                    pointer-events-none
                    max-h-0 opacity-0 translate-y-2
                    transition-all duration-400 ease-in-out
                    group-hover:max-h-[520px] group-hover:opacity-100 group-hover:translate-y-0
                    group-focus-within:max-h-[520px] group-focus-within:opacity-100 group-focus-within:translate-y-0
                  "
            >
              <div className="mt-5 text-[15px] leading-6 ">
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Internationally recognized degrees across Europe and beyond
                  </li>
                  <li className="list-disc">
                    99% tuition waiver in Andalusia; once you pass each credit,
                    nearly the full cost of future credits is covered
                  </li>
                  <li className="list-disc">
                    Mobility programs: Erasmus+ and SICUE
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Yellow card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0 }} // Change delay for each card
          className="relative w-[25rem] flex flex-col group text-white"
        >
          {/* Background shadow layer */}
          <div className="absolute inset-0  translate-x-4 rounded-2xl bg-[#FEE5B0] group-hover:rotate-0 group-focus-within:rotate-0" />

          {/* Main card */}
          <div
            className="relative flex-col items-start  justify-between rounded-2xl bg-VividYellow px-6 py-5   rotate-[-3deg] shadow-lg transition-all duration-400 ease-in-out
              group-hover:rotate-0 group-focus-within:rotate-0"
          >
            <div>
              <h2 className="text-lg font-bold">Real life & career</h2>
            </div>
            <div
              className="
                    pointer-events-none
                    max-h-0 opacity-0 translate-y-2
                    transition-all duration-400 ease-in-out
                    group-hover:max-h-[520px] group-hover:opacity-100 group-hover:translate-y-0
                    group-focus-within:max-h-[520px] group-focus-within:opacity-100 group-focus-within:translate-y-0
                  "
            >
              <div className="mt-5 text-[15px] leading-6 ">
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Part-time work during studies and post-study work visa
                    routes available.
                  </li>
                  <li className="list-disc">
                    Startup hubs and access to EU innovation programs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Green card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0 }} // Change delay for each card
          className="relative w-[25rem] flex flex-col group text-white"
        >
          {/* Background shadow layer */}
          <div className="absolute inset-0  rounded-2xl -translate-x-2 bg-[#B5DCBB] rotate-[-3deg] transition-all duration-400 ease-in-out group-hover:rotate-0 group-focus-within:rotate-0"></div>

          {/* Main card */}
          <div
            className="relative flex-col items-start justify-between rounded-2xl bg-VividGreen px-6 py-5  rotate-[2deg] shadow-lg transition-all duration-400 ease-in-out
          group-hover:rotate-0 group-focus-within:rotate-0"
          >
            <div>
              <h2 className="text-lg font-bold">Lifestyle & culture</h2>
            </div>
            <div
              className="
                    pointer-events-none
                    max-h-0 opacity-0 translate-y-2
                    transition-all duration-500 ease-in-out
                    group-hover:max-h-[520px] group-hover:opacity-100 group-hover:translate-y-0
                    group-focus-within:max-h-[520px] group-focus-within:opacity-100 group-focus-within:translate-y-0

                  "
            >
              <div className="mt-5 text-[15px] leading-6 ">
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Mediterranean climate, excellent healthcare, and affordable
                    living.
                  </li>
                  <li className="list-disc">
                    Travel easily to 20+ EU countries; festivals, food, and
                    music—life you’ll actually enjoy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center mt-[1rem]">
        <h2 className="text-[1.25rem] text-black font-arimo">
          Still not sure about Spain?{" "}
          <span className="text-VividYellow italic font-semibold font-noto-serif">
            Book a free 15min call
          </span>
        </h2>
        <motion.div
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="mt-[2rem]"
        >
          <Button scaleV={55} backgroundColor="var(--color-VividYellow)">
            Is Spain right for me?
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
