import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  description?: string;
  videoUrl: string;
  index: number;
}

const VideoCard = ({ title, description, videoUrl, index }: VideoCardProps) => {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:shadow-card hover:border-primary/30"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-warm text-primary-foreground transition-transform group-hover:scale-110">
        <Play className="h-5 w-5 ml-0.5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-foreground truncate">
          Aula {index + 1} – {title}
        </p>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}
      </div>
    </a>
  );
};

export default VideoCard;
