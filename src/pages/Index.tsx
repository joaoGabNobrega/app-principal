import heroBanner from "@/assets/hero-banner.jpg";
import moduleFlores from "@/assets/module-flores.jpg";
import moduleVariadas from "@/assets/module-variadas.jpg";
import moduleAnimais from "@/assets/module-animais.jpg";
import moduleChaveiros from "@/assets/module-chaveiros.jpg";
import ModuleCard from "@/components/ModuleCard";
import BonusModule from "@/components/BonusModule";
import SupplierModule from "@/components/SupplierModule";
import { Sparkles, BookOpen, Award, Heart, PlayCircle, Clock } from "lucide-react";

const modules = [
  {
    title: "Vídeo Aulas - Fio Felpudo",
    cover: moduleFlores,
    videos: [
      { title: "Vaso Flor Tulipa", description: "Aprenda a montar um lindo vaso com tulipas de fio felpudo passo a passo", url: "https://drive.google.com/file/d/17pIOv1t1FEbq9OPc84qmJxO0v7FY36wu/view?usp=sharing" },
      { title: "Flor de Lotus Iluminada", description: "Crie uma flor de lótus com iluminação embutida para decoração", url: "https://drive.google.com/file/d/1kVaRKeRB9ccWHmiQe7WLxOuA3co631SV/view?usp=sharing" },
      { title: "Vaso Flor de Girassol", description: "Monte um vaso decorativo com girassóis realistas de fio felpudo", url: "https://drive.google.com/file/d/1d8bVAb6DHwRKgIf9spvJbn1VuInVDyhe/view?usp=sharing" },
      { title: "Vaso de Lírio do Vale", description: "Crie delicados lírios do vale em miniatura para vasinhos", url: "https://drive.google.com/file/d/1kQqzT67FKaI41puVGX1SsvISRtKlzx6b/view?usp=sharing" },
      { title: "Luminária de Flor", description: "Transforme fio felpudo em uma luminária floral funcional e encantadora", url: "https://drive.google.com/file/d/1sNdtrVGJ4JPL7mahKCw69pg863-M9ZXy/view?usp=sharing" },
      { title: "Lavanda", description: "Técnica para criar ramos de lavanda realistas com fio felpudo", url: "https://drive.google.com/file/d/1TCuRfUktq9fPtJSsTR-LxQUO6rHwBUh9/view?usp=sharing" },
      { title: "Flor de Lírio", description: "Aprenda a modelar lírios elegantes com pétalas detalhadas", url: "https://drive.google.com/file/d/1hCi3BzV620rkR9IkurULvTxP740ACiER/view?usp=sharing" },
      { title: "Orquídea", description: "Crie orquídeas sofisticadas perfeitas para presente e decoração", url: "https://drive.google.com/file/d/1BcCD6a3FSgWzICboq1J_y4M6YaSz9vNG/view?usp=sharing" },
      { title: "Vasos de Tulipas", description: "Arranjo completo de vasos com tulipas coloridas de fio felpudo", url: "https://drive.google.com/file/d/1xYZb61i15VfSNImL9Ms5mW0Z1rFlbJdl/view?usp=drive_link" },
      { title: "Vaso de Cravo", description: "Monte cravos realistas com pétalas delicadas em fio felpudo", url: "https://drive.google.com/file/d/1qfHLKa-aoZmt87WeKQ4eUoLP7dvP3pCE/view?usp=drive_link" },
      { title: "Vasinho de Tulipa + Abelinha", description: "Vasinho fofo de tulipa com uma abelha decorativa em miniatura", url: "https://drive.google.com/file/d/1ol-jjlF36rO6K7PJ5wFIwFxDqvYKs1k5/view?usp=drive_link" },
      { title: "Vasinho de Tulipa Fofa", description: "Versão fofa e compacta de tulipa em vasinho decorativo", url: "https://drive.google.com/file/d/1s8vrJdgwciBXtXQtlz-R_zTVuRrAhVOW/view?usp=drive_link" },
      { title: "Vários Modelos", description: "Aula especial com múltiplos modelos e técnicas variadas", url: "https://drive.google.com/file/d/1a52zAIKhwDuFVb15Kzv_IMq7nw8EpQtQ/view?usp=drive_link" },
      { title: "Tulipas", description: "Domine a técnica de criar tulipas perfeitas com fio felpudo", url: "https://drive.google.com/file/d/17wm4l7CmMF-NATskg-U65UcsLAvXEF13/view?usp=drive_link" },
      { title: "Tulipa com 5 Asas", description: "Modelo especial de tulipa com 5 pétalas abertas e elegantes", url: "https://drive.google.com/file/d/1E4duyo6--iPwEnMacosDtaF1yryYyLC5/view?usp=drive_link" },
      { title: "Suculentas", description: "Crie suculentas realistas que nunca precisam de água", url: "https://drive.google.com/file/d/1qgc-zhMb2k2tC8p2fODUwdvVazIVa7IX/view?usp=drive_link" },
      { title: "Ramos de Flores", description: "Arranjos de ramos florais para buquês e decoração", url: "https://drive.google.com/file/d/13tHzQ4e2VJaGhoPxKuR4yBre2-lZWCCy/view?usp=drive_link" },
      { title: "Orquídea", description: "Nova técnica para orquídeas com detalhes aprimorados", url: "https://drive.google.com/file/d/17wozuE7cij8I6uEN2oM0SdvRlSbDtIYS/view?usp=drive_link" },
      { title: "Narcissus com Caules", description: "Flores de narciso com caules longos e folhagem natural", url: "https://drive.google.com/file/d/1RONo4cSSCpHcgNYrcYIlPn9oEsUonipc/view?usp=drive_link" },
      { title: "Mini Vaso de Hortênsia", description: "Mini vaso encantador com hortênsias delicadas", url: "https://drive.google.com/file/d/1XlnCDIRblnMmfg0OPfgIxjk63j69XhN8/view?usp=drive_link" },
      { title: "Mini Cesta de Lótus", description: "Cestinha decorativa com flores de lótus em miniatura", url: "https://drive.google.com/file/d/14AKb3Q7Kg1uG9RTpJyTgYC0Oye-E0HkN/view?usp=drive_link" },
      { title: "Mini Buquê de Flores", description: "Buquê compacto perfeito para lembrancinhas e presentes", url: "https://drive.google.com/file/d/135SMiBUpz3Akc5eFShs6h_1gjC7v7HrW/view?usp=drive_link" },
      { title: "Margarida Azul", description: "Margaridas azuis vibrantes com técnica de pétalas arredondadas", url: "https://drive.google.com/file/d/1SYwdt-SSJXrM4op4HaGbGi19JkomD2Gu/view?usp=drive_link" },
      { title: "Lírios Amarelos", description: "Lírios em tom amarelo ouro com folhagem natural", url: "https://drive.google.com/file/d/1eIw3gFHEO9SA0Lda90pjEbSBKXRZQ0zH/view?usp=drive_link" },
      { title: "Lírio com Hastes de Chenille", description: "Técnica especial usando hastes de chenille para lírios", url: "https://drive.google.com/file/d/1POB86on5CO0J1_ZON8J5zTHQ_ezI-P8W/view?usp=drive_link" },
      { title: "Limão Decorativo", description: "Peça decorativa em formato de limão com acabamento realista", url: "https://drive.google.com/file/d/135u0tpf3SIDD8NBGVMaX8_yBa9hpkhrI/view?usp=drive_link" },
      { title: "Lavanda", description: "Técnica avançada para ramos de lavanda em arranjo", url: "https://drive.google.com/file/d/1FMD8H1KfGWosRpASfn5pWVyLW26vNv_W/view?usp=drive_link" },
      { title: "Jarrinho Girassol", description: "Jarrinho decorativo com girassol alegre e vibrante", url: "https://drive.google.com/file/d/1eQS7vhaw4nr8FXNjopl-bGU57l-CCLyl/view?usp=drive_link" },
      { title: "Jarrinho Clorofito", description: "Planta clorofito em jarrinho com folhas pendentes realistas", url: "https://drive.google.com/file/d/1kxLsICj5m20Q2NOmvtgXLWHa0IVgryPA/view?usp=drive_link" },
      { title: "Girassóis", description: "Girassóis grandes e impactantes para decoração de ambientes", url: "https://drive.google.com/file/d/16CghW3HL03_xP_lS0UPPU5AMXcBmRScJ/view?usp=drive_link" },
      { title: "Girassol Mini", description: "Versão compacta do girassol ideal para lembrancinhas", url: "https://drive.google.com/file/d/1supRT_KVnr3B5Of5ntNCwbNfVVk61ReJ/view?usp=drive_link" },
      { title: "Florzinha Rosa", description: "Florzinhas rosas delicadas para arranjos e buquês", url: "https://drive.google.com/file/d/1WcWJCyuJFwEUQcs-bKQQJd9bGBJ-NvFo/view?usp=drive_link" },
      { title: "Flores Amarelas", description: "Conjunto de flores amarelas para composição de arranjos", url: "https://drive.google.com/file/d/1v-T_NBr89vgac5KVIc2ngOd9HAALkIRs/view?usp=drive_link" },
      { title: "Flores Variadas", description: "Mix de flores diferentes em uma única peça decorativa", url: "https://drive.google.com/file/d/1JpQNVJ9L4hLvjYeyMehva0WeKFlxC5XE/view?usp=drive_link" },
      { title: "Flor Azul Celeste", description: "Flor em tom azul celeste com pétalas suaves e elegantes", url: "https://drive.google.com/file/d/1OWjW3IU5FbkuhdISgkMo86DYYFQUQitT/view?usp=drive_link" },
      { title: "Flor Azul Royal", description: "Modelo sofisticado de flor azul royal para decoração premium", url: "https://drive.google.com/file/d/1jh23Od4F1RStIwW_Lg_HPeF0kxhhYQmU/view?usp=drive_link" },
      { title: "Flor Clássica", description: "Modelo clássico de flor versátil para diversas composições", url: "https://drive.google.com/file/d/1qf5lLxNPDgIJBMkEbJalpobwEggQOlAx/view?usp=drive_link" },
      { title: "Enfeites de Natal", description: "Enfeites natalinos encantadores feitos com fio felpudo", url: "https://drive.google.com/file/d/1_DtYAoAUuHXLVTK8xKzeXpS9Hp8-UEep/view?usp=drive_link" },
      { title: "Enfeite de Natal Especial", description: "Peça natalina especial com detalhes elaborados", url: "https://drive.google.com/file/d/18yJe4tPFc-sSToDkbLKp-U4Nfdiu3Nta/view?usp=drive_link" },
      { title: "Decoração de Natal", description: "Conjunto decorativo natalino completo para sua casa", url: "https://drive.google.com/file/d/1A-X6WUjZh_-CvLgdN8RbOGGELNZsAHs4/view?usp=drive_link" },
      { title: "Aula Bônus – Wall Hanging Flower", description: "Técnica internacional de flor para pendurar na parede", url: "https://drive.google.com/file/d/1uLdgTaFwsbwo6q-ePzeDrWvTPl3rEOk6/view?usp=drive_link" },
      { title: "Aula Bônus – Easy Flower Craft", description: "Método fácil e rápido para criar flores lindas", url: "https://drive.google.com/file/d/1qtHrXfGjW9RSxKlHmvEIsmiZbpC-kAVO/view?usp=drive_link" },
      { title: "Aula Bônus – How to Make Flower", description: "Tutorial completo de flor com técnica internacional", url: "https://drive.google.com/file/d/18u5Cb1TUJ3fpFkZH8t4VSAXQwo1dkjvD/view?usp=drive_link" },
      { title: "Aula Bônus – Easy Flower", description: "Flor simplificada ideal para iniciantes", url: "https://drive.google.com/file/d/1HuPdN7iLgGsZ1V0x9GftELp5Jr3jp7JO/view?usp=drive_link" },
      { title: "Aula Bônus – Flower DIY", description: "Projeto DIY de flor criativa e moderna", url: "https://drive.google.com/file/d/1n34S4uebP5_W49dk-PugqOt0HRerNlaw/view?usp=drive_link" },
      { title: "Aula Bônus – Técnica Especial de Flores", description: "Técnica avançada exclusiva para flores profissionais", url: "https://drive.google.com/file/d/1y71tcwfwD0sJoK760OoUd-7wjIzByNP9/view?usp=drive_link" },
    ],
  },
  {
    title: "Peças Variadas",
    cover: moduleVariadas,
    videos: [
      { title: "DIY Pipe Cleaner Craft", description: "Técnica criativa internacional de artesanato com fio felpudo", url: "https://drive.google.com/file/d/1hzmfBtf6CzOcFr_qmO2_HMYaXR0e4WuD/view?usp=drive_link" },
      { title: "Peça Criativa 1", description: "Modelo exclusivo para surpreender seus clientes", url: "https://drive.google.com/file/d/1Iezqm1VQ4qUC-BkXJrfAm40YkAfm5TO0/view?usp=drive_link" },
      { title: "Peça Criativa 2", description: "Mais um modelo incrível para seu portfólio de vendas", url: "https://drive.google.com/file/d/1fDJNH_idpMAcwVRZ18C3izM0voDBsZ9E/view?usp=drive_link" },
      { title: "Peça Criativa 3", description: "Peça diferenciada com acabamento premium", url: "https://drive.google.com/file/d/1ZTvVuRvcRJ1jHIsxyltGxKRjf-JgWMdA/view?usp=drive_link" },
      { title: "Peça Criativa 4", description: "Modelo versátil que vende muito bem em feiras", url: "https://drive.google.com/file/d/1Ja8OCDmG4DLE7mTKIF5184JcYRZ3phcV/view?usp=drive_link" },
      { title: "Peça Criativa 5", description: "Criação especial com detalhes que encantam", url: "https://drive.google.com/file/d/120xwIlzmLE5cLOZJyyXlGOKkg9poUjNs/view?usp=drive_link" },
      { title: "Peça Criativa 6", description: "Modelo popular que sempre tem demanda", url: "https://drive.google.com/file/d/1SjmuZAg7uqh0j7wcl3r88EdjHouIFYEy/view?usp=drive_link" },
      { title: "Peça Criativa 7", description: "Peça delicada perfeita para presentes especiais", url: "https://drive.google.com/file/d/1UBNC6PpVuLTZXwvIt5kcoU-qtyTYq-Nc/view?usp=drive_link" },
      { title: "Peça Criativa 8", description: "Modelo inovador com técnica diferenciada", url: "https://drive.google.com/file/d/1KWYZOKkHmRi6hPkAPbvz_WlWJful8Ta8/view?usp=drive_link" },
      { title: "Peça Criativa 9", description: "Criação exclusiva do curso Universo Felpudo", url: "https://drive.google.com/file/d/17x-N8W-ZHZdbsuz8wR0OzfJaCCpFZhgh/view?usp=drive_link" },
      { title: "Peça Criativa 10", description: "Modelo tendência que está bombando nas redes sociais", url: "https://drive.google.com/file/d/1wHGefvI11Gr4k3Bdvge5Z6kdQSxZuixs/view?usp=drive_link" },
      { title: "Cesta de Orquídea", description: "Cesta decorativa com orquídeas elegantes de fio felpudo", url: "https://drive.google.com/file/d/1G1JRzcTGq480LCB_GRDw-hhxG933bIkv/view?usp=drive_link" },
      { title: "Cesta de Morango", description: "Cestinha encantadora com morangos realistas", url: "https://drive.google.com/file/d/1s6bd5T2PmJgRFsm_e-5Oekxlo6EIfhY-/view?usp=drive_link" },
      { title: "Cesta de Lótus e Libélula", description: "Composição delicada com lótus e libélula decorativa", url: "https://drive.google.com/file/d/1DGTC_-nM58YemMQF8PgyTXs5iXz_jjHL/view?usp=drive_link" },
      { title: "Cesta de Flores", description: "Cesta clássica com arranjo floral sortido", url: "https://drive.google.com/file/d/1FhVqGTGXfBMSHdwfsY4---5qFUJSAShT/view?usp=drive_link" },
      { title: "Cesta de Flores Especial", description: "Versão premium da cesta floral com detalhes extras", url: "https://drive.google.com/file/d/1tC6Oltq4CVTVCG0zF3hAySROeKM4eZHE/view?usp=drive_link" },
      { title: "Buquês de Flores", description: "Aprenda a montar buquês completos para vender", url: "https://drive.google.com/file/d/1nJMMd6aUh7vOOgZZrL8K1qICUTaEqq4-/view?usp=drive_link" },
      { title: "Buquê de Girassóis", description: "Buquê alegre de girassóis perfeito para presente", url: "https://drive.google.com/file/d/1rkHZyNFyBnuFAmrL89t4rnyBWDNEEUqz/view?usp=drive_link" },
      { title: "Flor de Narciso", description: "Narciso delicado com pétalas e centro detalhados", url: "https://drive.google.com/file/d/1iHKJUEj2EPcnBKhIxvsiPiT-aV5jcsXF/view?usp=drive_link" },
      { title: "Peça Especial Exclusiva", description: "Modelo exclusivo de encerramento do módulo", url: "https://drive.google.com/file/d/11szENFkHOA7TvHk5kM8C3a6OYX-AKt_U/view?usp=drive_link" },
    ],
  },
  {
    title: "Animais de Arte Felpuda",
    cover: moduleAnimais,
    videos: [
      { title: "Tartaruga Estrela", description: "Crie uma tartaruga fofa com casco em formato de estrela", url: "https://drive.google.com/file/d/1yI4o4PR3_7XTcIjh6xK7ttv4qXpfnrxb/view?usp=sharing" },
      { title: "Calopsita", description: "Calopsita realista com penas detalhadas em fio felpudo", url: "https://drive.google.com/file/d/1AUUn5mzL53VZm7iC63GOCOJPuI08kEbj/view?usp=sharing" },
      { title: "Coelho", description: "Coelhinho adorável perfeito para decoração e presente", url: "https://drive.google.com/file/d/1J4C0rj86-qQl1Zxj-dHwrGGaa718fMkv/view?usp=sharing" },
      { title: "Esquilo", description: "Esquilo encantador com rabo fofinho de fio felpudo", url: "https://drive.google.com/file/d/15e__pW5Psadaow8CqkDTkMp5YzZNDdP8/view?usp=sharing" },
      { title: "Esquilo 2", description: "Segunda versão do esquilo com pose e detalhes diferentes", url: "https://drive.google.com/file/d/18oErNDzy-UPlOfFmSgohgQAgH4gfMi9W/view?usp=sharing" },
      { title: "Borboleta", description: "Borboleta colorida com asas delicadas de fio felpudo", url: "https://drive.google.com/file/d/1DOXBRs0o8cVSez3JEDN016dD1DeRg6_N/view?usp=sharing" },
      { title: "Dinossauro", description: "Dinossauro divertido e fofo feito com fio felpudo", url: "https://drive.google.com/file/d/1J5kGyZ114H8L05anMvs4eoZ1VzNth1Hm/view?usp=sharing" },
      { title: "Elefante", description: "Elefante adorável com orelhas grandes e tromba detalhada", url: "https://drive.google.com/file/d/1UAqH8MAyMvJjfv4iOPRquRkLrAIILGmA/view?usp=sharing" },
      { title: "Gatinho", description: "Gatinho fofíssimo perfeito para presente e decoração", url: "https://drive.google.com/file/d/1WQ2FamBWz0AZL3GQAkPNk2K7lQ7YqTXy/view?usp=sharing" },
    ],
  },
  {
    title: "Chaveiros de Arte Felpuda",
    cover: moduleChaveiros,
    videos: [
      { title: "Chaveiro Gato", description: "Chaveiro fofo de gatinho para vender ou presentear", url: "https://drive.google.com/file/d/1B7eGk3N6Pcf0BcjJLJZNpNydsy8eGIYE/view?usp=sharing" },
      { title: "Chaveiro de Frutas", description: "Chaveiros coloridos em formato de frutas variadas", url: "https://drive.google.com/file/d/1IYInGk1KOHpYo_QVb4UcONQaeOtw1ZNX/view?usp=sharing" },
      { title: "Chaveiro de Coração", description: "Chaveiro em formato de coração ideal para datas especiais", url: "https://drive.google.com/file/d/1qVJpyAMsW1306DOsLojVL3G33LTcDWZ1/view?usp=sharing" },
      { title: "Chaveiro Abelhinha", description: "Chaveiro fofo de abelha perfeito para vender e presentear", url: "https://drive.google.com/file/d/1sD4QsuwZim8YfnDg5BZZ0Q2vNQYTlp9q/view?usp=sharing" },
      { title: "Chaveiro Cereja", description: "Chaveiro delicado em formato de cereja com detalhes realistas", url: "https://drive.google.com/file/d/1LAWBIZO8cUyG3CBgwn6und0nokpuoAPA/view?usp=sharing" },
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
          <SupplierModule />
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
