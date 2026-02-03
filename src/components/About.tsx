import { Check } from "lucide-react";
import logo from "@/assets/logo-duofide.png";

const features = [
  "Educatori certificati ENCI e CSEN",
  "Approccio basato sul rinforzo positivo",
  "Programmi personalizzati",
  "Supporto continuo post-corso",
  "Ambiente sicuro e attrezzato",
  "Oltre 10 anni di esperienza",
];

const About = () => {
  return (
    <section id="chi-siamo" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Chi Siamo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Passione e Competenza al Servizio del{" "}
              <span className="text-primary">Tuo Cane</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              DUO FIDE nasce dalla passione per il mondo cinofilo e dalla
              volontà di creare un ponte tra cani e proprietari. Il nostro motto
              "Educare per Aiutare, Aiutare per Educare" riflette la nostra
              filosofia: ogni intervento educativo è un aiuto reciproco.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Utilizziamo metodi basati sul rinforzo positivo, rispettando
              sempre l'individualità di ogni cane e costruendo relazioni basate
              sulla fiducia e il rispetto reciproco.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Logo Feature */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
              <div className="relative bg-card rounded-3xl shadow-2xl p-12 border border-border">
                <img
                  src={logo}
                  alt="DUO FIDE Logo"
                  className="w-72 h-72 object-contain"
                />
                <div className="text-center mt-6">
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    DUO FIDE
                  </h3>
                  <p className="text-muted-foreground">
                    Associazione Cinologica
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
