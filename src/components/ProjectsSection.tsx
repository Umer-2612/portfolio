"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import cloudeIde from "../assets/image.png";
import toast, { Toaster } from "react-hot-toast";
import codemyBannerImg from "../assets/image2.png";
import freelanceProjectImg from "../assets/freelanceProject.png";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "backend", name: "Backend" },
    { id: "devops", name: "DevOps" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const projects = [
    {
      id: 1,
      title: "Zoom Interview Bot",
      description:
        "Architected an innovative bot to seamlessly join Zoom meetings, capturing real-time audio and video streams for AI-driven candidate evaluation. This solution automated interview processes by providing deep behavioral insights through advanced media processing, showcasing robust backend integration.",
      category: "ai",
      technologies: [
        "Zoom SDK",
        "Node.js",
        "AI Analysis",
        "Real-Time Streaming",
        "ElevenLabs API",
        "Assembly AI API",
      ],
      image: codemyBannerImg,
      github: "https://github.com/Umer-2612",
      demo: "#",
    },
    {
      id: 2,
      title: "AI Voice Agent",
      description:
        "Developed a cutting-edge voice-enabled AI chat system for natural, continuous dialogue. Engineered real-time text-to-speech and speech-to-text integrations, ensuring low-latency interactions. This project demonstrated backend proficiency in handling complex audio data pipelines.",
      category: "ai",
      technologies: [
        "ElevenLabs API",
        "AssemblyAI",
        "Node.js",
        "Real-Time Processing",
        "Socket io",
        "React js",
      ],
      image: cloudeIde,
      github: "https://github.com/Umer-2612",
      demo: "#",
    },
    {
      id: 3,
      title: "Freelance Restaurant Platform",
      description:
        "Led the creation of a dynamic restaurant management platform for an Australian client, focusing on scalable backend systems. Implemented robust APIs for menu filtering, order tracking, and payment processing with Stripe, enhancing operational efficiency by 30% through automated workflows.",
      category: "backend",
      technologies: ["Node.js", "Stripe", "React.js", "Socket io", "Cloudinary"],
      image: freelanceProjectImg,
      github: "https://github.com/Umer-2612/Restaurant-Api",
      demo: "https://www.punjabitouchindianrestaurant.com.au/",
    },
    {
      id: 4,
      title: "Cloud IDE",
      description:
        "Designed a scalable browser-based development environment supporting over 100 concurrent developers. Leveraged Kubernetes for container orchestration and implemented load balancer-level authentication, ensuring secure, isolated workspaces with high availability—a testament to DevOps expertise.",
      category: "backend",
      technologies: [
        "Kubernetes",
        "Docker",
        "Node.js",
        "AWS",
        "WebSocket",
        "Socket io",
        "React js",
      ],
      image: cloudeIde,
      github: "https://github.com/Umer-2612",
      demo: "#",
    },
    {
      id: 5,
      title: "Codemy",
      description:
        "Built a comprehensive Ed-Tech platform akin to Udemy, enabling seamless content creation, consumption, and rating. Engineered a resilient backend with real-time progress tracking and interactive course delivery, optimizing user experience through cloud-based infrastructure and efficient data handling.",
      category: "backend",
      technologies: [
        "MongoDB",
        "Express.js",
        "Node.js",
        "AWS EC2",
        "Docker",
        "Socket io",
        "Cloudinary",
        "Razorpay",
      ],
      image: codemyBannerImg,
      github: "https://github.com/Umer-2612",
      demo: "#",
    },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast.success("Currently in development mode! 🖥️", {
      style: {
        background: "#333",
        color: "#fff",
        border: "1px solid #4F46E5",
      },
      duration: 3000,
    });
  };

  const handleDGithubClick = (e: React.MouseEvent<HTMLAnchorElement>, githubLink: string) => {
    e.preventDefault();
    if (githubLink.includes("#")) {
      toast.success("Currently in development mode! 🖥️", {
        style: {
          background: "#333",
          color: "#fff",
          border: "1px solid #4F46E5",
        },
        duration: 3000,
      });
    } else {
      window.open(githubLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-[#18181B]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            Here are some of the projects that showcase my skills in backend development, DevOps, and scalable system design.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm transition-colors duration-300 ${filter === category.id ? "bg-primary/20 border border-primary text-primary" : "border border-gray-700 text-gray-400 bg-gray-800/30 hover:bg-gray-800/50"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-[#1E1E22] rounded-xl overflow-hidden border border-gray-700/50 hover:border-primary/40 transition-colors duration-300 h-full"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden border-b border-gray-700/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 sm:p-6 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base flex-grow line-clamp-3 overflow-hidden">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 overflow-hidden">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-800/40 rounded-full text-xs text-gray-300 border border-gray-700/30 hover:border-primary/40 hover:text-primary/80 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-800/40 rounded-full text-xs text-gray-300 border border-gray-700/30">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 sm:gap-5 mt-auto justify-center sm:justify-start text-sm sm:text-base">
                    <a
                      onClick={(e) => handleDGithubClick(e, project.github)}
                      className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors cursor-pointer"
                    >
                      <FaGithub />
                      Code
                    </a>
                    <a
                      onClick={handleDemoClick}
                      className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors cursor-pointer"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
};

export default ProjectsSection;
