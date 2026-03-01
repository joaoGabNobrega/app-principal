import { FileText, Download, ExternalLink } from "lucide-react";

interface BonusCardProps {
  title: string;
  description: string;
  pdfUrl: string;
  index: number;
}

const BonusCard = ({ title, description, pdfUrl, index }: BonusCardProps) => {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:shadow-card hover:border-primary/30"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary transition-transform group-hover:scale-110">
        <FileText className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-foreground truncate">
          {title}
        </p>
        <p className="text-sm text-muted-foreground truncate">{description}</p>
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
    </a>
  );
};

export default BonusCard;
