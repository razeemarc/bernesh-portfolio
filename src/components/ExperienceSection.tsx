import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);

 
  const experiences = [
    {
      id: 1,
      company: "Kuviyam Media Works",
      role: " Video Editor ",
      duration: "2024 - Present",
      location: "Chennai, IN",
      logo: "🎬",
      description: "Creating cinematic content and leading video editing projects for major brands and digital platforms.",
      color: "from-purple-500 to-blue-500",
      accent: "#8b5cf6"
    },
    {
      id: 2,
      company: "Tinyvers",
      role: "Product Video Editor & Social Media Manager",
      duration: "2023 - 2024",
      location: "Chennai, IN",
      logo: "📹",
      description: "Specialized in post-production editing for documentaries, corporate videos, and social media content.",
      color: "from-teal-500 to-emerald-500",
      accent: "#14b8a6"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="experience-title text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-r from-purple-500 to-teal-500 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="experience-title text-base text-muted-foreground max-w-2xl mx-auto">
            My professional journey in video editing and creative storytelling
          </p>
        </div>

        {/* Experience Grid */}
        <div className="experience-grid max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card group">
              <div className="relative">
                {/* Glass morphism card */}
                <div className="relative backdrop-blur-lg bg-white/5 dark:bg-white/3 border border-white/10 dark:border-white/5 rounded-3xl p-8 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 dark:hover:bg-white/10 hover:backdrop-blur-xl hover:border-white/20 dark:hover:border-white/15">
                  
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-purple-500/50 via-transparent to-teal-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="rounded-3xl bg-background/80 h-full w-full" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                    
                    {/* Company Logo with glass effect */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl shadow-xl backdrop-blur-sm border border-white/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                        {/* Glass shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 transform transition-transform duration-300 group-hover:rotate-12">
                          {exp.logo}
                        </div>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                            {exp.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-col md:items-end gap-3 mt-4 md:mt-0">
                          <div className="flex items-center gap-2 text-muted-foreground backdrop-blur-sm bg-white/5 dark:bg-white/3 border border-white/10 dark:border-white/5 px-4 py-2 rounded-full hover:bg-white/15 dark:hover:bg-white/8 transition-colors duration-300">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground backdrop-blur-sm bg-white/5 dark:bg-white/3 border border-white/10 dark:border-white/5 px-4 py-2 rounded-full hover:bg-white/15 dark:hover:bg-white/8 transition-colors duration-300">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/80 text-base leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills/Tags with glass effect */}
                      <div className="flex flex-wrap gap-2">
                        {['Video Editing', 'Post-Production', 'Color Grading'].map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 text-sm backdrop-blur-sm bg-white/5 dark:bg-white/3 border border-white/10 dark:border-white/5 rounded-full text-foreground/70 hover:bg-white/15 dark:hover:bg-white/8 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Animated progress bar */}
                      <div className="mt-4 h-1 bg-white/5 dark:bg-white/3 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${exp.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Status with enhanced glass effect */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 shadow-lg hover:shadow-green-500/40 hover:scale-105 transition-all duration-300">
            <div className="relative">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping" />
            </div>
            <span className="text-foreground font-medium text-base">Available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;