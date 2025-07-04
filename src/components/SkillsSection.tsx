
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Adobe Premiere Pro", level: 95, color: "neon-blue" },
    { name: "After Effects", level: 90, color: "neon-magenta" },
    { name: "Final Cut Pro", level: 85, color: "neon-purple" },
    { name: "DaVinci Resolve", level: 80, color: "neon-teal" },
    { name: "Motion Graphics", level: 88, color: "neon-blue" },
    { name: "Color Grading", level: 92, color: "neon-magenta" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      skills.forEach((_, index) => {
        const progressBar = skillsRef.current?.children[index]?.querySelector('.progress-fill');
        const percentage = skillsRef.current?.children[index]?.querySelector('.percentage');
        
        if (progressBar && percentage) {
          gsap.fromTo(
            progressBar,
            { width: '0%' },
            {
              width: `${skills[index].level}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: progressBar,
                start: "top 80%",
                end: "bottom 20%"
              }
            }
          );

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
              snap: { textContent: 1 }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Mastering industry-standard tools to deliver exceptional results. 
              Years of experience with professional editing software and creative workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-dark-700 text-neon-blue border border-neon-blue/30 rounded-full text-sm">
                5+ Years Experience
              </span>
              <span className="px-4 py-2 bg-dark-700 text-neon-magenta border border-neon-magenta/30 rounded-full text-sm">
                500+ Projects
              </span>
              <span className="px-4 py-2 bg-dark-700 text-neon-purple border border-neon-purple/30 rounded-full text-sm">
                Award Winner
              </span>
            </div>
          </div>

          <div ref={skillsRef} className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className={`percentage text-${skill.color} font-bold`}>0%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`progress-fill h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70 rounded-full relative`}
                    style={{ width: '0%' }}
                  >
                    <div className="absolute right-0 top-0 h-full w-1 bg-white/50 animate-pulse"></div>
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
