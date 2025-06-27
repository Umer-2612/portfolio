"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaShare,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#1E1E22]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Get in Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="mb-6 p-3 rounded-full bg-primary/20 border border-primary/30">
                <FaEnvelope className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Email Me</h3>
              <p className="text-gray-400 mb-5 max-w-xs">
                Drop me an email if you want to discuss a project or just say
                hi.
              </p>
              <motion.a
                href="mailto:umerkarachiwala2612@gmail.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaEnvelope className="text-sm" />
                umerkarachiwala2612@gmail.com
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="mb-6 p-3 rounded-full bg-primary/20 border border-primary/30">
                <FaShare className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Social Links
              </h3>
              <p className="text-gray-400 mb-5 max-w-xs">
                Connect with me on social platforms to see my latest updates.
              </p>
              <div className="flex gap-5 justify-center md:justify-start text-gray-300">
                <a
                  href="https://github.com/Umer-2612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/umer-karachiwala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://x.com/UmerKarachiwala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <FaXTwitter size={22} />
                </a>
                <a
                  href="https://www.youtube.com/@UmerKarachiwala2612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <FaYoutube size={22} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
