import { useState } from "react";
import { ChevronDown } from "lucide-react";
import VideoCard from "./VideoCard";

interface Video {
  title: string;
  description?: string;
  url: string;
}

interface ModuleCardProps {
  title: string;
  coverImage: string;
  videos: Video[];
  moduleNumber: number;
}

const ModuleCard = ({ title, coverImage, videos, moduleNumber }: ModuleCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-card bg-card animate-fade-in" style={{ animationDelay: `${moduleNumber * 0.15}s` }}>
      {/* Module Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left focus:outline-none"
      >
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-sm font-body font-semibold text-primary-foreground/80 mb-1">
              Módulo {moduleNumber}
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground">
              {title}
            </h3>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-sm font-body font-semibold text-foreground backdrop-blur-sm">
            {videos.length} aulas
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </div>
        </div>
      </button>

      {/* Video List */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-4 sm:p-6 space-y-3">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              videoUrl={video.url}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
