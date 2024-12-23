"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Hustlr.</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="/pages/features" className="hover:text-blue-500 transition">
              Features
            </a>
          </li>
          <li>
            <a href="/pages/about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="/pages/contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col space-y-4 mt-4 bg-black md:hidden">
          <li>
            <a
              href="/pages/features"
              className="block text-center py-2 hover:bg-indigo-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/pages/about"
              className="block text-center py-2 hover:bg-indigo-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/pages/contact"
              className="block text-center py-2 hover:bg-indigo-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

