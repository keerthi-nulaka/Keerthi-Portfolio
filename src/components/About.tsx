import { Code, Palette, Zap, Users } from 'lucide-react';
const About = () => {
  const skills = [{
    icon: Code,
    title: "Programming Languages",
    description: "Python, C, JavaScript, HTML/CSS",
    color: "text-portfolio-primary"
  }, {
    icon: Zap,
    title: "Data Engineering",
    description: "SQL, ETL Workflows, Cloud Pipelines, Big Data",
    color: "text-portfolio-accent"
  }, {
    icon: Palette,
    title: "Machine Learning",
    description: "Naive Bayes, SVM, TF-IDF, Model Optimization",
    color: "text-portfolio-primary-light"
  }, {
    icon: Users,
    title: "Cloud & Certifications",
    description: "AWS, Azure, Salesforce AI, RPA Essentials",
    color: "text-portfolio-secondary"
  }];
  return <section id="about" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-portfolio-neutral max-w-3xl mx-auto leading-relaxed">
              I'm a dedicated AI & Data Science student with hands-on experience in data engineering 
              and web development. Passionate about leveraging technology to solve complex problems 
              and create meaningful impact through data-driven solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-secondary">My Journey</h3>
              <p className="text-portfolio-neutral mb-4 leading-relaxed">
                Currently pursuing B.Tech in Artificial Intelligence and Data Science at KL University 
                with a 9.65 CGPA. I'm passionate about transforming raw data into meaningful insights 
                and building intelligent systems that solve real-world problems.
              </p>
              <p className="text-portfolio-neutral leading-relaxed">
                Through internships at AICTE Eduskills and Prodigy InfoTech, I've gained hands-on 
                experience in data engineering and web development, working with enterprise-scale 
                datasets and building efficient, scalable solutions.
              </p>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-gradient-card rounded-2xl p-8 portfolio-shadow-medium">
                <h3 className="text-xl font-bold mb-4 text-portfolio-secondary">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-portfolio-neutral">Current CGPA</span>
                    <span className="font-bold text-portfolio-primary">9.65</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-portfolio-neutral">Certifications</span>
                    <span className="font-bold text-portfolio-primary">5+</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-portfolio-neutral">Model Accuracy</span>
                    <span className="font-bold text-portfolio-primary">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => <div key={index} className="bg-gradient-card rounded-xl p-6 portfolio-shadow-soft hover:portfolio-shadow-medium portfolio-transition hover:scale-105 animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <skill.icon className={`h-12 w-12 ${skill.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-portfolio-secondary">{skill.title}</h3>
                <p className="text-sm text-portfolio-neutral">{skill.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;