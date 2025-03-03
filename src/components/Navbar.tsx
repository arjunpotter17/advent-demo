"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { content } from "../data/content";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { company } = content;

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/process", label: "Process" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}

            <Link href="/" className="flex items-center gap-x-3">
              <Image
                className="h-[40px] w-auto"
                src={company.logo}
                alt={company.name}
                width={100}
                height={100}
              />

              <p className="text-sm text-black dark:text-white">
                Advent Stones
                <br /> Calibration Pvt Ltd
              </p>
            </Link>
     

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${
                    pathname === item.path
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Contact & Theme Toggle */}
          <div className="hidden md:flex items-center">
            <ThemeToggle />
            <Button href="/contact" className="ml-4">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
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
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
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
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.path
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-4 w-full py-2 text-sm">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
