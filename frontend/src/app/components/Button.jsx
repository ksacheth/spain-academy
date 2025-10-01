"use client";
import { motion } from "motion/react";

export default function Button({ scaleV, backgroundColor, children }) {
  const bgColor = backgroundColor;
  const scaleValue = scaleV;
  return (
    <motion.button
      className="relative flex items-center gap-[15px] cursor-pointer bg-[#f9f9f9] rounded-full px-[30px] py-[10px] overflow-hidden"
      whileHover="hover"
      initial="initial"
      onClick={() => window.open("https://cal.com/sacheth/30min", "_blank")}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-black z-0"
        variants={{
          initial: { scale: 1 },
          hover: {
            scale: scaleValue,
            backgroundColor: bgColor,
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ backgroundColor: "black" }}
      />

      <motion.p
        className="m-0 text-lg z-10"
        variants={{
          initial: { x: 0, color: "#000" },
          hover: { x: -25, color: "#fff" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.p>

      <motion.div
        className="absolute left-full z-10 top-4"
        variants={{
          initial: { x: 0 },
          hover: { x: -45 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z"
            fill="white"
          />
        </svg>
      </motion.div>
    </motion.button>
  );
}
