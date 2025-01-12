"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import twitterBannerImg from "../assets/twitterProject.png";
import toast, { Toaster } from "react-hot-toast";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast.success("Project will be live soon! 🚀", {
      style: {
        background: '#333',
        color: '#fff',
        border: '1px solid #4F46E5',
      },
      duration: 3000,
    });
  };

  return (
    <section id="projects" className="py-20">
      <Toaster position="bottom-center" />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Featured Projects
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full ${
                  filter === category.id
                    ? "bg-primary text-white"
                    : "bg-white/5 hover:bg-primary/10"
                } transition-all duration-300`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={twitterBannerImg}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href="#"
                      onClick={handleDemoClick}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Apps" },
];

const projects = [
  {
    id: 1,
    title: "Codemy",
    description:
      "A comprehensive Ed-Tech platform enabling content creation, consumption, and rating. Features include interactive course delivery, real-time progress tracking, and an intuitive learning interface designed with modern UX principles.",
    category: "web",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "Docker",
      "AWS",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Cloud IDE",
    description:
      "A scalable browser-based VS Code environment solution that supports 100+ concurrent developers. Built with Kubernetes for isolated development environments and features enhanced security with load balancer level authentication.",
    category: "web",
    technologies: [
      "React",
      "Node.js",
      "Docker",
      "Kubernetes",
      "WebSocket",
      "OAuth",
      "Code Server Packages",
      "AWS",
    ],
    github: "#",
    demo: "#",
  },
];

export default ProjectsSection;
