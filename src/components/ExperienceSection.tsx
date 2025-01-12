"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendar, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import webOsmoticsLogo from "../assets/webosmoticLogo.jpeg";
import freelanceLogo from "../assets/punjabiTouchLogo.png";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Experience
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Horizontal Tabs for Mobile / Vertical for Desktop */}
            <div className="flex md:flex-col overflow-x-auto md:sticky md:top-20 md:h-fit space-x-2 md:space-x-0 md:space-y-2 p-2 -mx-2 md:mx-0 md:p-0 md:w-64">
              {experiences.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 flex items-center gap-3 p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    activeTab === index
                      ? "bg-primary text-white"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  initial={false}
                >
                  {/* Background Gradient */}
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10">
                      <Image
                        src={item.logo}
                        alt={item.company}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <span className="font-semibold whitespace-nowrap">
                      {item.company}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-primary/10"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                      {experiences[activeTab].title}
                    </h3>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <FaCalendar className="text-primary" />
                      <span className="text-primary">
                        {experiences[activeTab].duration}
                      </span>
                    </div>
                  </div>

                  {/* Company & Location */}
                  <p className="text-xl text-gray-300 mb-6">
                    {experiences[activeTab].company} -{" "}
                    {experiences[activeTab].location}
                    {experiences[activeTab].projectLink && (
                      <motion.a
                        href={experiences[activeTab].projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-sm transition-all group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Project</span>
                        <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    )}
                  </p>

                  {/* Description */}
                  <div className="relative pl-6 mb-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 to-purple-500/50 rounded-full" />
                    <ul className="text-gray-300 leading-relaxed space-y-3">
                      {experiences[activeTab].points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCode className="mt-1.5 text-primary flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const experiences = [
  {
    title: "Backend Developer",
    company: "WebOsmotics",
    location: "Gujarat, India",
    duration: "Sep 2023 - Present",
    projectLink: "https://www.narad.io",
    logo: webOsmoticsLogo,
    points: [
      "Automated employee assessments for ISO compliance, reducing manual intervention by 70%",
      "Delivered real-time AI-powered policy search reducing response time from hours to seconds",
      "Developed Teams bot for meeting analytics supporting 500+ employees",
      "Enhanced security and scalability using Azure Bot Service and App Service",
      "Integrated WhatsApp communication reducing response time by 50%",
    ],
  },
  {
    title: "Full-Stack Development Lead",
    company: "Freelance Project",
    location: "Queensland, Australia",
    duration: "Sep 2024 - Nov 2024",
    projectLink: "https://www.punjabitouchindianrestaurant.com.au/",
    logo: freelanceLogo,
    points: [
      "Delivered comprehensive restaurant management platform for Australian client",
      "Implemented real-time order tracking with automated receipt printing improving efficiency by 30%",
      "Led cross-functional team for web and mobile application development",
    ],
  },
];

export default ExperienceSection;
