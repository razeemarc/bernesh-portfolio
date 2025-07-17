import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Zap, Star, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Adobe Premiere Pro", level: 98, color: "purple", icon: "🎬" },
    { name: "After Effects", level: 95, color: "pink", icon: "✨" },
    { name: "Final Cut Pro", level: 90, color: "blue", icon: "🎭" },
    { name: "DaVinci Resolve", level: 88, color: "teal", icon: "🎨" },
    { name: "Motion Graphics", level: 92, color: "purple", icon: "🎪" },
    { name: "Color Grading", level: 96, color: "pink", icon: "🌈" }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "2+", label: "Years Experience", icon: Zap },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Happy Clients", icon: Users }
  ];

  const skillCategories = [
    {
      title: "Video Editing",
      skills: [
        "Advanced editing in Adobe Premiere Pro",
        "Creative transitions & montage editing",
        "Cut & sync, narrative editing",
        "Project management & workflow optimization"
      ]
    },
    {
      title: "Post-Production",
      skills: [
        "Color correction & grading in DaVinci Resolve",
        "Motion graphics in After Effects",
        "Audio editing & sound design",
        "Export optimization for different platforms"
      ]
    },
    {
      title: "Creative Design",
      skills: [
        "Graphic design in Adobe Photoshop",
        "Logo design in Adobe Illustrator",
        "Thumbnail & poster creation",
        "Visual storytelling & composition"
      ]
    },
    {
      title: "Technical Expertise",
      skills: [
        "File formats, codecs, export settings",
        "DIT — Data management for high-format footage",
        "Workflow organization & time management",
        "Cross-platform compatibility"
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill bars
      skills.forEach((skill, index) => {
        const skillContainer = skillsRef.current?.children[index];
        const progressBar = skillContainer?.querySelector('.progress-fill');
        const percentage = skillContainer?.querySelector('.percentage');
        const skillIcon = skillContainer?.querySelector('.skill-icon');
        const skillName = skillContainer?.querySelector('.skill-name');

        if (progressBar && percentage && skillIcon && skillName) {
          // Icon animation
          gsap.fromTo(skillIcon, 
            { scale: 0, rotation: -180 }, 
            {
              scale: 1, 
              rotation: 0, 
              duration: 0.6, 
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: skillContainer,
                start: "top 80%"
              },
              delay: index * 0.1
            }
          );

          // Name animation
          gsap.fromTo(skillName, 
            { opacity: 0, x: -30 }, 
            {
              opacity: 1, 
              x: 0, 
              duration: 0.6, 
              ease: "power2.out",
              scrollTrigger: {
                trigger: skillContainer,
                start: "top 80%"
              },
              delay: index * 0.1 + 0.2
            }
          );

          // Progress bar animation
          gsap.fromTo(progressBar, 
            { width: '0%' }, 
            {
              width: `${skill.level}%`,
              duration: 1.2, 
              ease: "power2.out",
              scrollTrigger: {
                trigger: progressBar,
                start: "top 80%"
              },
              delay: index * 0.1 + 0.4
            }
          );

          // Percentage counter animation
          gsap.fromTo(percentage, 
            { textContent: "0%" }, 
            {
              textContent: `${skill.level}%`,
              duration: 1.2, 
              ease: "power2.out",
              scrollTrigger: {
                trigger: percentage,
                start: "top 80%"
              },
              snap: { textContent: 1 },
              delay: index * 0.1 + 0.4
            }
          );
        }
      });

      // Animate stats
      gsap.fromTo(statsRef.current?.children || [], 
        { opacity: 0, y: 30, scale: 0.9 }, 
        {
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-teal-500/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-purple-500 to-teal-500 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional video editing skills with years of experience in industry-standard tools
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Stats and Categories */}
          <div className="space-y-12">
            {/* Achievement Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="group p-6 backdrop-blur-lg bg-white/5 dark:bg-white/3 border border-white/10 dark:border-white/5 rounded-2xl hover:bg-white/10 dark:hover:bg-white/8 hover:border-white/20 dark:hover:border-white/15 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Categories */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Professional Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <div key={index} className="backdrop-blur-lg bg-white/5 dark:bg-white/3 border border-white/10 dark:border-white/5 rounded-2xl p-6 hover:bg-white/10 dark:hover:bg-white/8 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full"></div>
                      {category.title}
                    </h4>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skill Bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Technical Proficiency</h3>
            <div ref={skillsRef} className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 dark:bg-white/3 border border-white/10 dark:border-white/5 rounded-2xl p-6 hover:bg-white/10 dark:hover:bg-white/8 transition-all duration-300">
                  {/* Skill Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <span className="skill-icon text-2xl">{skill.icon}</span>
                      <h4 className="skill-name text-lg font-semibold text-foreground">{skill.name}</h4>
                    </div>
                    <span className={`percentage text-lg font-bold bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600 bg-clip-text text-transparent`}>
                      0%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-white/10 dark:bg-white/5 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`progress-fill h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full relative`}
                        style={{ width: '0%' }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Skill level indicator */}
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="backdrop-blur-lg bg-white/5 dark:bg-white/3 border border-white/10 dark:border-white/5 rounded-2xl p-6 mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Always Learning
              </h4>
              <p className="text-sm text-muted-foreground">
                Constantly updating skills with the latest industry trends, software updates, and creative techniques to deliver cutting-edge video content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;