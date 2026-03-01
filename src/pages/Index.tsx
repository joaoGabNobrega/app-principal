import heroBanner from "@/assets/hero-banner.jpg";
import moduleFlores from "@/assets/module-flores.jpg";
import moduleAnimais from "@/assets/module-animais.jpg";
import moduleChaveiros from "@/assets/module-chaveiros.jpg";
import ModuleCard from "@/components/ModuleCard";
import BonusModule from "@/components/BonusModule";
import { Sparkles, BookOpen, Award, Heart, PlayCircle } from "lucide-react";

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

const totalVideos = modules.reduce((acc, mod) => acc + mod.videos.length, 0);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav Bar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-4xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-bold text-foreground">Universo Felpudo</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-body text-muted-foreground">
            <PlayCircle className="h-4 w-4" />
            <span>{totalVideos} aulas</span>
          </div>
        </div>
      </nav>

      {/* Hero / Welcome Section */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Universo Felpudo - Arte com fio felpudo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-body font-semibold text-primary-foreground backdrop-blur-sm mb-4">
            <Award className="h-4 w-4" />
            Área do Aluno
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-3 max-w-3xl leading-tight">
            Bem-vinda ao Universo Felpudo ✨
          </h1>
          <p className="font-body text-base sm:text-lg text-primary-foreground/90 max-w-lg">
            Sua jornada para transformar fio felpudo em peças lucrativas começa aqui
          </p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-primary/15 bg-primary/5 p-6 sm:p-8 text-center">
            <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
              Que bom ter você aqui! 💛
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base max-w-xl mx-auto">
              Este curso foi feito com muito carinho para te ensinar, passo a passo, a criar peças lindas com fio felpudo e transformar essa arte em uma fonte de renda real. 
              Assista às aulas no seu ritmo, pratique e veja suas mãos criarem verdadeiras obras de arte. Estou com você em cada etapa! 🧶
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-4 pb-10">
        <div className="mx-auto max-w-3xl grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="font-display text-2xl font-bold text-primary">{modules.length + 1}</p>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Módulos</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="font-display text-2xl font-bold text-primary">{totalVideos}</p>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Videoaulas</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="font-display text-2xl font-bold text-primary">6</p>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Bônus PDF</p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="px-4 pb-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Seus Módulos
            </h2>
          </div>
          {modules.map((mod, index) => (
            <ModuleCard
              key={index}
              title={mod.title}
              coverImage={mod.cover}
              videos={mod.videos}
              moduleNumber={index + 1}
            />
          ))}
          <BonusModule />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="font-body text-sm text-muted-foreground">
          © 2026 Universo Felpudo · Área exclusiva para alunos
        </p>
      </footer>
    </div>
  );
};

export default Index;
