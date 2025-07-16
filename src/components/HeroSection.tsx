import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const backgroundLayer1Ref = useRef<HTMLDivElement>(null);
  const backgroundLayer2Ref = useRef<HTMLDivElement>(null);
  const backgroundLayer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background layers
      gsap.to(backgroundLayer1Ref.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(backgroundLayer2Ref.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });

      gsap.to(backgroundLayer3Ref.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 3
        }
      });

      // Parallax text & image
      gsap.to(textRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(imageRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });

      // Typing animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
          onComplete: () => {
            gsap.to(titleRef.current, {
              duration: 2,
              text: {
                value: " Hi I'm Bernesh",
                delimiter: ""
              },
              ease: "none"
            });
          }
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 2.5,
          ease: "power3.out"
        }
      );

      // Text children animation
      gsap.fromTo(
        textRef.current?.children || [],
        { opacity: 0, y: 50, rotationX: 15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          delay: 3
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: 200,
          scale: 0.8,
          rotationY: 45,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 1
        }
      );

      // Particle animations
      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, index) => {
          gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2
          });

          gsap.to(particle, {
            y: `random(-30, 30)`,
            x: `random(-30, 30)`,
            duration: `random(3, 6)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1
          });

          gsap.to(particle, {
            yPercent: -10 - (index % 3) * 5,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1 + (index % 3) * 0.5
            }
          });

          gsap.to(particle, {
            scale: `random(0.5, 1.2)`,
            opacity: `random(0.2, 0.8)`,
            duration: `random(2, 4)`,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.2
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen professional-gradient relative overflow-hidden flex items-center"
    >
      {/* Parallax Background Layers */}
      <div ref={backgroundLayer1Ref} className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-neon-magenta/5" />
      <div ref={backgroundLayer2Ref} className="absolute inset-0 bg-gradient-to-tr from-transparent via-neon-purple/3 to-transparent" />
      <div ref={backgroundLayer3Ref} className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent" />

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-primary/30' :
              i % 3 === 1 ? 'bg-neon-magenta/20' :
              'bg-neon-purple/25'
            }`}
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
            }}
          />
        ))}
      </div>

      {/* Overlay Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rotate-45 parallax-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-neon-magenta/20 rotate-12 parallax-medium"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-neon-purple/10 rounded-full blur-sm parallax-fast"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div ref={textRef} className="space-y-8">
          <div className="space-y-6">
            <h1
              ref={titleRef}
              className="mt-32 text-6xl lg:text-8xl font-playfair font-bold leading-tight text-shadow"
            >
              {/* Animated via GSAP */}
            </h1>
            <h2
              ref={subtitleRef}
              className="text-3xl lg:text-4xl font-inter font-light bg-gradient-to-r from-primary to-neon-magenta bg-clip-text text-transparent"
            >
              Professional Video Editor
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-lg leading-[1.8] font-light">
            Crafting cinematic stories through expert video editing. Specializing in commercials,
            digital content, and brand narratives that captivate audiences worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-10 py-4 neon-glow transition-all duration-500 transform hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Showreel
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-morphism border-primary/30 text-primary hover:bg-primary/10 px-10 py-4 transition-all duration-500 hover:scale-105"
            >
              Explore Projects
            </Button>
          </div>

          <div className="flex gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div ref={imageRef} className="relative">
          <div className="relative w-full max-w-lg mx-auto mt-32">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-neon-purple to-neon-magenta rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-neon-magenta/20 rounded-2xl animate-spin" style={{ animationDuration: '20s' }}></div>

            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face"
              alt="Bernesh - Professional Video Editor"
              className="relative w-full h-[600px] object-cover rounded-2xl border border-primary/20 shadow-2xl"
            />

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-neon-magenta/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
        <div className="text-sm text-muted-foreground font-medium tracking-wider uppercase">Scroll to explore</div>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
        <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
