import { Lock, Clock } from "lucide-react";

interface LockedModuleCardProps {
  title: string;
  videoCount: number;
  moduleNumber: number;
  releaseMessage: string;
}

const LockedModuleCard = ({ title, videoCount, moduleNumber, releaseMessage }: LockedModuleCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-card bg-card animate-fade-in opacity-75" style={{ animationDelay: `${moduleNumber * 0.15}s` }}>
      <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-muted-foreground/10 mb-3">
              <Lock className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-body text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{releaseMessage}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-sm font-body font-semibold text-muted-foreground mb-1">
            Módulo {moduleNumber}
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
            {title}
          </h3>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-sm font-body font-semibold text-muted-foreground backdrop-blur-sm">
          <Lock className="h-3.5 w-3.5" />
          {videoCount} aulas
        </div>
      </div>
    </div>
  );
};

export default LockedModuleCard;
