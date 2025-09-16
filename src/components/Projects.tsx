import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Library Management System",
      description: "Full-featured library system with Python backend and SQL database supporting 1,500+ monthly transactions with 99% accuracy. Features book check-in/out, inventory management, and user tracking.",
      image: project1,
      tags: ["Python", "SQL", "Web Interface", "Database"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Email Spam Detection System",
      description: "Advanced email classifier using Naive Bayes and SVM algorithms with TF-IDF and n-gram features, achieving 92% accuracy through cross-validation and hyperparameter tuning.",
      image: project2,
      tags: ["Python", "Machine Learning", "NLP", "SVM"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Data Engineering Pipeline",
      description: "Enterprise-grade cloud pipeline reducing latency by 25% and saving 50+ engineering hours monthly. Automated ETL workflows processing 500GB+ datasets with real-time analytics.",
      image: project3,
      tags: ["Python", "SQL", "Cloud", "ETL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-portfolio-neutral max-w-3xl mx-auto leading-relaxed">
              Here are some of my key projects that demonstrate my expertise in data engineering, 
              machine learning, and full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-gradient-card rounded-2xl overflow-hidden portfolio-shadow-medium hover:portfolio-shadow-large portfolio-transition hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 portfolio-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 portfolio-transition" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-portfolio-secondary group-hover:text-portfolio-primary portfolio-transition">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-neutral mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm"
                      className="bg-gradient-primary text-white hover:shadow-portfolio-glow portfolio-transition flex-1"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white portfolio-transition"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Button 
              variant="outline" 
              size="lg"
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white portfolio-transition"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;