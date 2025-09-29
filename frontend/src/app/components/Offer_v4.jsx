"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Offer_v4() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: "red",
      width: "w-[30rem]",
      mainBg: "bg-[#A9161C]",
      shadowBg: "bg-[#EBC6C5]",
      mainRotate: 2,
      shadowTranslate: { x: 0, y: 8 },
      title: "The Essentials",
      subtitle:
        "Language, University & Visa — visas, housing, insurance, and everything that gets you here.",
      content: {
        intro:
          "We help you build the foundation for your life in Spain through three essential services:",
        items: [
          {
            label: "Language School:",
            text: "Intensive Spanish programs for academic, social, and everyday life.",
          },
          {
            label: "Academic Counseling (Entry & University Admissions):",
            text: "Pick the right pathway, prep applications, and secure admission.",
          },
          {
            label: "Visa Processing:",
            text: "Full support for student visa, residence permit renewals, and university documentation.",
          },
        ],
      },
    },
    {
      id: "yellow",
      width: "w-[32rem]",
      mainBg: "bg-[#FCBE07]",
      shadowBg: "bg-[#FEE5B0]",
      mainRotate: -3,
      shadowTranslate: { x: 16, y: 0 },
      title: "The Boosters",
      subtitle:
        "What takes you from surviving to thriving (mentorship, simulations, and real-world prep )",
      content: {
        intro:
          "At Spain Academy, we don't stop at the basics. We provide practical guidance to help you thrive beyond the classroom:",
        items: [
          {
            text: "Practical simulations to help you navigate daily life—making appointments, handling paperwork, finding accommodation, visiting the doctor, and more.",
          },
          {
            text: "24/7 guidance and support for administrative processes, housing, visa matters, and healthcare.",
          },
          {
            text: "Food and health advice to help you settle into your new environment with confidence.",
          },
          {
            text: "Entrepreneurship support and guidance for those interested in innovation, business, and startup opportunities in Spain.",
          },
          {
            text: "First week orientation: city tour, mobile data, transport cards, banking, safety tips.",
          },
          {
            text: "Food and health advice to help you settle into your new environment with confidence.",
          },
        ],
      },
    },
    {
      id: "green",
      width: "w-[25rem]",
      mainBg: "bg-[#049838]",
      shadowBg: "bg-[#B5DCBB]",
      mainRotate: 2,
      shadowTranslate: { x: -8, y: 0 },
      shadowRotate: -3,
      title: "Future-Proof Tools",
      subtitle: "Career & Future Planning",
      content: {
        intro:
          "We help you build not only your academic life but also your professional future:",
        items: [
          {
            text: "Career seminars featuring professors, industry professionals, and alumni sharing insights and advice.",
          },
          {
            text: "Workshops on networking, personal branding, and how to stand out in Spain's job market.",
          },
          {
            text: "Guidance for finding internships, part-time work, and post-study career opportunities.",
          },
          {
            text: "Support for navigating post-study work visas and accessing alumni career networks.",
          },
        ],
      },
    },
    {
      id: "black",
      width: "w-[25rem]",
      mainBg: "bg-[#2A2A2A]",
      shadowBg: "bg-[#B2B2B2]",
      mainRotate: -3,
      shadowTranslate: { x: 12, y: 8 },
      marginTop: "-mt-8",
      title: "Real Life in Spain",
      subtitle: "Cultural Integration & Local Experiences",
      content: {
        intro: "We make sure you don't just study in Spain—you live it fully:",
        items: [
          {
            text: "Language exchange meetups and social events with local students.",
          },
          {
            text: "Cultural tours, festivals, and activities to immerse yourself in Spanish life.",
          },
          {
            text: "Orientation sessions and city tours to help you settle in and explore your new surroundings.",
          },
        ],
      },
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-center font-bold text-[3.5rem] leading-[1.14] tracking-[-0.045em] mt-[12rem]">
        What We
        <span className="text-[#049838] italic font-semibold">
          {" "}
          &nbsp;Offer
        </span>
      </div>

      <div className="flex flex-col justify-center mt-[3rem] items-center gap-10 mb-[10rem]">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative ${card.width} flex flex-col ${
              card.marginTop || ""
            }`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.div
              className={`absolute inset-0 rounded-2xl ${card.shadowBg}`}
              initial={{
                x: card.shadowTranslate.x,
                y: card.shadowTranslate.y,
                rotate: card.shadowRotate || 0,
              }}
              animate={{
                rotate: hoveredCard === card.id ? 0 : card.shadowRotate || 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            <motion.div
              className={`relative flex-col items-start rounded-2xl ${card.mainBg} px-6 py-5 text-white shadow-lg`}
              initial={{ rotate: card.mainRotate }}
              animate={{
                rotate: hoveredCard === card.id ? 0 : card.mainRotate,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="min-w-0">
                <h2 className="text-lg font-bold">{card.title}</h2>
                <p className="text-sm mt-1 pb-[1rem]">{card.subtitle}</p>
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0, y: 8 }}
                animate={{
                  height: hoveredCard === card.id ? "auto" : 0,
                  opacity: hoveredCard === card.id ? 1 : 0,
                  y: hoveredCard === card.id ? 0 : 8,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="mt-5 text-[15px] leading-6">
                  <p className="mb-3 font-medium">{card.content.intro}</p>
                  <ul className="space-y-3 pl-5">
                    {card.content.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="list-disc"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: hoveredCard === card.id ? 1 : 0,
                          x: hoveredCard === card.id ? 0 : -10,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: hoveredCard === card.id ? idx * 0.05 : 0,
                        }}
                      >
                        {item.label && (
                          <span className="font-semibold">{item.label}</span>
                        )}{" "}
                        {item.text}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="h-3" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
