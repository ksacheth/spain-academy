// import Image from "next/image";

// export default function  Header(){

//     return <div className="flex items-center justify-between px-20 mt-7">
//         <div>
//             <img src="/logo.png" alt="Logo" width={150} />
//         </div>
//         <div className="flex gap-44 text-lg font-medium">
//             <a href="/">Home</a>
//             <a href="/about">About</a>
//             <a href="/contact">Contact</a>
//         </div>
//         <div>
//             <Button />
//         </div>
//     </div>
// }
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons, a popular choice
import Button from "./Button";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <div>
          <img src="/logo.png" alt="Logo" width={150} />
        </div>

        <div className="hidden md:flex items-center gap-30 text-lg font-medium">
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

        <div className="hidden md:block">
          <Button>Book</Button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - shown/hidden based on state
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center gap-6 py-8">
            <a href="/" className="text-lg font-medium hover:text-blue-500">
              Home
            </a>
            <a
              href="/about"
              className="text-lg font-medium hover:text-blue-500"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-lg font-medium hover:text-blue-500"
            >
              Contact
            </a>
            <Button />
          </div>
        </div>
      )} */}
    </nav>
  );
}
