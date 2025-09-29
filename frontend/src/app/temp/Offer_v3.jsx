"use client";
import { motion } from "motion/react";

const cardVariants = {
  initial: { rotate: 2, y: 20 },
  hover: {
    rotate: 0,
    y: 0,
    transition: { type: "ease", stiffness: 320, damping: 24 },
  },
};

const shadowVariants = {
  initial: { rotate: 0, x: 0, y: 8 },
  hover: {
    rotate: 0,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const revealVariants = {
  initial: { height: 0, opacity: 0, y: 8 },
  hover: {
    height: "auto",
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, opacity: { duration: 0.25 } },
  },
};

export default function Offer() {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="flex justify-center font-arimo font-bold text-[3.5rem] leading-[1.14] tracking-[-0.045em] mt-[12rem]">
        What We
        <span className="text-VividGreen italic font-noto-serif font-semibold">
          &nbsp;Offer
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-col justify-center mt-[3rem] items-center gap-10 mb-[10rem]">
        {/* Red card */}
        <motion.div
          initial="initial"
          whileHover="hover"
          className="relative w-[30rem] flex flex-col"
        >
          {/* shadow */}
          <motion.div
            variants={shadowVariants}
            className="absolute inset-0 rounded-2xl bg-[#EBC6C5]"
          />
          {/* main */}
          <motion.div
            variants={cardVariants}
            className="relative flex-col justify-between items-start rounded-2xl bg-VividRed px-6 py-5 text-white w-full shadow-lg"
          >
            <div className="min-w-0">
              <h2 className="text-lg font-bold">The Essentials</h2>
              <p className="text-sm mt-1">
                Language, University &amp; Visa — visas, housing, insurance, and
                everything that gets you here.
              </p>
            </div>

            <motion.div variants={revealVariants} className="overflow-hidden">
              <div className="mt-5 text-[15px] leading-6">
                <p className="mb-3 font-medium">
                  We help you build the foundation for your life in Spain
                  through three essential services:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    <span className="font-semibold">Language School:</span>{" "}
                    Intensive Spanish programs for academic, social, and
                    everyday life.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold">
                      Academic Counseling (Entry &amp; University Admissions):
                    </span>{" "}
                    Pick the right pathway, prep applications, and secure
                    admission.
                  </li>
                  <li className="list-disc">
                    <span className="font-semibold">Visa Processing:</span> Full
                    support for student visa, residence permit renewals, and
                    university documentation.
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Yellow card */}
        <motion.div
          initial="initial"
          whileHover="hover"
          className="relative w-[32rem] flex flex-col text-white"
        >
          <motion.div
            variants={shadowVariants}
            className="absolute inset-0 translate-x-4 rounded-2xl bg-[#FEE5B0]"
          />
          <motion.div
            variants={{
              initial: { rotate: -3 },
              hover: {
                rotate: 0,
                transition: { type: "spring", stiffness: 320, damping: 24 },
              },
            }}
            className="relative flex-col items-start justify-between rounded-2xl bg-VividYellow px-6 py-5 shadow-lg"
          >
            <div>
              <h2 className="text-lg font-bold">The Boosters</h2>
              <p className="text-sm mt-1">
                What takes you from surviving to thriving (mentorship,
                simulations, and real-world prep)
              </p>
            </div>

            <motion.div variants={revealVariants} className="overflow-hidden">
              <div className="mt-5 text-[15px] leading-6">
                <p className="mb-3 font-medium">
                  At Spain Academy, we don’t stop at the basics. We provide
                  practical guidance to help you thrive beyond the classroom:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Practical simulations to help you navigate daily life—making
                    appointments, handling paperwork, finding accommodation,
                    visiting the doctor, and more.
                  </li>
                  <li className="list-disc">
                    24/7 guidance and support for administrative processes,
                    housing, visa matters, and healthcare.
                  </li>
                  <li className="list-disc">
                    Food and health advice to help you settle into your new
                    environment with confidence.
                  </li>
                  <li className="list-disc">
                    Entrepreneurship support and guidance for those interested
                    in innovation, business, and startup opportunities in Spain.
                  </li>
                  <li className="list-disc">
                    First week orientation: city tour, mobile data, transport
                    cards, banking, safety tips.
                  </li>
                  <li className="list-disc">
                    Food and health advice to help you settle into your new
                    environment with confidence.
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Green card */}
        <motion.div
          initial="initial"
          whileHover="hover"
          className="relative w-[25rem] flex flex-col text-white"
        >
          <motion.div
            variants={{
              initial: { rotate: -3, x: -8 },
              hover: {
                rotate: 0,
                x: 0,
                transition: { type: "spring", stiffness: 300, damping: 28 },
              },
            }}
            className="absolute inset-0 rounded-2xl bg-[#B5DCBB]"
          />
          <motion.div
            variants={cardVariants}
            className="relative flex-col items-start justify-between rounded-2xl bg-VividGreen px-6 py-5 shadow-lg"
          >
            <div>
              <h2 className="text-lg font-bold">Future-Proof Tools</h2>
              <p className="text-sm mt-1 pb-[1rem]">
                Career &amp; Future Planning
              </p>
            </div>

            <motion.div variants={revealVariants} className="overflow-hidden">
              <div className="mt-5 text-[15px] leading-6">
                <p className="mb-3 font-medium">
                  We help you build not only your academic life but also your
                  professional future:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Career seminars featuring professors, industry
                    professionals, and alumni sharing insights and advice.
                  </li>
                  <li className="list-disc">
                    Workshops on networking, personal branding, and how to stand
                    out in Spain’s job market.
                  </li>
                  <li className="list-disc">
                    Guidance for finding internships, part-time work, and
                    post-study career opportunities.
                  </li>
                  <li className="list-disc">
                    Support for navigating post-study work visas and accessing
                    alumni career networks.
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Black card */}
        <motion.div
          initial="initial"
          whileHover="hover"
          className="relative w-[25rem] -mt-8 flex flex-col text-white"
        >
          <motion.div
            variants={{
              initial: { x: 12, y: 8 },
              hover: {
                x: 0,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 28 },
              },
            }}
            className="absolute inset-0 rounded-2xl bg-[#B2B2B2]"
          />
          <motion.div
            variants={{
              initial: { rotate: -3 },
              hover: {
                rotate: 0,
                transition: { type: "spring", stiffness: 320, damping: 24 },
              },
            }}
            className="relative flex-col items-start justify-between rounded-2xl bg-VividBlack px-6 py-5 shadow-lg"
          >
            <div>
              <h2 className="text-lg font-bold">Real Life in Spain</h2>
              <p className="text-sm mt-1 pb-[1rem]">
                Cultural Integration &amp; Local Experiences
              </p>
            </div>

            <motion.div variants={revealVariants} className="overflow-hidden">
              <div className="mt-5 text-[15px] leading-6">
                <p className="mb-3 font-medium">
                  We make sure you don’t just study in Spain—you live it fully:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Language exchange meetups and social events with local
                    students.
                  </li>
                  <li className="list-disc">
                    Cultural tours, festivals, and activities to immerse
                    yourself in Spanish life.
                  </li>
                  <li className="list-disc">
                    Orientation sessions and city tours to help you settle in
                    and explore your new surroundings.
                  </li>
                </ul>
              </div>
              <div className="h-3" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
