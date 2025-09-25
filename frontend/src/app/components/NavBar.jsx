"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons, a popular choice
import Button1 from "./Button1/Button1.jsx";
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
            Home
          </a>
          <a href="/about" className="hover:text-blue-500">
            About
          </a>
          <a href="/contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>

        <div className="block">
          <Button1>Book</Button1>
        </div>
      </div>
    </nav>
  );
}
