
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  
  const filters = ['All Projects', 'Backend', 'DevOps', 'Full Stack'];
  
  const projects = [
    {
      title: "Zoom Meeting Bot",
      description: "Architected an innovative bot to seamlessly join Zoom meetings, capturing real-time audio and video streams for AI-driven candidate evaluation.",
      technologies: ["Zoom SDK", "Node.js", "AI Analysis", "Real-Time Streaming", "Docker", "AWS"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop"
    },
    {
      title: "AI Voice Agent",
      description: "Developed a cutting-edge voice-enabled AI chat system with real-time text-to-speech and speech-to-text integrations for natural dialogue.",
      technologies: ["ElevenLabs API", "AssemblyAI", "Node.js", "Real-Time Processing", "WebRTC", "Socket.io"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop"
    },
    {
      title: "Cloud IDE",
      description: "Designed a scalable browser-based development environment supporting 100+ concurrent developers with Kubernetes orchestration.",
      technologies: ["Kubernetes", "Docker", "Node.js", "AWS", "Load Balancer", "Authentication"],
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "Codemy",
      description: "Built a comprehensive Ed-Tech platform with real-time progress tracking, interactive course delivery, and cloud-based infrastructure.",
      technologies: ["MongoDB", "Express.js", "Node.js", "AWS EC2", "React.js", "Payment Integration"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    }
  ];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-900/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
            Showcasing backend development, DevOps, and scalable system design expertise
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`${
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:from-cyan-600 hover:to-blue-600' 
                    : 'border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:text-black'
                } transition-all duration-300 px-4 py-2 rounded-full font-medium text-sm`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-effect rounded-xl overflow-hidden hover-glow group transition-all duration-500 animate-slide-up border border-gray-800 hover:border-cyan-400/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded-full text-xs border border-gray-700">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black flex-1 font-medium transition-all duration-300 text-xs py-2 flex items-center gap-1"
                  >
                    <Github size={14} />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:text-black flex-1 transition-all duration-300 text-xs py-2 flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
