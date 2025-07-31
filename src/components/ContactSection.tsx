import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focused, setFocused] = useState<string | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-center mb-4">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">bernesh@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-professional-accent-teal/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-professional-accent-teal" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+91 96551 58522</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-professional-accent-emerald/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-professional-accent-emerald" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">Chennai, IN</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-foreground">Follow My Work</h4>
                <div className="flex space-x-4">
  <a
    href="https://www.instagram.com/_ig_bernesh_avm"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-secondary hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
  >
    <Instagram className="w-5 h-5 text-primary" />
  </a>

  <a
    href="https://www.linkedin.com/in"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-secondary hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
  >
    <Linkedin className="w-5 h-5 text-primary" />
  </a>

  <a
    href="https://www.youtube.com/@Bernesh2003"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-secondary hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
  >
    <Youtube className="w-5 h-5 text-primary" />
  </a>
</div>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocused('name')}
                 
                  className="bg-secondary  text-foreground h-14 px-4 pt-6"
                  placeholder=" "
                />
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === 'name' || formData.name 
                    ? 'top-2 text-xs text-primary' 
                    : 'top-4 text-muted-foreground'
                }`}>
                  Your Name
                </label>
              </div>

              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocused('email')}
                 
                  className="bg-secondary  text-foreground h-14 px-4 pt-6"
                  placeholder=" "
                />
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === 'email' || formData.email 
                    ? 'top-2 text-xs text-primary' 
                    : 'top-4 text-muted-foreground'
                }`}>
                  Email Address
                </label>
              </div>

              <div className="relative">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocused('message')}
                 
                  className="bg-secondary  text-foreground min-h-32 px-4 pt-6 resize-none"
                  placeholder=" "
                />
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === 'message' || formData.message 
                    ? 'top-2 text-xs text-primary' 
                    : 'top-4 text-muted-foreground'
                }`}>
                  Project Details
                </label>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-professional-blue-600 hover:from-primary/90 hover:to-professional-blue-600/90 text-primary-foreground font-semibold h-14 professional-glow transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
