
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-gray-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-effect rounded-2xl p-8 hover-glow group transition-all duration-300">
              <Mail className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-3">Email Me</h3>
              <p className="text-gray-400 mb-4">
                Drop me an email if you want to discuss a project or just say hi.
              </p>
              <a 
                href="mailto:umerkarachiwala2612@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                umerkarachiwala2612@gmail.com
              </a>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover-glow group transition-all duration-300">
              <Linkedin className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-3">Social Links</h3>
              <p className="text-gray-400 mb-4">
                Connect with me on social platforms to see my latest updates.
              </p>
              <a 
                href="https://www.linkedin.com/in/umer-karachiwala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="glass-effect rounded-2xl p-8 inline-block">
              <p className="text-gray-300 mb-6 max-w-lg">
                Ready to build something amazing together? Let's turn your ideas into reality 
                with scalable backend solutions and robust DevOps practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium px-8 py-3 hover-glow"
                  onClick={() => window.open('mailto:umerkarachiwala2612@gmail.com')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3"
                  onClick={() => window.open('https://www.linkedin.com/in/umer-karachiwala/', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
