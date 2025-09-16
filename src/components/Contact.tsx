import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    title: "Email",
    value: "keerthinulaka118@gmail.com",
    href: "mailto:keerthinulaka118@gmail.com"
  }, {
    icon: Phone,
    title: "Phone",
    value: "+91 7659859269",
    href: "tel:+917659859269"
  }, {
    icon: MapPin,
    title: "Location",
    value: "Vijayawada, India",
    href: "#"
  }];
  return <section id="contact" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-portfolio-neutral max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on exciting projects? Let's discuss data engineering challenges, 
              AI/ML opportunities, or any innovative ideas you'd like to explore together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <div className="bg-gradient-card rounded-2xl p-8 portfolio-shadow-medium">
                <h3 className="text-2xl font-bold mb-6 text-portfolio-secondary">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="portfolio-transition focus:ring-portfolio-primary focus:border-portfolio-primary" />
                  </div>
                  <div>
                    <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="portfolio-transition focus:ring-portfolio-primary focus:border-portfolio-primary" />
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} required className="portfolio-transition focus:ring-portfolio-primary focus:border-portfolio-primary resize-none" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary text-white hover:shadow-portfolio-glow portfolio-transition" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-portfolio-secondary">Let's Connect</h3>
                  <p className="text-portfolio-neutral leading-relaxed mb-8">
                    I'm always interested in hearing about new opportunities, data engineering 
                    challenges, or collaborating on AI/ML projects. Let's connect and discuss 
                    how we can work together!
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => <a key={index} href={info.href} className="flex items-center p-4 bg-gradient-card rounded-xl portfolio-shadow-soft hover:portfolio-shadow-medium portfolio-transition hover:scale-105 group">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mr-4 group-hover:shadow-portfolio-glow portfolio-transition">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-portfolio-secondary group-hover:text-portfolio-primary portfolio-transition">
                          {info.title}
                        </h4>
                        <p className="text-portfolio-neutral">{info.value}</p>
                      </div>
                    </a>)}
                </div>

                <div className="bg-gradient-card rounded-xl p-6 portfolio-shadow-soft">
                  <h4 className="font-bold text-portfolio-secondary mb-3">Available for:</h4>
                  <ul className="space-y-2 text-portfolio-neutral">
                    <li>• frontend and backend roles</li>
                    <li>• Full-time Entry-level Roles</li>
                    <li>• AI/ML Project Collaborations</li>
                    <li>• InternshipsOpen Source Contributions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;