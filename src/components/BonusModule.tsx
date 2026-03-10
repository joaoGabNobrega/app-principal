import { useState } from "react";
import { ChevronDown, Gift, Sparkles, Star } from "lucide-react";
import BonusCard from "./BonusCard";

const bonusMaterials = [
  {
    title: "Detalhes que Encantam",
    description: "Aprenda os acabamentos que fazem toda a diferença",
    pdfUrl: "/pdfs/Detalhes-que-Encantam.pdf",
  },
  {
    title: "As 20 Peças Mais Vendidas de 2025",
    description: "Descubra o que mais vende e fature alto",
    pdfUrl: "/pdfs/As-20-Pecas-Mais-Vendidas-2025.pdf",
  },
  {
    title: "Arte Terapêutica",
    description: "O poder transformador da arte com fio felpudo",
    pdfUrl: "/pdfs/Arte-Terapeutica.pdf",
  },
  {
    title: "Modelos Exclusivos",
    description: "Templates e modelos prontos para você criar",
    pdfUrl: "/pdfs/Modelos-Exclusivos.pdf",
  },
  {
    title: "Método 3 Movimentos",
    description: "A técnica simplificada para iniciantes",
    pdfUrl: "/pdfs/Metodo-3-Movimentos.pdf",
  },
  {
    title: "Fotos que Vendem",
    description: "Como fotografar suas peças para vender mais",
    pdfUrl: "/pdfs/Fotos-que-Vendem.pdf",
  },
];

const BonusModule = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border-2 border-secondary/30 shadow-lg bg-card animate-fade-in relative" style={{ animationDelay: "0.6s" }}>
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left focus:outline-none"
      >
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-secondary/15 via-primary/10 to-secondary/20">
          {/* Decorative floating elements */}
          <div className="absolute top-6 left-8 h-16 w-16 rounded-full bg-secondary/10 blur-xl animate-pulse" />
          <div className="absolute bottom-10 right-12 h-20 w-20 rounded-full bg-primary/10 blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-12 right-24 h-10 w-10 rounded-full bg-accent/10 blur-lg animate-pulse" style={{ animationDelay: "0.5s" }} />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-secondary/25 to-primary/20 mb-3 ring-2 ring-secondary/20">
                <Gift className="h-10 w-10 text-secondary" />
                <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                  <Sparkles className="h-3 w-3 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary/20 px-2.5 py-0.5 text-xs font-body font-bold text-secondary backdrop-blur-sm">
                <Star className="h-3 w-3" />
                EXCLUSIVO
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              🎁 Bônus + Extras
            </h3>
            <p className="font-body text-sm text-muted-foreground mt-0.5">
              Materiais especiais para acelerar seus resultados
            </p>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-sm font-body font-semibold text-foreground backdrop-blur-sm border border-secondary/20">
            {bonusMaterials.length} materiais
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </div>
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-4 sm:p-6 space-y-3">
          {bonusMaterials.map((material, index) => (
            <BonusCard
              key={index}
              title={material.title}
              description={material.description}
              pdfUrl={material.pdfUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BonusModule;
