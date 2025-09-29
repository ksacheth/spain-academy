"use client";
import TextReveal from "../templates/TextReveal";
import { motion } from "motion/react";
export default function Offer() {
  return (
    <div className="w-full">
      <TextReveal>
        <div className="flex justify-center font-arimo font-bold text-[3.5rem] leading-[1.14] tracking-[-0.045em] mt-[12rem]">
          What We
          <span className="text-VividGreen italic font-noto-serif font-semibold">
            {" "}
            &nbsp;Offer
          </span>
        </div>
      </TextReveal>

      {/* Cards Container */}
      <div className=" flex flex-col justify-center mt-[3rem] items-center gap-10 mb-[10rem] text-white">
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
            className="relative flex-col justify-between items-start rounded-2xl bg-VividRed px-6 py-5  w-full rotate-[2deg] translate-y-5 shadow-lg transition-all duration-400 ease-in-out
          group-hover:rotate-0 group-focus-within:rotate-0"
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
            </div>
          </div>
        </motion.div>

        {/* Yellow card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0 }} // Change delay for each card
          className="relative w-[32rem] flex flex-col group"
        >
          {/* Background shadow layer */}
          <div className="absolute inset-0  translate-x-4 rounded-2xl bg-[#FEE5B0] group-hover:rotate-0 group-focus-within:rotate-0" />

          {/* Main card */}
          <div
            className="relative flex-col items-start  justify-between rounded-2xl bg-VividYellow px-6 py-5   rotate-[-3deg] shadow-lg transition-all duration-400 ease-in-out
              group-hover:rotate-0 group-focus-within:rotate-0"
          >
            <div>
              <h2 className="text-lg font-bold">The Boosters</h2>
              <p className="text-sm mt-1 ">
                What takes you from surviving to thriving (mentorship,
                simulations, and real-world prep )
              </p>
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
                <p className="mb-3 font-medium ">
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
            </div>
          </div>
        </motion.div>

        {/* Green card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0 }} // Change delay for each card
          className="relative w-[25rem] flex flex-col group"
        >
          {/* Background shadow layer */}
          <div className="absolute inset-0  rounded-2xl -translate-x-2 bg-[#B5DCBB] rotate-[-3deg] transition-all duration-400 ease-in-out group-hover:rotate-0 group-focus-within:rotate-0"></div>

          {/* Main card */}
          <div
            className="relative flex-col items-start justify-between rounded-2xl bg-VividGreen px-6 py-5  rotate-[2deg] shadow-lg transition-all duration-400 ease-in-out
          group-hover:rotate-0 group-focus-within:rotate-0"
          >
            <div>
              <h2 className="text-lg font-bold">Future-Proof Tools</h2>
              <p className="text-sm mt-1 pb-[1rem]">Career & Future Planning</p>
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
            </div>
          </div>
        </motion.div>

        {/* Black card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0 }} // Change delay for each card
          className="relative w-[25rem] -mt-8 flex flex-col group"
        >
          {/* Background shadow layer */}
          <div className="absolute inset-0  rounded-2xl translate-x-3 translate-y-2 bg-[#B2B2B2] transition-all duration-400 ease-in-out group-hover:rotate-0 group-focus-within:rotate-0"></div>

          {/* Main card */}
          <div
            className="relative flex-col items-start justify-between rounded-2xl bg-VividBlack px-6 py-5  -rotate-[3deg] shadow-lg transition-all duration-400 ease-in-out
          group-hover:rotate-0 group-focus-within:rotate-0"
          >
            <div>
              <h2 className="text-lg font-bold">Real Life in Spain</h2>
              <p className="text-sm mt-1  pb-[1rem]">
                Cultural Integration & Local Experiences
              </p>
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
                <p className="mb-3 font-medium ">
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
