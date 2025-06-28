
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [showFullExperience, setShowFullExperience] = useState(false);

  const experiences = [
    {
      company: "WebOsmotic Private Limited",
      role: "Jr Backend Developer",
      period: "Sep 2023 - Jun 2025",
      location: "Surat Gujarat, India",
      highlights: [
        "Built scalable real-time notification system (AWS SQS + Socket.io)",
        "AI-powered 'Chat with Document' feature (Anthropic Bedrock)"
      ],
      fullAchievements: [
        "Led end-to-end development of multi-file upload pipeline to AWS S3 and used AI to generate MCQs from documents with high contextual accuracy.",
        "Engineered a scalable real-time notification system across distributed Node.js instances using AWS SQS and Socket.io.",
        "Built 'Chat with Document' feature using Anthropic Bedrock, implementing semantic text-mining for AI Q&A with policy documents.",
        "Designed and deployed a Microsoft Teams bot in .NET to stream real-time audio/video to AI systems for meeting analysis.",
        "Containerized bots with Docker and deployed on AWS EC2 Windows environments, ensuring 99.9% uptime.",
        "Built a ticket management system and integrated WhatsApp Business API for dynamic bot interactions."
      ]
    },
    {
      company: "Freelance Restaurant Project",
      role: "Full Stack Developer",
      period: "Sep 2024 - Nov 2024",
      location: "Remote",
      highlights: [
        "Built menu/order/payment APIs with Stripe integration",
        "Automated workflows → 30% operational efficiency boost"
      ],
      fullAchievements: [
        "Spearheaded the development of a dynamic restaurant website with advanced menu browsing and category-based filtering for an Australian client.",
        "Designed and implemented reservation and contact forms, coupled with a secure admin portal for managing submissions and tracking orders.",
        "Integrated Stripe for seamless, secure payment processing and automated receipt generation, enhancing user transaction experience.",
        "Optimized backend APIs with Node.js to ensure high performance and scalability, supporting real-time order updates and data management."
      ]
    },
    {
      company: "Code InBound",
      role: "SDE Intern",
      period: "Mar 2023 - Jun 2023",
      location: "Remote",
      highlights: [
        "React.js + Bootstrap for network monitoring tool UI",
        "Agile development & code review collaboration"
      ],
      fullAchievements: [
        "Gained hands-on experience in team-based software development within an agile environment.",
        "Learned and applied React.js and Bootstrap to build responsive user interfaces for a network monitoring tool.",
        "Collaborated with senior developers through code reviews and sprint planning to improve development workflow."
      ]
    }
  ];

  if (showFullExperience) {
    return (
      <section id="experience" className="py-16 bg-gradient-to-b from-background to-gray-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Full Experience</span>
            </h2>
            <Button 
              onClick={() => setShowFullExperience(false)}
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              Show Summary
            </Button>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-8 hover-glow group transition-all duration-300 animate-slide-up border-l-4 border-cyan-400"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                  <div className="mb-4 lg:mb-0 flex-grow">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-white font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl px-6 py-3 lg:ml-6">
                    <span className="text-cyan-400 font-medium text-sm whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <div className="grid gap-4">
                  {exp.fullAchievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start space-x-4 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <p className="text-gray-300 leading-relaxed text-sm lg:text-base group-hover/item:text-gray-200 transition-colors duration-200">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-background to-gray-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience Highlights</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Building scalable systems and innovative solutions across diverse tech stacks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl p-6 hover-glow group transition-all duration-300 animate-slide-up border border-gray-800 hover:border-cyan-400/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-white font-semibold text-base mb-1">{exp.company}</p>
                
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => setShowFullExperience(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-medium px-6 py-3 hover-glow rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <ExternalLink size={16} />
            See Full Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
