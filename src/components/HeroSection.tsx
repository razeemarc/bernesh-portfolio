
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        textRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.8
        }
      );

      // Floating particles animation
      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, index) => {
          gsap.to(particle, {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen bg-dark-900 relative overflow-hidden flex items-center">
      {/* Animated Background Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div ref={textRef} className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Alex</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-neon-blue font-medium">
              Professional Video Editor
            </h2>
          </div>
          
          <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
            Crafting cinematic stories through expert video editing. Specializing in commercials, 
            digital content, and brand narratives that captivate audiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-neon-blue hover:bg-neon-blue/80 text-dark-900 font-semibold px-8 py-3 neon-glow transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-dark-900 px-8 py-3 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div ref={imageRef} className="relative">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-magenta/20 rounded-2xl blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face"
              alt="Alex - Video Editor"
              className="relative w-full h-[500px] object-cover rounded-2xl border-2 border-neon-blue/30"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-neon-magenta rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6 text-neon-blue" />
      </div>
    </section>
  );
};

export default HeroSection;
