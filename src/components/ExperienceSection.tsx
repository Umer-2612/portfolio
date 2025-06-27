"use client";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import webOsmoticsLogo from "../assets/webosmoticLogo.jpeg";
import freelanceLogo from "../assets/punjabiTouchLogo.png";
import codeInBoundLogo from "../assets/codeInBound.png";
import { useState } from "react";

interface Experience {
  id: string;
  company: string;
  logo: StaticImageData;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  link: string;
}

const experiences: Experience[] = [
  {
    id: "webosmotic",
    company: "WebOsmotic Private Limited",
    logo: webOsmoticsLogo,
    role: "Jr Backend Developer",
    duration: "Sep 2023 - Jun 2025",
    location: "Surat Gujarat, India",
    responsibilities: [
      "Led end-to-end development of multi-file upload pipeline to AWS S3 and used AI to generate MCQs from documents with high contextual accuracy.",
      "Engineered a scalable real-time notification system across distributed Node.js instances using AWS SQS and Socket.io.",
      "Built ‘Chat with Document’ feature using Anthropic Bedrock, implementing semantic text-mining for AI Q&A with policy documents.",
      "Designed and deployed a Microsoft Teams bot in .NET to stream real-time audio/video to AI systems for meeting analysis.",
      "Containerized bots with Docker and deployed on AWS EC2 Windows environments, ensuring 99.9% uptime.",
      "Built a ticket management system and integrated WhatsApp Business API for dynamic bot interactions.",
    ],
    link: "https://www.narad.io",
  },
  {
    id: "freelance",
    company: "Freelance Restaurant Project",
    logo: freelanceLogo,
    role: "Full Stack Developer",
    duration: "Sep 2024 - Nov 2024",
    location: "Remote",
    responsibilities: [
      "Spearheaded the development of a dynamic restaurant website with advanced menu browsing and category-based filtering for an Australian client.",
      "Designed and implemented reservation and contact forms, coupled with a secure admin portal for managing submissions and tracking orders.",
      "Integrated Stripe for seamless, secure payment processing and automated receipt generation, enhancing user transaction experience.",
      "Optimized backend APIs with Node.js to ensure high performance and scalability, supporting real-time order updates and data management.",
    ],
    link: "https://punjabitouchindianrestaurant.com.au/",
  },
  {
    id: "codeinbound",
    company: "Code InBound",
    logo: codeInBoundLogo,
    role: "SDE Intern",
    duration: "Mar 2023 - Jun 2023",
    location: "Remote",
    responsibilities: [
      "Gained hands-on experience in team-based software development within an agile environment.",
      "Learned and applied React.js and Bootstrap to build responsive user interfaces for a network monitoring tool.",
      "Collaborated with senior developers through code reviews and sprint planning to improve development workflow.",
    ],
    link: "#",
  },
];

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section className="py-16 bg-[#1E1E22] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          {/* Sidebar with company tabs */}
          <div className="w-full md:w-1/4 flex-shrink-0 relative">
            <div className="flex flex-row md:flex-col gap-2 md:gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`flex items-center text-left px-3 py-2 rounded-full transition-colors whitespace-nowrap md:whitespace-normal ${
                    activeTab === exp.id
                      ? "bg-indigo-900/30 text-indigo-400"
                      : "bg-transparent text-gray-400 hover:bg-gray-800/20"
                  }`}
                  aria-label={`${exp.company} experience`}
                >
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2 object-contain"
                  />
                  <span className="text-sm font-medium truncate">
                    {exp.company}
                  </span>
                </button>
              ))}
            </div>
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-indigo-500/30"></div>
          </div>

          {/* Experience details */}
          <div className="w-full md:w-3/4 pl-0 md:pl-8 pt-4 md:pt-0">
            {experiences.map(
              (exp) =>
                activeTab === exp.id && (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.role} <span className="text-indigo-400">@</span>{" "}
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:underline"
                        >
                          {exp.company}
                        </a>
                      </h3>
                      <div className="text-sm text-gray-400 whitespace-nowrap">
                        <span>{exp.duration}</span> •{" "}
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                        >
                          <span className="text-indigo-400 mt-1 flex-shrink-0">
                            <FaCheck size={12} />
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
