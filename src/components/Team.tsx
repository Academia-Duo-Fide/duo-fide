import { Facebook, Instagram, Mail } from "lucide-react";
const teamMembers = [{
  name: "Marco Rossi",
  role: "Fondatore & Educatore Cinofilo",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  description: "Oltre 15 anni di esperienza nell'educazione cinofila. Specializzato in comportamento canino."
}, {
  name: "Laura Bianchi",
  role: "Istruttrice Cinofila",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  description: "Esperta in puppy class e socializzazione. Appassionata di agility dog."
}, {
  name: "Giuseppe Verdi",
  role: "Addestratore Sportivo",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  description: "Specializzato in discipline sportive cinofile e preparazione atletica."
}];
const Team = () => {
  return <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Il Nostro Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professionisti Appassionati
          </h2>
          <p className="text-muted-foreground text-lg">
            Un team di esperti dedicati al benessere del tuo cane e alla
            costruzione di un rapporto armonioso.
          </p>
        </div>

        
      </div>
    </section>;
};
export default Team;