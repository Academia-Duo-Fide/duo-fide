import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-duofide.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="DUO FIDE Logo"
                className="h-16 w-auto bg-background rounded-full p-1"
              />
              <div>
                <span className="font-display font-bold text-xl">DUO FIDE</span>
                <p className="text-sm text-background/70">
                  Associazione Cinologica
                </p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md">
              Educare per Aiutare, Aiutare per Educare. Da oltre 10 anni al
              fianco di proprietari e cani per costruire relazioni basate sulla
              fiducia e il rispetto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Link Rapidi</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="#chi-siamo"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Chi Siamo
                </a>
              </li>
              <li>
                <a
                  href="#contatti"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4" />
                +39 06 1234567
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4" />
                info@duofide.it
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2025 DUO FIDE - Associazione Cinologica. Tutti i diritti
            riservati.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-background/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-background/60 hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
