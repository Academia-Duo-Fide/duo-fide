import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dog.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cane felice in un prato"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Il Tuo Partner per
            <span className="text-primary"> l'Educazione Cinofila</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Da oltre 10 anni aiutiamo proprietari e cani a costruire una
            relazione basata sulla fiducia, il rispetto e la comunicazione.
            Scopri i nostri corsi personalizzati.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 text-lg px-8 shadow-brand">
              Scopri i Corsi
              <ArrowRight className="h-5 w-5" />
            </Button>
            <a href="#contatti">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg px-8 border-2"
              >
                Contattaci
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
