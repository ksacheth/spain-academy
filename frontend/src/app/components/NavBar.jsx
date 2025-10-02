"use client";
import { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import CenterUnderline from "../templates/underline-center";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-white text-black z-10">
      <div className="mx-12 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-10">
        <div>
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[clamp(100px,10vw,200px)] "
          />
        </div>

        <div className="hidden md:flex items-center justify-between text-lg font-medium w-[50%]">
          <a href="/"><CenterUnderline>The Team</CenterUnderline></a>
          <a href="/about">
            <CenterUnderline>Blog</CenterUnderline>
          </a>
          <a href="#contact">
            <CenterUnderline>SA.TV</CenterUnderline>
          </a>
          <a href="#contact">
            <CenterUnderline>Contact</CenterUnderline>
          </a>
        </div>

        <motion.div
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="hidden md:block"
        >
          <Button scaleV={25} backgroundColor="var(--color-VividGreen)">
            Book
          </Button>
        </motion.div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
          <div className="flex flex-col items-center space-y-6 py-6 text-lg font-medium">
            <a href="/" className="hover:text-blue-500" onClick={toggleMenu}>
              Home
            </a>
            <a
              href="/about"
              className="hover:text-blue-500"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-blue-500"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button>Book</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
