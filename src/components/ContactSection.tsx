
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
    <section ref={sectionRef} className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-center mb-4">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                      <span className="text-neon-blue">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-white font-medium">alex@videoeditor.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-magenta/20 rounded-full flex items-center justify-center">
                      <span className="text-neon-magenta">📱</span>
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <p className="text-white font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center">
                      <span className="text-neon-purple">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-white font-medium">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-white">Follow My Work</h4>
                <div className="flex space-x-4">
                  {['Instagram', 'LinkedIn', 'YouTube', 'Vimeo'].map((social, index) => (
                    <div
                      key={social}
                      className="w-12 h-12 bg-dark-700 hover:bg-neon-blue/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                    >
                      <span className="text-neon-blue text-sm font-medium">
                        {social.slice(0, 2)}
                      </span>
                    </div>
                  ))}
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
                  onBlur={() => setFocused(null)}
                  className="bg-dark-700 border-dark-600 focus:border-neon-blue text-white h-14 px-4 pt-6"
                  placeholder=" "
                />
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === 'name' || formData.name 
                    ? 'top-2 text-xs text-neon-blue' 
                    : 'top-4 text-gray-400'
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
                  onBlur={() => setFocused(null)}
                  className="bg-dark-700 border-dark-600 focus:border-neon-blue text-white h-14 px-4 pt-6"
                  placeholder=" "
                />
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === 'email' || formData.email 
                    ? 'top-2 text-xs text-neon-blue' 
                    : 'top-4 text-gray-400'
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
                  onBlur={() => setFocused(null)}
                  className="bg-dark-700 border-dark-600 focus:border-neon-blue text-white min-h-32 px-4 pt-6 resize-none"
                  placeholder=" "
                />
                <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === 'message' || formData.message 
                    ? 'top-2 text-xs text-neon-blue' 
                    : 'top-4 text-gray-400'
                }`}>
                  Project Details
                </label>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-neon-blue to-neon-magenta hover:from-neon-blue/80 hover:to-neon-magenta/80 text-dark-900 font-semibold h-14 neon-glow transition-all duration-300"
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
