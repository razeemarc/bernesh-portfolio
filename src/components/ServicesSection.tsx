import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MonitorPlay,
  Youtube,
  Building2,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const parallaxLayer1Ref = useRef<HTMLDivElement>(null);
  const parallaxLayer2Ref = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'TV Commercial Editing',
      description:
        'High-impact commercials that drive results and captivate audiences with cinematic storytelling and professional grade color correction.',
      icon: <MonitorPlay className="w-12 h-12 text-primary" />,
      gradient: 'from-primary to-neon-blue',
      delay: 0,
    },
    {
      title: 'YouTube Content Creation',
      description:
        'Engaging content that hooks viewers from the first second with dynamic pacing, motion graphics, and viral-worthy editing techniques.',
      icon: <Youtube className="w-12 h-12 text-primary" />,
      gradient: 'from-neon-magenta to-neon-purple',
      delay: 0.1,
    },
    {
      title: 'Corporate Storytelling',
      description:
        'Professional corporate videos that communicate your brand message with clarity, impact, and sophisticated visual narratives.',
      icon: <Building2 className="w-12 h-12 text-primary" />,
      gradient: 'from-neon-purple to-primary',
      delay: 0.2,
    },
    {
      title: 'Social Media Content',
      description:
        'Viral-worthy short-form content optimized for Instagram, TikTok, and other platforms with trending techniques and formats.',
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      gradient: 'from-neon-teal to-neon-blue',
      delay: 0.3,
    },
    {
      title: 'Motion Graphics Design',
      description:
        'Custom animated graphics, lower thirds, and visual effects that elevate your content with professional polish.',
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      gradient: 'from-neon-magenta to-neon-teal',
      delay: 0.5,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(backgroundRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Parallax layers
      gsap.to(parallaxLayer1Ref.current, {
        yPercent: -20,
        xPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });

      gsap.to(parallaxLayer2Ref.current, {
        yPercent: -40,
        xPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          skewY: 7,
        },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'bottom 20%',
          },
        }
      );

      // Title parallax
      gsap.to(titleRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Cards animation
      const cards = cardsRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 120,
              scale: 0.8,
              rotationX: 15,
              transformPerspective: 1000,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 1.2,
              ease: 'power3.out',
              delay: services[index].delay,
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Card parallax
          gsap.to(card, {
            yPercent: -10 - (index % 2) * 5,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1 + (index % 3) * 0.3,
            },
          });

          // Hover effects
          const cardElement = card as HTMLElement;
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -15,
              scale: 1.05,
              rotationY: 5,
              boxShadow: '0 25px 50px rgba(0, 212, 255, 0.3)',
              duration: 0.4,
              ease: 'power2.out',
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              rotationY: 0,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              duration: 0.4,
              ease: 'power2.out',
            });
          };

          cardElement.addEventListener('mouseenter', handleMouseEnter);
          cardElement.addEventListener('mouseleave', handleMouseLeave);
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background with parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-card via-background to-card opacity-50"
      ></div>

      {/* Parallax layers */}
      <div
        ref={parallaxLayer1Ref}
        className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
      ></div>
      <div
        ref={parallaxLayer2Ref}
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-neon-magenta/5 rounded-full blur-3xl"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-5xl lg:text-7xl font-playfair font-bold mb-6 text-shadow"
          >
            Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Delivering exceptional video content across all platforms with industry-leading techniques
            and cutting-edge creative vision
          </p>
        </div>

        {/* Services grid */}
        <div 
          ref={cardsRef} 
          className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 [&>*:nth-child(4)]:lg:col-start-2 [&>*:nth-child(4)]:lg:col-span-2 [&>*:nth-child(5)]:lg:col-start-4 [&>*:nth-child(5)]:lg:col-span-2 [&>*:nth-child(1)]:lg:col-span-2 [&>*:nth-child(2)]:lg:col-span-2 [&>*:nth-child(3)]:lg:col-span-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 cursor-pointer overflow-hidden"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Icon section */}
              <div className="relative z-10 mb-8">
               <div className="mb-4 flex justify-center">
  {service.icon}
</div>

               
              </div>

              {/* Content */}
              <div className="relative z-10 ">
                <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300  flex justify-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-muted-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl border border-primary/50 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;