"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import photoImg from "../assets/Me.jpg";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
  >
    {icon}
  </a>
);

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 bg-[#18181B]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-5xl">
        {/* Left Content - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-3/5 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
            Hey, I&apos;m Umer
            <span className="text-primary">.</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-300">
            I build scalable backend systems &amp; DevOps solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
            I&apos;m a Backend and DevOps Engineer passionate about cloud technologies, containerization, and automating workflows with AI-driven solutions.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md bg-primary text-white font-medium transition-colors duration-300"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/Umer-Karachiwala-Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md bg-transparent border border-gray-600 text-white font-medium hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-2/5 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-3xl border border-primary/30 hover:border-primary/50 transition-colors duration-500">
            <Image
              src={photoImg}
              alt="Umer Karachiwala"
              layout="fill"
              objectFit="cover"
              className="bg-gray-800"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 border-4 border-transparent hover:border-white/10 transition-all duration-500 rounded-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
