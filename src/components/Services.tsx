import { Dog, GraduationCap, Heart, Bone, Users, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: GraduationCap,
    title: "Educazione Base",
    description:
      "Corso fondamentale per cuccioli e cani adulti. Insegniamo i comandi essenziali e le basi della convivenza.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Dog,
    title: "Addestramento Avanzato",
    description:
      "Per chi vuole approfondire e raggiungere livelli superiori di obbedienza e collaborazione.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Problemi Comportamentali",
    description:
      "Aiutiamo a risolvere aggressività, paure, ansia da separazione e altri comportamenti problematici.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Users,
    title: "Classi di Socializzazione",
    description:
      "Sessioni di gruppo per insegnare al tuo cane a interagire correttamente con altri cani e persone.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Bone,
    title: "Puppy Class",
    description:
      "Corso dedicato ai cuccioli dai 2 ai 6 mesi per un'educazione precoce e una corretta socializzazione.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Consulenza a Domicilio",
    description:
      "Valutiamo e interveniamo direttamente nel tuo ambiente domestico per risultati più efficaci.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const Services = () => {
  return (
    <section id="servizi" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            I Nostri Servizi
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluzioni per Ogni Esigenza
          </h2>
          <p className="text-muted-foreground text-lg">
            Offriamo una gamma completa di servizi per l'educazione e il
            benessere del tuo cane, personalizzati in base alle tue necessità.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover-lift bg-card cursor-pointer group"
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`h-7 w-7 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-display">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
