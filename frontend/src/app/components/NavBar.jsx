"use client";
import { useState } from "react";
import Button from "./Button";
import { motion } from "motion/react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-white text-black">
      <div className="mx-12 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-10">
        <div>
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[clamp(100px,10vw,200px)] "
          />
        </div>

        <div className="flex items-center justify-between text-lg font-medium w-[50%]">
          <a href="/" className="hover:text-blue-500">
            The Team
          </a>
          <a href="/about" className="hover:text-blue-500">
            Blog
          </a>
          <a href="#contact" className="hover:text-blue-500">
            SA.TV
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>

        <motion.div
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="block"
        >
          <Button scaleV={25} backgroundColor="var(--color-VividGreen)">
            Book
          </Button>
        </motion.div>
      </div>
    </nav>
  );
}
