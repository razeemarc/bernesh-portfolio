
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "TV Commercial Editing",
      description: "High-impact commercials that drive results and captivate audiences with cinematic storytelling.",
      icon: "📺"
    },
    {
      title: "YouTube Video Editing",
      description: "Engaging content that hooks viewers from the first second and keeps them watching till the end.",
      icon: "🎬"
    },
    {
      title: "Corporate Content",
      description: "Professional corporate videos that communicate your brand message with clarity and impact.",
      icon: "🏢"
    },
    {
      title: "Instagram Reels",
      description: "Viral-worthy short-form content optimized for social media engagement and brand growth.",
      icon: "📱"
    },
    {
      title: "Content Repurposing",
      description: "Maximize your content's reach by adapting it for multiple platforms and formats.",
      icon: "♻️"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl lg:text-5xl font-playfair font-bold text-center mb-4"
        >
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Delivering exceptional video content across all platforms and formats
        </p>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="text-4xl mb-6 group-hover:animate-float">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-neon-blue transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
              <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-magenta group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
