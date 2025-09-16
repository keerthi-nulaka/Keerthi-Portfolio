import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            Keerthi Nulaka
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-portfolio-neutral hover:text-portfolio-primary portfolio-transition"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-portfolio-neutral hover:text-portfolio-primary portfolio-transition"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('certifications')}
              className="text-portfolio-neutral hover:text-portfolio-primary portfolio-transition"
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-portfolio-neutral hover:text-portfolio-primary portfolio-transition"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary text-white hover:shadow-portfolio-glow portfolio-transition"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;