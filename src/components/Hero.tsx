import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">
Keerthi Nulaka</span>
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-neutral mb-8 leading-relaxed">
              AI & Data Science Student
            </p>
            <p className="text-lg text-portfolio-neutral mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about transforming data into insights and building intelligent systems. 
              Specializing in data engineering, machine learning, and web development with a focus on scalable solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button onClick={scrollToProjects} size="lg" className="bg-gradient-primary text-white hover:shadow-portfolio-glow portfolio-transition group">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 portfolio-transition" />
            </Button>
            <Button variant="outline" size="lg" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white portfolio-transition" asChild>
              <a href="/Keerthi_Nulaka_Resume.pdf" download="Keerthi_Nulaka_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-portfolio-accent rounded-full opacity-20 animate-float" style={{
      animationDelay: '1s'
    }} />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-portfolio-primary rounded-full opacity-10 animate-float" style={{
      animationDelay: '2s'
    }} />
    </section>;
};
export default Hero;