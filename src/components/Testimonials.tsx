import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Francesca M.",
    dog: "Luna, Golden Retriever",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Grazie a DUO FIDE, Luna è diventata una cagnolina equilibrata e felice. Il corso di educazione base ci ha aiutato tantissimo a capire come comunicare con lei.",
  },
  {
    name: "Roberto L.",
    dog: "Max, Pastore Tedesco",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Professionisti eccezionali! Max aveva problemi comportamentali importanti e grazie al percorso personalizzato oggi è un cane completamente diverso. Consigliatissimi!",
  },
  {
    name: "Giulia S.",
    dog: "Buddy, Labrador",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Il corso di agility è fantastico! Buddy si diverte tantissimo e noi con lui. L'ambiente è accogliente e gli istruttori sono sempre disponibili e pazienti.",
  },
  {
    name: "Alessandro P.",
    dog: "Kira, Border Collie",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Abbiamo seguito il percorso completo dalla puppy class all'agility. Un'esperienza meravigliosa che ha rafforzato il nostro legame con Kira.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonianze" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Testimonianze
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cosa Dicono di Noi
          </h2>
          <p className="text-muted-foreground text-lg">
            Le esperienze dei nostri clienti e dei loro amici a quattro zampe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover-lift relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.dog}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
