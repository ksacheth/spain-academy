// src/components/Offer.jsx
"use client";
import { motion } from "framer-motion";

// Define animation variants for the expandable content
const contentVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: 10, // Move it down slightly when hidden
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    height: "auto", // Animate to the content's natural height
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function Offer_v5() {
  return (
    <div className="w-full">
      <div className="flex justify-center font-arimo font-bold text-[3.5rem] leading-[1.14] tracking-[-0.045em] mt-[12rem]">
        What We
        <span className="text-VividGreen italic font-noto-serif font-semibold">
          {" "}
          &nbsp;Offer
        </span>
      </div>
      {/* Cards Container */}
      <div className=" flex flex-col justify-center mt-[3rem] items-center gap-10 mb-[10rem]">
        {/* Red card - expandable */}
        <motion.div
          className="relative w-[30rem] flex flex-col"
          initial="hidden"
          whileHover="visible"
        >
          {/* Background shadow layer */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-[#EBC6C5]"
            initial={{ y: 8 }}
            whileHover={{ rotate: 0 }}
          />
          {/* Main card */}
          <motion.div
            className="relative flex-col justify-between items-start rounded-2xl bg-VividRed px-6 py-5 text-white w-full shadow-lg"
            initial={{ rotate: 2, y: 20 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* header */}
            <div className="min-w-0">
              <h2 className="text-lg font-bold">The Essentials</h2>
              <p className="text-sm mt-1">
                Language, University &amp; Visa — visas, housing, insurance, and
                everything that gets you here.
              </p>
            </div>
            {/* expandable content */}
            <motion.div variants={contentVariants} className="overflow-hidden">
              <div className="mt-5 text-[15px] leading-6 ">
                <p className="mb-3 font-medium ">
                  We help you build the foundation for your life in Spain
                  through three essential services:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    <span className="font-semibold ">Language School:</span>{" "}
                    Intensive Spanish programs for academic, social, and
                    everyday life.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold ">
                      Academic Counseling (Entry &amp; University Admissions):
                    </span>{" "}
                    Pick the right pathway, prep applications, and secure
                    admission.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold ">Visa Processing:</span>{" "}
                    Full support for student visa, residence permit renewals,
                    and university documentation.
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Yellow card */}
        <motion.div
          className="relative w-[32rem] flex flex-col text-white"
          initial="hidden"
          whileHover="visible"
        >
          {/* Background shadow layer */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-[#FEE5B0]"
            initial={{ x: 16 }}
            whileHover={{ rotate: 0 }}
          />
          {/* Main card */}
          <motion.div
            className="relative flex-col items-start justify-between rounded-2xl bg-VividYellow px-6 py-5 shadow-lg"
            initial={{ rotate: -3 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div>
              <h2 className="text-lg font-bold">The Boosters</h2>
              <p className="text-sm mt-1 ">
                What takes you from surviving to thriving (mentorship,
                simulations, and real-world prep )
              </p>
            </div>
            <motion.div variants={contentVariants} className="overflow-hidden">
              <div className="mt-5 text-[15px] leading-6 ">
                <p className="mb-3 font-medium ">
                  At Spain Academy, we don’t stop at the basics. We provide
                  practical guidance to help you thrive beyond the classroom:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Practical simulations to help you navigate daily
                    life—making appointments, handling paperwork, finding
                    accommodation, visiting the doctor, and more.
                  </li>
                  {/* ... other list items */}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Green card */}
        <motion.div
          className="relative w-[25rem] flex flex-col text-white"
          initial="hidden"
          whileHover="visible"
        >
          {/* Background shadow layer */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-[#B5DCBB]"
            initial={{ rotate: -3, x: -8 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          {/* Main card */}
          <motion.div
            className="relative flex-col items-start justify-between rounded-2xl bg-VividGreen px-6 py-5 shadow-lg"
            initial={{ rotate: 2 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div>
              <h2 className="text-lg font-bold">Future-Proof Tools</h2>
              <p className="text-sm mt-1 pb-[1rem]">Career & Future Planning</p>
            </div>
            <motion.div variants={contentVariants} className="overflow-hidden">
              <div className="mt-5 text-[15px] leading-6 ">
                <p className="mb-3 font-medium">
                  We help you build not only your academic life but also your
                  professional future:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Career seminars featuring professors, industry
                    professionals, and alumni sharing insights and advice.
                  </li>
                   {/* ... other list items */}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Black card */}
        <motion.div
          className="relative w-[25rem] -mt-8 flex flex-col text-white"
          initial="hidden"
          whileHover="visible"
        >
          {/* Background shadow layer */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-[#B2B2B2]"
            initial={{ x: 12, y: 8 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          {/* Main card */}
          <motion.div
            className="relative flex-col items-start justify-between rounded-2xl bg-VividBlack px-6 py-5 shadow-lg"
            initial={{ rotate: -3 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div>
              <h2 className="text-lg font-bold">Real Life in Spain</h2>
              <p className="text-sm mt-1 pb-[1rem]">
                Cultural Integration & Local Experiences
              </p>
            </div>
            <motion.div variants={contentVariants} className="overflow-hidden">
              <div className="mt-5 text-[15px] leading-6 ">
                <p className="mb-3 font-medium ">
                  We make sure you don’t just study in Spain—you live it fully:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Language exchange meetups and social events with local
                    students.
                  </li>
                  {/* ... other list items */}
                </ul>
              </div>
              {/* bottom spacing so the reveal has room */}
              <div className="h-3" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}