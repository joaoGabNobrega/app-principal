import { useState } from "react";
import { ChevronDown, Gift } from "lucide-react";
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
    <div className="overflow-hidden rounded-xl border border-secondary/30 shadow-card bg-card animate-fade-in" style={{ animationDelay: "0.6s" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left focus:outline-none"
      >
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary/20 mb-4">
                <Gift className="h-10 w-10 text-secondary" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-sm font-body font-semibold text-secondary mb-1">
              🎁 Bônus Exclusivo
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Bônus + Extras
            </h3>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-sm font-body font-semibold text-foreground backdrop-blur-sm">
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
