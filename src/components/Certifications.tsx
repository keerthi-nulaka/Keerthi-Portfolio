import { Badge, Award, Shield, Cloud, Zap } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Cloud,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2024",
      status: "Certified",
      color: "text-orange-500"
    },
    {
      icon: Shield,
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Mar 2025",
      status: "Certified",
      color: "text-blue-500"
    },
    {
      icon: Badge,
      title: "Juniper Networks Certified Associate",
      issuer: "Juniper Networks",
      date: "Apr 2025",
      status: "Certified",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Essential RPA Professional",
      issuer: "UiPath",
      date: "Aug 2024",
      status: "Certified",
      color: "text-purple-500"
    },
    {
      icon: Award,
      title: "Salesforce AI Associate",
      issuer: "Salesforce",
      date: "Oct 2024",
      status: "Certified",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-lg text-portfolio-neutral max-w-3xl mx-auto leading-relaxed">
              Professional certifications that validate my expertise in cloud computing, 
              automation, and emerging technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-card rounded-xl p-6 portfolio-shadow-soft hover:portfolio-shadow-medium portfolio-transition hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <cert.icon className={`h-10 w-10 ${cert.color} group-hover:scale-110 portfolio-transition`} />
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                    {cert.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-portfolio-secondary group-hover:text-portfolio-primary portfolio-transition">
                  {cert.title}
                </h3>
                
                <p className="text-portfolio-neutral text-sm mb-2">
                  {cert.issuer}
                </p>
                
                <p className="text-portfolio-neutral text-sm font-medium">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-card rounded-xl p-6 portfolio-shadow-soft max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-3 text-portfolio-secondary">Continuous Learning</h3>
              <p className="text-portfolio-neutral leading-relaxed">
                I believe in staying current with industry trends and continuously expanding my skill set. 
                These certifications represent my commitment to professional growth and technical excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;