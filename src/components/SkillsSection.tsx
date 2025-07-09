
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Zap, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const parallaxBg1Ref = useRef<HTMLDivElement>(null);
  const parallaxBg2Ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const skills = [
    { name: "Adobe Premiere Pro", level: 98, color: "primary", icon: "🎬" },
    { name: "After Effects", level: 95, color: "neon-magenta", icon: "✨" },
    { name: "Final Cut Pro", level: 90, color: "neon-purple", icon: "🎭" },
    { name: "DaVinci Resolve", level: 88, color: "neon-teal", icon: "🎨" },
    { name: "Motion Graphics", level: 92, color: "primary", icon: "🎪" },
    { name: "Color Grading", level: 96, color: "neon-magenta", icon: "🌈" }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "2+", label: "Years Experience", icon: Zap },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Happy Clients", icon: Award }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Advanced parallax background effects
      gsap.to(parallaxBg1Ref.current, {
        yPercent: -25,
        xPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(parallaxBg2Ref.current, {
        yPercent: -35,
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // Parallax for title
      gsap.to(titleRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Skills animation with enhanced effects and parallax
      skills.forEach((_, index) => {
        const skillContainer = skillsRef.current?.children[index];
        const progressBar = skillContainer?.querySelector('.progress-fill');
        const percentage = skillContainer?.querySelector('.percentage');
        const skillName = skillContainer?.querySelector('.skill-name');
        const skillIcon = skillContainer?.querySelector('.skill-icon');
        
        if (progressBar && percentage && skillName && skillIcon) {
          // Parallax effect for skill container
          gsap.to(skillContainer, {
            yPercent: -5 - (index % 2) * 3,
            ease: "none",
            scrollTrigger: {
              trigger: skillContainer,
              start: "top bottom",
              end: "bottom top",
              scrub: 1 + (index % 3) * 0.2
            }
          });

          // Icon animation
          gsap.fromTo(
            skillIcon,
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: skillContainer,
                start: "top 80%",
                end: "bottom 20%"
              },
              delay: index * 0.1
            }
          );

          // Skill name animation
          gsap.fromTo(
            skillName,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: skillContainer,
                start: "top 80%",
                end: "bottom 20%"
              },
              delay: index * 0.1 + 0.2
            }
          );

          // Enhanced progress bar animation
          gsap.fromTo(
            progressBar,
            { 
              width: '0%',
              opacity: 0
            },
            {
              width: `${skills[index].level}%`,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: progressBar,
                start: "top 80%",
                end: "bottom 20%"
              },
              delay: index * 0.1 + 0.4
            }
          );

          // Animated counter
          gsap.fromTo(
            percentage,
            { textContent: "0%" },
            {
              textContent: `${skills[index].level}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: percentage,
                start: "top 80%",
                end: "bottom 20%"
              },
              snap: { textContent: 1 },
              delay: index * 0.1 + 0.4
            }
          );
        }
      });

      // Stats animation with stagger and parallax
      gsap.fromTo(
        statsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 50, 
          scale: 0.9 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%"
          }
        }
      );

      // Parallax for stats
      gsap.to(statsRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 professional-gradient relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        ref={parallaxBg1Ref}
        className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      ></div>
      <div 
        ref={parallaxBg2Ref}
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 ref={titleRef} className="text-5xl lg:text-6xl font-playfair font-bold mb-8 text-shadow">
              Technical <span className="gradient-text">Mastery</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-[1.8] font-light">
              Years of dedicated experience with industry-standard tools, delivering 
              exceptional results through technical excellence and creative vision.
            </p>
            
            {/* Achievement stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                      <div className="text-sm text-muted-foreground font-medium">{achievement.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={skillsRef} className="space-y-10">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="skill-icon text-2xl">{skill.icon}</span>
                    <h3 className="skill-name text-lg font-semibold text-foreground">{skill.name}</h3>
                  </div>
                  <span className={`percentage text-${skill.color} font-bold text-lg`}>0%</span>
                </div>
                <div className="relative">
                  <div className="w-full bg-muted/30 rounded-full h-4 overflow-hidden backdrop-blur-sm">
                    <div 
                      className={`progress-fill h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70 rounded-full relative`}
                      style={{ width: '0%' }}
                    >
                      <div className="absolute right-0 top-0 h-full w-2 bg-white/50 animate-pulse rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full opacity-50 blur-sm">
                    <div className={`h-full bg-gradient-to-r from-${skill.color}/30 to-${skill.color}/10 rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
