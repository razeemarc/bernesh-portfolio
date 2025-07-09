
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Scroll to top button functionality
    const scrollToTop = () => {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: 0 },
        ease: "power2.inOut"
      });
    };

    // Add scroll to top button click handler
    const scrollButton = document.getElementById('scroll-to-top');
    if (scrollButton) {
      scrollButton.addEventListener('click', scrollToTop);
    }

    // Show/hide scroll to top button
    ScrollTrigger.create({
      start: "top -100",
      end: 99999,
      toggleClass: { className: "opacity-100", targets: "#scroll-to-top" }
    });

    return () => {
      if (scrollButton) {
        scrollButton.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-playfair font-bold gradient-text">
              ALEX
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-300">Home</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300">Services</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold professional-glow">
              Hire Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold gradient-text mb-4">ALEX</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional video editor creating cinematic experiences that captivate and inspire.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Home</a>
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Services</a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Projects</a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex space-x-4">
                {['Instagram', 'LinkedIn', 'YouTube', 'Vimeo'].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-primary text-xs font-medium">
                      {social.slice(0, 2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Alex Video Editor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        id="scroll-to-top"
        className="fixed bottom-8 right-8 opacity-0 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 z-50 p-0 professional-glow"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Index;
