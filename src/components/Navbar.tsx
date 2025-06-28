
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold gradient-text">
              Umer Karachiwala
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-sm hover:text-cyan-400 transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-sm hover:text-cyan-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm hover:text-cyan-400 transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium px-4 py-2 text-sm flex items-center gap-2"
              >
                <Mail size={16} />
                <span className="hidden sm:inline">Get in Touch</span>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white hover:text-cyan-400 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-20 right-6 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-xl p-6 min-w-[200px]">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left text-white hover:text-cyan-400 transition-colors py-2"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-white hover:text-cyan-400 transition-colors py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-white hover:text-cyan-400 transition-colors py-2"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
