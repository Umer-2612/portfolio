import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "Backend & DevOps Engineer | Cloud | Automation | AI-Driven Systems";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    "Node.js",
    "Python",
    "Docker",
    "Kubernetes",
    "AWS",
    ".NET",
    "React",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in max-w-4xl mx-auto">
          {/* Main introduction */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Hey, I'm </span>
              <span className="gradient-text">Umer Karachiwala</span>
            </h1>

            <div className="h-12 mb-6 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                {displayText}
                <span className="animate-blink border-r-2 border-cyan-400 ml-1"></span>
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
                <span className="text-cyan-400 font-medium">2+ YOE</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2">
                <span className="text-purple-400 font-medium">
                  Backend Specialist
                </span>
              </div>
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full px-4 py-2">
                <span className="text-green-400 font-medium">
                  DevOps Expert
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 max-w-2xl mx-auto">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-medium px-6 py-3 text-base hover-glow rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </Button>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:text-black px-6 py-3 text-base rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <ExternalLink size={18} />
              View Projects
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              className="border-2 border-purple-400 text-purple-400 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-black px-6 py-3 text-base rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </Button>
          </div>

          {/* Tech stack visual */}
          <div className="mb-12">
            <p className="text-gray-400 text-sm mb-4 font-medium">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={tech}
                  className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300 backdrop-blur-sm hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Quick experience snapshot */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-6 text-left hover-glow group transition-all duration-300">
              <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:text-cyan-300">
                Current Role
              </h3>
              <p className="text-white font-semibold mb-1">
                Jr Backend Developer
              </p>
              <p className="text-gray-400 text-sm mb-3">
                WebOsmotic • Sep 2023 - Jun 2025
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Built scalable real-time systems with AWS SQS + Socket.io,
                AI-powered document chat with Bedrock
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 text-left hover-glow group transition-all duration-300">
              <h3 className="text-lg font-bold text-purple-400 mb-2 group-hover:text-purple-300">
                Recent Project
              </h3>
              <p className="text-white font-semibold mb-1">
                Restaurant Platform
              </p>
              <p className="text-gray-400 text-sm mb-3">
                Freelance • Sep - Nov 2024
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Node.js APIs, Stripe integration, 30% operational efficiency
                boost through automation
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="animate-bounce hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
          aria-label="Scroll to projects"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
