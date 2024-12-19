"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Experience", href: "/experience" },
    { title: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="top-0 z-50 w-full py-4">
      <div
        className="mx-auto w-[90%] max-w-4xl glass-effect rounded-2xl"
        style={{ backgroundColor: "#27272A" }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-primary"
          >
            <Link href="/">Umer Karachiwala</Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-text hover:text-primary"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-primary"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden px-6 pt-4 pb-2"
          >
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`block py-2 transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-text hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
