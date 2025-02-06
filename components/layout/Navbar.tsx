"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCarAlt } from "react-icons/fa";

const Navbar = () => {
  const [language, setLanguage] = useState<"EN" | "ID">("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => prev === "EN" ? "ID" : "EN");
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
                href="/" 
                className="flex items-center group"
              >
                <span className="text-3xl flex items-center font-bold text-secondary transition-colors">
                  C
                  <span className="inline-flex items-center mx-[-2px]">
                    <FaCarAlt className="w-7 h-7 transform group-hover:scale-110 transition-transform" />
                  </span>
                  r
                </span>
                <span className="text-3xl font-bold text-secondary transition-colors">Rent</span>
              </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/auth"
              className="px-4 py-2 rounded-full text-sm font-medium border-2 border-secondary text-secondary-text hover:text-primary-text bg-secondary hover:bg-primary transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:border-secondary"
            >
              Sign In
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-text transition-all duration-300 ease-in-out"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-4 h-4 mr-2"
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
              </svg>
              {language}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-foreground hover:bg-secondary/10 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          } md:hidden absolute left-0 right-0 bg-background/80 backdrop-blur-md border-b border-secondary/10 transition-all duration-300 ease-in-out`}
        >
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/auth"
              className="block w-full text-left px-4 py-2.5 rounded-full text-base font-medium border-2 border-secondary text-secondary-text bg-secondary hover:bg-primary hover:text-primary-text transition-all duration-300 shadow-lg"
            >
              Sign In
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center w-full px-4 py-2.5 rounded-full text-base font-medium border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-text transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-4 h-4 mr-2"
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
              </svg>
              {language}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;