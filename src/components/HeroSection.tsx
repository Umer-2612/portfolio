"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
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
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Trust me, I&apos;m Software Engineer
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Meet Umer, content creator, educator, and entrepreneur known for his
            expertise in the tech industry. He has successfully launched
            numerous technical courses on various platforms.
          </p>

          <div className="bg-blue-500/10 rounded-lg p-4 mb-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Building Codemy 🚀
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Founder of Codemy, revolutionizing the way developers learn and
              collaborate.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <div className="relative w-80 h-80">
            <Image
              src={photoImg}
              alt="Umer Karachiwala"
              fill
              className="rounded-2xl shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="flex justify-center gap-8 mt-8">
            <SocialLink
              href="https://github.com/yourusername"
              icon={<FaGithub size={28} />}
            />
            <SocialLink
              href="https://linkedin.com/in/yourusername"
              icon={<FaLinkedin size={28} />}
            />
            <SocialLink
              href="https://twitter.com/yourusername"
              icon={<FaTwitter size={28} />}
            />
            <SocialLink
              href="https://youtube.com/yourusername"
              icon={<FaYoutube size={28} />}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
