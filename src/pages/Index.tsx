
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
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-playfair font-bold gradient-text">
              ALEX
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Home</a>
              <a href="#services" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Services</a>
              <a href="#skills" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Contact</a>
            </div>
            <Button className="bg-neon-blue hover:bg-neon-blue/80 text-dark-900 font-semibold">
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
      <footer className="bg-dark-800 border-t border-dark-700 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold gradient-text mb-4">ALEX</h3>
              <p className="text-gray-400 leading-relaxed">
                Professional video editor creating cinematic experiences that captivate and inspire.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-neon-blue transition-colors duration-300">Home</a>
                <a href="#services" className="block text-gray-400 hover:text-neon-blue transition-colors duration-300">Services</a>
                <a href="#projects" className="block text-gray-400 hover:text-neon-blue transition-colors duration-300">Projects</a>
                <a href="#contact" className="block text-gray-400 hover:text-neon-blue transition-colors duration-300">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
              <div className="flex space-x-4">
                {['Instagram', 'LinkedIn', 'YouTube', 'Vimeo'].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 bg-dark-700 hover:bg-neon-blue/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-neon-blue text-xs font-medium">
                      {social.slice(0, 2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-dark-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Alex Video Editor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        id="scroll-to-top"
        className="fixed bottom-8 right-8 opacity-0 w-12 h-12 rounded-full bg-neon-blue hover:bg-neon-blue/80 text-dark-900 transition-all duration-300 z-50 p-0"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Index;
