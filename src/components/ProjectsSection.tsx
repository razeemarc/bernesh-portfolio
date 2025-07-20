import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{id: number, title: string, videoUrl: string} | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercials', label: 'TV Commercials' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'reels', label: 'Reels' },
    { id: 'corporate', label: 'Corporate' }
  ];
  
  const videos = [
    {
      id: "NPlTdIcD40w",
      title: "Short Video 1",
    },
    {
      id: "KzccxqWoAqo",
      title: "Short Video 2",
    },
    // Add more videos as needed
  ];
  
  const projects = [
    {
      id: 1,
      title: "Nike Brand Commercial",
      category: "commercials",
      videoUrl: "https://www.youtube.com/embed/NPlTdIcD40w?autoplay=1&mute=1",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      description: "High-energy commercial showcasing athletic performance"
    },
    {
      id: 2,
      title: "Tech Product Launch",
      category: "youtube",
      videoUrl: "https://www.youtube.com/embed/KzccxqWoAqo?autoplay=1&mute=1",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      description: "Product demonstration and feature highlights"
    },
    {
      id: 3,
      title: "Instagram Fitness Reel",
      category: "reels",
      videoUrl: "https://www.youtube.com/embed/NPlTdIcD40w?autoplay=1&mute=1",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      description: "Short-form content for social media engagement"
    },
    {
      id: 4,
      title: "Corporate Training Video",
      category: "corporate",
      videoUrl: "https://www.youtube.com/embed/KzccxqWoAqo?autoplay=1&mute=1",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      description: "Professional training content for enterprise"
    },
    {
      id: 5,
      title: "Food Brand Commercial",
      category: "commercials",
      videoUrl: "https://www.youtube.com/embed/NPlTdIcD40w?autoplay=1&mute=1",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      description: "Appetizing food photography and motion graphics"
    },
    {
      id: 6,
      title: "Gaming Channel Intro",
      category: "youtube",
      videoUrl: "https://www.youtube.com/embed/KzccxqWoAqo?autoplay=1&mute=1",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      description: "Dynamic intro sequence with motion graphics"
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        projectsRef.current?.children || [],
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setPlayingVideoId(null);
  };

  const handlePlayVideo = (project: typeof projects[0]) => {
    setSelectedVideo({
      id: project.id,
      title: project.title,
      videoUrl: project.videoUrl
    });
    setShowVideoModal(true);
    setPlayingVideoId(project.id);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
    setSelectedVideo(null);
    setPlayingVideoId(null);
  };

  // Close modal when clicking outside
  const handleModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <>
      <section ref={sectionRef} className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A showcase of my recent work across different platforms and industries
          </p>

          {/* Filter Tabs */}
          <div ref={tabsRef} className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground professional-glow'
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => handlePlayVideo(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
                        ▶ Play Video
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleModalBackdropClick}
        >
          {/* Check if it's a reels video for vertical layout */}
          {filteredProjects.find(p => p.id === selectedVideo.id)?.category === 'reels' ? (
            // Reels Modal (Vertical/Mobile Style)
            <div className="relative w-full max-w-sm mx-4 h-[80vh] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
              {/* Close Button for Reels */}
              <Button
                onClick={handleCloseModal}
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 z-10 rounded-full w-8 h-8 p-0 bg-black/50 border-white/30 text-white hover:bg-black/70"
              >
                <X className="w-4 h-4" />
              </Button>
              
              {/* Reels Video Container */}
              <div className="relative w-full h-full">
                <iframe
                  className="absolute inset-0 w-full h-full object-cover"
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              
              {/* Reels Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-white font-semibold text-sm mb-1">
                  {selectedVideo.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full font-medium">
                    REEL
                  </span>
                  <span className="text-white/80 text-xs">
                    {filteredProjects.find(p => p.id === selectedVideo.id)?.description}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            // Regular Modal (Horizontal/Desktop Style)
            <div className="relative w-full max-w-4xl mx-4 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {selectedVideo.title}
                </h3>
                <Button
                  onClick={handleCloseModal}
                  variant="outline"
                  size="sm"
                  className="rounded-full w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Video Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectsSection;