import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Indirizzo",
    content: "Via delle Querce, 15 - Roma (RM)",
  },
  {
    icon: Phone,
    title: "Telefono",
    content: "+39 06 1234567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@duofide.it",
  },
  {
    icon: Clock,
    title: "Orari",
    content: "Lun-Sab: 9:00 - 19:00",
  },
];

const Contact = () => {
  return (
    <section id="contatti" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Contatti
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inizia il Percorso con Noi
          </h2>
          <p className="text-muted-foreground text-lg">
            Contattaci per una consulenza gratuita o per ricevere maggiori
            informazioni sui nostri corsi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Scrivici un Messaggio
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <Input placeholder="Il tuo nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cognome
                  </label>
                  <Input placeholder="Il tuo cognome" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="La tua email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefono
                </label>
                <Input type="tel" placeholder="Il tuo numero di telefono" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Messaggio
                </label>
                <Textarea
                  placeholder="Come possiamo aiutarti?"
                  rows={4}
                />
              </div>
              <Button className="w-full shadow-brand" size="lg">
                Invia Messaggio
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
