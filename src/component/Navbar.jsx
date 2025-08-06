import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Name */}
        <span className="text-2xl font-black text-neutral-900 tracking-widest select-none font-[Dancing_Script]">
          Architect's Diary
        </span>
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          <a
            href="/"
            className="relative text-neutral-700 font-semibold px-2 py-1 transition-colors hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-neutral-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left font-[Dancing_Script]"
          >
            Home
          </a>
          <a
            href="/Diary"
            className="relative text-neutral-700 font-semibold px-2 py-1 transition-colors hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-neutral-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left font-[Dancing_Script]"
          >
            Projects
          </a>
          <a
            href="/blog"
            className="relative text-neutral-700 font-semibold px-2 py-1 transition-colors hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-neutral-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left font-[Dancing_Script]"
          >
            Blog
          </a>
          <a
            href="/footer"
            className="relative text-neutral-700 font-semibold px-2 py-1 transition-colors hover:text-neutral-900 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-neutral-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left font-[Dancing_Script]"
          >
            Contact
          </a>
          <a
            href="/about"
            className="relative text-neutral-700 font-semibold px-2 py-1 transition-colors hover:text-neutral-900"
          >
            About
          </a>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-neutral-700 hover:text-neutral-900 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Navigation Links */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <a
            href="/App"
            className="block py-2 text-neutral-700 font-semibold font-[Dancing_Script]"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 text-neutral-700 font-semibold font-[Dancing_Script]"
          >
            Projects
          </a>
          <a
            href="#"
            className="block py-2 text-neutral-700 font-semibold font-[Dancing_Script]"
          >
            Blog
          </a>
          <a
            href="/footer"
            className="block py-2 text-neutral-700 font-semibold font-[Dancing_Script]"
          >
            Contact
          </a>
          <a
            href="/about"
            className="block py-2 text-neutral-700 font-semibold font-[Dancing_Script]"
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
}