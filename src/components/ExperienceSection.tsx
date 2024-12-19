"use client";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">My Journey</h2>

        {/* Skills Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Tech Stack
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300"
              >
                {tech.icon}
                <span className="mt-2">{tech.name}</span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                  <div
                    className="bg-primary h-1.5 rounded-full"
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center justify-center mb-8`}
            >
              <div className="w-1/2 px-4">
                <div
                  className={`${
                    index % 2 === 0 ? "text-right" : "text-left"
                  } p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300`}
                >
                  <span className="text-primary">{item.date}</span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="text-gray-400 mt-2">{item.company}</p>
                  <p className="mt-2">{item.description}</p>
                  <div className="flex gap-2 mt-4 flex-wrap justify-end">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="absolute w-1 h-full bg-primary/20" />
              </div>
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const techStack = [
  { name: "JavaScript", icon: <SiJavascript size={40} />, proficiency: 90 },
  { name: "React", icon: <SiReact size={40} />, proficiency: 85 },
  { name: "Node.js", icon: <SiNodedotjs size={40} />, proficiency: 80 },
  { name: "MongoDB", icon: <SiMongodb size={40} />, proficiency: 75 },
  { name: "TypeScript", icon: <SiTypescript size={40} />, proficiency: 85 },
  { name: "Tailwind", icon: <SiTailwindcss size={40} />, proficiency: 90 },
];

const timeline = [
  {
    date: "2023 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Company Name",
    description:
      "Leading development of scalable web applications using modern technologies.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    icon: <FaBriefcase />,
  },
  {
    date: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Another Tech Company",
    description: "Developed and maintained multiple web applications.",
    technologies: ["React", "Express", "MongoDB", "Redux"],
    icon: <FaBriefcase />,
  },
  // Add more timeline items as needed
];

export default ExperienceSection;
