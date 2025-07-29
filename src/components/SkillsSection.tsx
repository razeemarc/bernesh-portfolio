import { useEffect, useRef } from 'react';
import { Zap, Star, Code, Palette, Film, Settings } from 'lucide-react';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { 
      name: "Adobe Premiere Pro", 
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzJEMUYzRiIvPgo8cGF0aCBkPSJNMTEuNSAyNi41VjEzLjVIMTcuNUMxOC43OTMgMTMuNSAyMC4wMzUgMTMuOTIzIDIxLjA2NyAxNC43MTFDMjIuMDk5IDE1LjQ5OSAyMi44NjMgMTYuNjA3IDIzLjI1OCAxNy44N0MyMy42NTMgMTkuMTMzIDIzLjY1NyAyMC40OTkgMjMuMjcxIDIxLjc2M0MyMi44ODUgMjMuMDI4IDIyLjEyNyAyNC4xNCAxNS4xIDI0LjkzVjI2LjVIMTEuNVoiIGZpbGw9IiM5OTk5RkYiLz4KPC9zdmc+" 
    },
    { 
      name: "After Effects", 
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzJEMUYzRiIvPgo8cGF0aCBkPSJNMTIgMjZWMTRIMTYuNUwxOS41IDIyLjVMMjIuNSAxNEgyN1YyNkgyMy41VjE4LjVMMjEgMjZIMThMMTUuNSAxOC41VjI2SDEyWiIgZmlsbD0iIzk5OTlGRiIvPgo8L3N2Zz4=" 
    },
    { 
      name: "Final Cut Pro", 
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzI0MjQyNCIvPgo8cGF0aCBkPSJNMjAgOEw4IDI0SDE2TDIwIDI4TDI0IDI0SDMyTDIwIDhaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0xNiAyNEwyMCAyOEwyNCAyNEgxNloiIGZpbGw9IiM5OTk5RkYiLz4KPC9zdmc+" 
    },
    { 
      name: "DaVinci Resolve", 
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMxQTFBMUEiLz4KPHBhdGggZD0iTTIwIDhDMjUuNTIyOCA4IDMwIDEyLjQ3NzIgMzAgMThDMzAgMjMuNTIyOCAyNS41MjI4IDI4IDIwIDI4QzE0LjQ3NzIgMjggMTAgMjMuNTIyOCAxMCAxOEMxMCAxMi40NzcyIDE0LjQ3NzIgOCAyMCA4WiIgZmlsbD0iIzAwRDRBQSIvPgo8cGF0aCBkPSJNMjAgMTJDMjIuNzY3NCAxMiAyNSAxNC4yMzI2IDI1IDE3QzI1IDE5Ljc2NzQgMjIuNzY3NCAyMiAyMCAyMkMxNy4yMzI2IDIyIDE1IDE5Ljc2NzQgMTUgMTdDMTUgMTQuMjMyNiAxNy4yMzI2IDEyIDIwIDEyWiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4=" 
    },
    { 
      name: "Photoshop", 
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzAwMUUzNiIvPgo8cGF0aCBkPSJNMTIgMjhWMTJIMThDMjAuNzYxNCAxMiAyMyAxNC4yMzg2IDIzIDE3QzIzIDE5Ljc2MTQgMjAuNzYxNCAyMiAxOCAyMkgxNVYyOEgxMlpNMTUgMTVWMTlIMThDMTkuMTA0NiAxOSAyMCAxOC4xMDQ2IDIwIDE3QzIwIDE1Ljg5NTQgMTkuMTA0NiAxNSAxOCAxNUgxNVoiIGZpbGw9IiMzMUE4RkYiLz4KPC9zdmc+" 
    },
    { 
      name: "Illustrator", 
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzMzMEAwMCIvPgo8cGF0aCBkPSJNMTYgMjhMMTggMjJIMjJMMjQgMjhIMjZMMjAgMTJIMTRMMjYgMjhIMTZaTTE4LjggMjBIMjEuMkwyMCAxNi44TDE4LjggMjBaIiBmaWxsPSIjRkY5QTAwIi8+Cjwvc3ZnPg==" 
    }
  ];

  const skillCategories = [
    {
      title: "Video Editing",
      icon: <Film className="w-5 h-5" />,
      color: "from-primary to-primary/80",
      skills: [
        "Advanced editing in Adobe Premiere Pro",
        "Creative transitions & montage editing",
        "Cut & sync, narrative editing",
        "Project management & workflow optimization"
      ]
    },
    {
      title: "Post-Production",
      icon: <Settings className="w-5 h-5" />,
      color: "from-primary to-neon-magenta",
      skills: [
        "Color correction & grading in DaVinci Resolve",
        "Motion graphics in After Effects",
        "Audio editing & sound design",
        "Export optimization for different platforms"
      ]
    },
   
    {
      title: "Technical Expertise",
      icon: <Code className="w-5 h-5" />,
      color: "from-neon-purple to-primary",
      skills: [
        "File formats, codecs, export settings",
        "DIT — Data management for high-format footage",
        "Workflow organization & time management",
        "Cross-platform compatibility"
      ]
    }
  ];

  useEffect(() => {
    // No animations needed for simple skills display
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-background text-foreground relative overflow-hidden"
    >
      {/* Professional gradient background matching hero */}
      <div className="absolute inset-0 professional-gradient" />
      
      {/* Subtle overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-neon-magenta/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-neon-purple/3 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Skills &{' '}
            <span className="bg-gradient-to-r from-primary to-neon-magenta bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional video editing expertise with years of experience in industry-standard tools and creative workflows
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 items-start">
          {/* Clean Skills Grid */}
          <div className="w-full">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">My Skills</h3>
              <p className="text-muted-foreground">Technologies and tools I work with</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="glass-morphism border-primary/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-card/50 flex items-center justify-center p-2 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          const img = e.currentTarget;
                          const fallback = img.nextElementSibling as HTMLElement;
                          img.style.display = 'none';
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-neon-magenta rounded-xl flex items-center justify-center text-white font-bold text-lg hidden">
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold leading-tight">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

           {/* Skill Categories */}
<div className="mt-16">
  <div className="mb-8 text-center">
    <h3 className="text-2xl font-bold mb-2">Professional Skills</h3>
    <p className="text-muted-foreground">
      Comprehensive expertise across all aspects of video production
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {skillCategories.map((category, index) => (
      <div
        key={index}
        className="glass-morphism border-primary/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
      >
        <div className="flex items-center gap-3 mb-5">
          <div
            className={`p-2 bg-gradient-to-r ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
          >
            {category.icon}
          </div>
          <h4 className="text-xl font-semibold">
            {category.title}
          </h4>
        </div>
        <ul className="space-y-3">
          {category.skills.map((skill, skillIndex) => (
            <li
              key={skillIndex}
              className="flex items-start gap-3 group/item"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-neon-magenta rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
              <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-200">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

            {/* Additional Info */}
            <div className="glass-morphism border-primary/20 rounded-2xl p-6 mt-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <div className="p-2 bg-gradient-to-r from-primary to-neon-magenta rounded-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Always Learning</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center">
                Constantly updating skills with the latest industry trends, software updates, and creative techniques to deliver cutting-edge video content that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;