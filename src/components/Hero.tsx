import { ArrowRight, Heart, Award, Users } from "lucide-react";
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
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Educare per Aiutare • Aiutare per Educare
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Il Tuo Partner per
            <span className="text-primary"> l'Educazione Cinofila</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Da oltre 10 anni aiutiamo proprietari e cani a costruire una
            relazione basata sulla fiducia, il rispetto e la comunicazione.
            Scopri i nostri corsi personalizzati.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="gap-2 text-lg px-8 shadow-brand">
              Scopri i Corsi
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 border-2"
            >
              Contattaci
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Heart className="h-5 w-5 text-accent" />
                <span className="font-display font-bold text-2xl text-foreground">
                  500+
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Cani Educati</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-display font-bold text-2xl text-foreground">
                  10+
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Anni Esperienza</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-display font-bold text-2xl text-foreground">
                  50+
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Corsi Attivi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
