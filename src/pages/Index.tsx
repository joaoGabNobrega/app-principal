import heroBanner from "@/assets/hero-banner.jpg";
import moduleFlores from "@/assets/module-flores.jpg";
import moduleVariadas from "@/assets/module-variadas.jpg";
import moduleAnimais from "@/assets/module-animais.jpg";
import moduleChaveiros from "@/assets/module-chaveiros.jpg";
import ModuleCard from "@/components/ModuleCard";
import BonusModule from "@/components/BonusModule";
import { Sparkles, BookOpen, Award, Heart, PlayCircle, Clock } from "lucide-react";

const modules = [
  {
    title: "Vídeo Aulas - Fio Felpudo",
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
      { title: "Aula 9", url: "https://drive.google.com/file/d/11szENFkHOA7TvHk5kM8C3a6OYX-AKt_U/view?usp=drive_link" },
      { title: "Aula 10", url: "https://drive.google.com/file/d/1iHKJUEj2EPcnBKhIxvsiPiT-aV5jcsXF/view?usp=drive_link" },
      { title: "Aula 11", url: "https://drive.google.com/file/d/1rkHZyNFyBnuFAmrL89t4rnyBWDNEEUqz/view?usp=drive_link" },
      { title: "Aula 12", url: "https://drive.google.com/file/d/1nJMMd6aUh7vOOgZZrL8K1qICUTaEqq4-/view?usp=drive_link" },
      { title: "Aula 13", url: "https://drive.google.com/file/d/1tC6Oltq4CVTVCG0zF3hAySROeKM4eZHE/view?usp=drive_link" },
      { title: "Aula 14", url: "https://drive.google.com/file/d/1FhVqGTGXfBMSHdwfsY4---5qFUJSAShT/view?usp=drive_link" },
      { title: "Aula 15", url: "https://drive.google.com/file/d/1DGTC_-nM58YemMQF8PgyTXs5iXz_jjHL/view?usp=drive_link" },
      { title: "Aula 16", url: "https://drive.google.com/file/d/1s6bd5T2PmJgRFsm_e-5Oekxlo6EIfhY-/view?usp=drive_link" },
      { title: "Aula 17", url: "https://drive.google.com/file/d/1G1JRzcTGq480LCB_GRDw-hhxG933bIkv/view?usp=drive_link" },
      { title: "Aula 18", url: "https://drive.google.com/file/d/1wHGefvI11Gr4k3Bdvge5Z6kdQSxZuixs/view?usp=drive_link" },
      { title: "Aula 19", url: "https://drive.google.com/file/d/17x-N8W-ZHZdbsuz8wR0OzfJaCCpFZhgh/view?usp=drive_link" },
      { title: "Aula 20", url: "https://drive.google.com/file/d/1KWYZOKkHmRi6hPkAPbvz_WlWJful8Ta8/view?usp=drive_link" },
      { title: "Aula 21", url: "https://drive.google.com/file/d/1UBNC6PpVuLTZXwvIt5kcoU-qtyTYq-Nc/view?usp=drive_link" },
      { title: "Aula 22", url: "https://drive.google.com/file/d/1SjmuZAg7uqh0j7wcl3r88EdjHouIFYEy/view?usp=drive_link" },
      { title: "Aula 23", url: "https://drive.google.com/file/d/120xwIlzmLE5cLOZJyyXlGOKkg9poUjNs/view?usp=drive_link" },
      { title: "Aula 24", url: "https://drive.google.com/file/d/1Ja8OCDmG4DLE7mTKIF5184JcYRZ3phcV/view?usp=drive_link" },
      { title: "Aula 25", url: "https://drive.google.com/file/d/1ZTvVuRvcRJ1jHIsxyltGxKRjf-JgWMdA/view?usp=drive_link" },
      { title: "Aula 26", url: "https://drive.google.com/file/d/1fDJNH_idpMAcwVRZ18C3izM0voDBsZ9E/view?usp=drive_link" },
      { title: "Aula 27", url: "https://drive.google.com/file/d/1Iezqm1VQ4qUC-BkXJrfAm40YkAfm5TO0/view?usp=drive_link" },
      { title: "Aula 28", url: "https://drive.google.com/file/d/1hzmfBtf6CzOcFr_qmO2_HMYaXR0e4WuD/view?usp=drive_link" },
      { title: "Aula 29", url: "https://drive.google.com/file/d/1y71tcwfwD0sJoK760OoUd-7wjIzByNP9/view?usp=drive_link" },
      { title: "Aula 30", url: "https://drive.google.com/file/d/1n34S4uebP5_W49dk-PugqOt0HRerNlaw/view?usp=drive_link" },
      { title: "Aula 31", url: "https://drive.google.com/file/d/1HuPdN7iLgGsZ1V0x9GftELp5Jr3jp7JO/view?usp=drive_link" },
      { title: "Aula 32", url: "https://drive.google.com/file/d/18u5Cb1TUJ3fpFkZH8t4VSAXQwo1dkjvD/view?usp=drive_link" },
      { title: "Aula 33", url: "https://drive.google.com/file/d/1qtHrXfGjW9RSxKlHmvEIsmiZbpC-kAVO/view?usp=drive_link" },
      { title: "Aula 34", url: "https://drive.google.com/file/d/1uLdgTaFwsbwo6q-ePzeDrWvTPl3rEOk6/view?usp=drive_link" },
      { title: "Aula 35", url: "https://drive.google.com/file/d/1A-X6WUjZh_-CvLgdN8RbOGGELNZsAHs4/view?usp=drive_link" },
      { title: "Aula 36", url: "https://drive.google.com/file/d/18yJe4tPFc-sSToDkbLKp-U4Nfdiu3Nta/view?usp=drive_link" },
      { title: "Aula 37", url: "https://drive.google.com/file/d/1_DtYAoAUuHXLVTK8xKzeXpS9Hp8-UEep/view?usp=drive_link" },
      { title: "Aula 38", url: "https://drive.google.com/file/d/1qf5lLxNPDgIJBMkEbJalpobwEggQOlAx/view?usp=drive_link" },
      { title: "Aula 39", url: "https://drive.google.com/file/d/1jh23Od4F1RStIwW_Lg_HPeF0kxhhYQmU/view?usp=drive_link" },
      { title: "Aula 40", url: "https://drive.google.com/file/d/1OWjW3IU5FbkuhdISgkMo86DYYFQUQitT/view?usp=drive_link" },
      { title: "Aula 41", url: "https://drive.google.com/file/d/1JpQNVJ9L4hLvjYeyMehva0WeKFlxC5XE/view?usp=drive_link" },
      { title: "Aula 42", url: "https://drive.google.com/file/d/1v-T_NBr89vgac5KVIc2ngOd9HAALkIRs/view?usp=drive_link" },
      { title: "Aula 43", url: "https://drive.google.com/file/d/1WcWJCyuJFwEUQcs-bKQQJd9bGBJ-NvFo/view?usp=drive_link" },
      { title: "Aula 44", url: "https://drive.google.com/file/d/1supRT_KVnr3B5Of5ntNCwbNfVVk61ReJ/view?usp=drive_link" },
      { title: "Aula 45", url: "https://drive.google.com/file/d/16CghW3HL03_xP_lS0UPPU5AMXcBmRScJ/view?usp=drive_link" },
      { title: "Aula 46", url: "https://drive.google.com/file/d/1kxLsICj5m20Q2NOmvtgXLWHa0IVgryPA/view?usp=drive_link" },
    ],
  },
  {
    title: "Peças Variadas",
    cover: moduleVariadas,
    videos: [
      { title: "Aula 1", url: "https://drive.google.com/file/d/1eQS7vhaw4nr8FXNjopl-bGU57l-CCLyl/view?usp=drive_link" },
      { title: "Aula 2", url: "https://drive.google.com/file/d/1FMD8H1KfGWosRpASfn5pWVyLW26vNv_W/view?usp=drive_link" },
      { title: "Aula 3", url: "https://drive.google.com/file/d/135u0tpf3SIDD8NBGVMaX8_yBa9hpkhrI/view?usp=drive_link" },
      { title: "Aula 4", url: "https://drive.google.com/file/d/1POB86on5CO0J1_ZON8J5zTHQ_ezI-P8W/view?usp=drive_link" },
      { title: "Aula 5", url: "https://drive.google.com/file/d/1eIw3gFHEO9SA0Lda90pjEbSBKXRZQ0zH/view?usp=drive_link" },
      { title: "Aula 6", url: "https://drive.google.com/file/d/1SYwdt-SSJXrM4op4HaGbGi19JkomD2Gu/view?usp=drive_link" },
      { title: "Aula 7", url: "https://drive.google.com/file/d/135SMiBUpz3Akc5eFShs6h_1gjC7v7HrW/view?usp=drive_link" },
      { title: "Aula 8", url: "https://drive.google.com/file/d/14AKb3Q7Kg1uG9RTpJyTgYC0Oye-E0HkN/view?usp=drive_link" },
      { title: "Aula 9", url: "https://drive.google.com/file/d/1XlnCDIRblnMmfg0OPfgIxjk63j69XhN8/view?usp=drive_link" },
      { title: "Aula 10", url: "https://drive.google.com/file/d/1RONo4cSSCpHcgNYrcYIlPn9oEsUonipc/view?usp=drive_link" },
      { title: "Aula 11", url: "https://drive.google.com/file/d/17wozuE7cij8I6uEN2oM0SdvRlSbDtIYS/view?usp=drive_link" },
      { title: "Aula 12", url: "https://drive.google.com/file/d/13tHzQ4e2VJaGhoPxKuR4yBre2-lZWCCy/view?usp=drive_link" },
      { title: "Aula 13", url: "https://drive.google.com/file/d/1qgc-zhMb2k2tC8p2fODUwdvVazIVa7IX/view?usp=drive_link" },
      { title: "Aula 14", url: "https://drive.google.com/file/d/1E4duyo6--iPwEnMacosDtaF1yryYyLC5/view?usp=drive_link" },
      { title: "Aula 15", url: "https://drive.google.com/file/d/17wm4l7CmMF-NATskg-U65UcsLAvXEF13/view?usp=drive_link" },
      { title: "Aula 16", url: "https://drive.google.com/file/d/1a52zAIKhwDuFVb15Kzv_IMq7nw8EpQtQ/view?usp=drive_link" },
      { title: "Aula 17", url: "https://drive.google.com/file/d/1s8vrJdgwciBXtXQtlz-R_zTVuRrAhVOW/view?usp=drive_link" },
      { title: "Aula 18", url: "https://drive.google.com/file/d/1ol-jjlF36rO6K7PJ5wFIwFxDqvYKs1k5/view?usp=drive_link" },
      { title: "Aula 19", url: "https://drive.google.com/file/d/1qfHLKa-aoZmt87WeKQ4eUoLP7dvP3pCE/view?usp=drive_link" },
      { title: "Aula 20", url: "https://drive.google.com/file/d/1xYZb61i15VfSNImL9Ms5mW0Z1rFlbJdl/view?usp=drive_link" },
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
        <div className="mx-auto max-w-3xl grid grid-cols-4 gap-3">
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="font-display text-2xl font-bold text-primary">{modules.length + 1}</p>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Módulos</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="font-display text-2xl font-bold text-primary">{totalVideos}</p>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Videoaulas</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <div className="flex items-center justify-center gap-1">
              <Clock className="h-5 w-5 text-primary" />
              <p className="font-display text-2xl font-bold text-primary">+500</p>
            </div>
            <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Horas de curso</p>
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
