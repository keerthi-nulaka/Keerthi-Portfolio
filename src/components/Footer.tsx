import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/keerthi-nulaka",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/keerthi-nulaka-a5206528b",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter"
    }
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-gradient mb-2">Keerthi Nulaka</div>
              <p className="text-portfolio-neutral">AI & Data Science Student</p>
            </div>
            
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-neutral hover:text-portfolio-primary portfolio-transition hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-portfolio-neutral flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-2 text-red-500" /> by Keerthi Nulaka
            </p>
            <p className="text-sm text-portfolio-neutral mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;