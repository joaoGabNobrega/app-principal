import { MapPin, ExternalLink, Star, Truck } from "lucide-react";

const SupplierModule = () => {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-accent/40 shadow-lg bg-gradient-to-br from-accent/5 via-card to-primary/5 animate-fade-in relative" style={{ animationDelay: "0.75s" }}>
      {/* Highlight badge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary" />
      
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/15 ring-2 ring-accent/20">
            <Truck className="h-8 w-8 text-accent" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-body font-bold text-accent">
                <Star className="h-3 w-3" />
                DESTAQUE
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1.5">
              📋 Lista de Fornecedores
            </h3>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
              Lista completa com os melhores fornecedores de fio felpudo e chenille para artesanato. Economize tempo e dinheiro comprando nos lugares certos!
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="/pdfs/Lista-de-Fornecedores.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-body font-bold text-accent-foreground text-sm shadow-md transition-all hover:shadow-lg hover:scale-105 active:scale-100"
          >
            <MapPin className="h-4 w-4" />
            Acessar Lista
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupplierModule;
