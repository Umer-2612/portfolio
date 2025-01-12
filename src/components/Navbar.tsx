"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import photoImg from "../assets/Me.jpg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = useMemo(
    () => [
      { label: "Experience", id: "experience" },
      { label: "Projects", id: "projects" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find which section is currently in view
      const sections = menuItems.map((item) =>
        document.getElementById(item.id)
      );
      const viewportHeight = window.innerHeight;
      const headerOffset = 100; // Adjust based on your header height

      let currentSection = "";
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is in viewport and at least 30% visible
          if (
            rect.top < viewportHeight - headerOffset &&
            rect.bottom > headerOffset &&
            rect.height * 0.3 < rect.bottom
          ) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the navbar height
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20; // Added extra padding

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full py-2 transition-all duration-300 z-50`}
    >
      <div className="mx-auto w-[90%] md:w-[50%] max-w-4xl">
        <div
          className={`rounded-xl transition-all duration-300 ${
            scrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-[#27272A]"
          } px-4 py-2`}
        >
          <div className="flex items-center justify-between">
            {/* Logo and Photo */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 group"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-primary/80 group-hover:border-primary transition-colors">
                <Image
                  src={photoImg}
                  alt="Umer Karachiwala"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-purple-500/90 group-hover:from-primary group-hover:to-purple-500 transition-all">
                Umer Karachiwala
              </span>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-primary transition-colors"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-4 py-2 mt-2 space-y-1 border-t border-gray-700/50">
                  {menuItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary"
                          : "text-gray-300 hover:bg-primary/5 hover:text-primary"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
