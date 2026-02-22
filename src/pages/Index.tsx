import heroBanner from "@/assets/hero-banner.jpg";
import moduleFlores from "@/assets/module-flores.jpg";
import moduleAnimais from "@/assets/module-animais.jpg";
import moduleChaveiros from "@/assets/module-chaveiros.jpg";
import ModuleCard from "@/components/ModuleCard";
import { Sparkles } from "lucide-react";

const modules = [
  {
    title: "Flores de Arte Felpuda",
    cover: moduleFlores,
    videos: [
      { title: "Vaso Flor Tulipa", url: "https://drive.google.com/file/d/17pIOv1t1FEbq9OPc84qmJxO0v7FY36wu/view?usp=sharing" },
      { title: "Flor de Lotus Iluminada", url: "https://drive.google.com/file/d/1kVaRKeRB9ccWHmiQe7WLxOuA3co631SV/view?usp=sharing" },
      { title: "Vaso Flor de Girassol", url: "https://drive.google.com/file/d/1d8bVAb6DHwRKgIf9spvJbn1VuInVDyhe/view?usp=sharing" },
      { title: "Vaso de Lírio do Vale", url: "https://drive.google.com/file/d/1kQqzT67FKaI41puVGX1SsvISRtKlzx6b/view?usp=sharing" },
      { title: "Luminária de Flor", url: "https://drive.google.com/file/d/1sNdtrVGJ4JPL7mahKCw69pg863-M9ZXy/view?usp=sharing" },
      { title: "Lavanda", url: "https://drive.google.com/file/d/1TCuRfUktq9fPtJSsTR-LxQUO6rHwBUh9/view?usp=sharing" },
      { title: "Flor de Lírio", url: "https://drive.google.com/file/d/1hCi3BzV620rkR9IkurULvTxP740ACiER/view?usp=sharing" },
      { title: "Orquídea", url: "https://drive.google.com/file/d/1BcCD6a3FSgWzICboq1J_y4M6YaSz9vNG/view?usp=sharing" },
    ],
  },
  {
    title: "Animais de Arte Felpuda",
    cover: moduleAnimais,
    videos: [
      { title: "Tartaruga Estrela", url: "https://drive.google.com/file/d/1yI4o4PR3_7XTcIjh6xK7ttv4qXpfnrxb/view?usp=sharing" },
      { title: "Calopsita", url: "https://drive.google.com/file/d/1AUUn5mzL53VZm7iC63GOCOJPuI08kEbj/view?usp=sharing" },
      { title: "Coelho", url: "https://drive.google.com/file/d/1J4C0rj86-qQl1Zxj-dHwrGGaa718fMkv/view?usp=sharing" },
    ],
  },
  {
    title: "Chaveiros de Arte Felpuda",
    cover: moduleChaveiros,
    videos: [
      { title: "Chaveiro Gato", url: "https://drive.google.com/file/d/1B7eGk3N6Pcf0BcjJLJZNpNydsy8eGIYE/view?usp=sharing" },
      { title: "Chaveiro de Frutas", url: "https://drive.google.com/file/d/1IYInGk1KOHpYo_QVb4UcONQaeOtw1ZNX/view?usp=sharing" },
      { title: "Chaveiro de Coração", url: "https://drive.google.com/file/d/1qVJpyAMsW1306DOsLojVL3G33LTcDWZ1/view?usp=sharing" },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Universo Felpudo - Arte com fio felpudo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-body font-semibold text-primary-foreground backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4" />
            Curso Completo
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-4 max-w-3xl leading-tight">
            Universo Felpudo
          </h1>
          <p className="font-body text-lg sm:text-xl text-primary-foreground/90 max-w-xl">
            Transforme fio felpudo em peças encantadoras e gere renda extra com suas próprias mãos
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Transforme Fio Felpudo em Renda
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-base sm:text-lg">
          Descubra como criar peças incríveis usando fio felpudo. 
            Cada aula foi pensada para te guiar passo a passo, do zero até peças prontas para vender. 
            Aprenda uma arte que encanta, conquista clientes e transforma sua criatividade em uma fonte de renda real. 
            Bem-vinda ao Universo Felpudo! ✨
          </p>
        </div>
      </section>

      {/* Modules Section */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
            Módulos do Curso
          </h2>
          {modules.map((mod, index) => (
            <ModuleCard
              key={index}
              title={mod.title}
              coverImage={mod.cover}
              videos={mod.videos}
              moduleNumber={index + 1}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="font-body text-sm text-muted-foreground">
          © 2026 Universo Felpudo. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
