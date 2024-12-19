"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import twitterBannerImg from "../../../assets/twitterProject.png";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Featured Projects
        </h2>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={twitterBannerImg}
                  alt="Twitter Clone"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={75}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary"
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
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Apps" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "other", name: "Other" },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time updates and payment integration.",
    image: "/path-to-image.jpg", // Add your project image
    category: "web",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics with real-time data visualization.",
    image: "/path-to-image.jpg", // Add your project image
    category: "web",
    technologies: ["React", "D3.js", "Firebase", "Tailwind"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com",
  },
];

export default ProjectsSection;
