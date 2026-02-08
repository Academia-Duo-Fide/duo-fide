
# Piano di Conversione: React/TypeScript → HTML/CSS/Bootstrap/JavaScript

## Obiettivo
Convertire completamente il sito DUO FIDE da React/TypeScript a una versione statica con HTML, CSS, Bootstrap 5 e JavaScript vanilla, mantenendo identico l'aspetto visivo e le funzionalità.

---

## Cosa verrà creato

### Nuovi file (versione statica)

| File | Descrizione |
|------|-------------|
| `index.html` | Pagina principale con tutto il contenuto delle sezioni |
| `css/style.css` | Stili personalizzati che replicano il design attuale |
| `js/main.js` | JavaScript per menu mobile e interazioni |
| `assets/` | Cartella con logo e immagine hero (già esistenti) |

### Struttura HTML

L'`index.html` conterrà tutte le sezioni attualmente presenti:
- **Header** - Navigazione fissa con logo e menu (mobile hamburger incluso)
- **Hero** - Sezione principale con immagine di sfondo e call-to-action
- **Servizi** - Griglia con 6 card dei servizi offerti
- **Chi Siamo** - Presentazione con lista features e logo
- **Testimonianze** - 4 recensioni con stelle, foto e testi
- **Contatti** - Form di contatto e informazioni
- **Footer** - Link, contatti e social

---

## File e cartelle da ELIMINARE

Quasi tutto il progetto React verrà rimosso:

```text
DA ELIMINARE:
├── src/                          # Tutta la cartella src
│   ├── components/               # Tutti i componenti React
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   ├── test/
│   ├── App.tsx, App.css, main.tsx, index.css
│   └── vite-env.d.ts
├── File di configurazione React/Vite:
│   ├── vite.config.ts
│   ├── vitest.config.ts
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── tsconfig.json, tsconfig.app.json, tsconfig.node.json
│   ├── eslint.config.js
│   └── components.json
└── bun.lockb, package-lock.json
```

---

## Dipendenze da rimuovere

**TUTTE le dipendenze npm verranno rimosse** perché non servono più:

### Dipendenze React/UI (50+ pacchetti)
- Tutti i `@radix-ui/*` (accordion, dialog, toast, ecc.)
- `react`, `react-dom`, `react-router-dom`
- `lucide-react` → sostituito con Bootstrap Icons
- `@tanstack/react-query`
- `tailwindcss`, `tailwind-merge`, `tailwindcss-animate`
- `class-variance-authority`, `clsx`
- `sonner`, `vaul`, `cmdk`
- `react-hook-form`, `@hookform/resolvers`, `zod`
- `recharts`, `embla-carousel-react`
- Tutte le devDependencies (vite, typescript, eslint, ecc.)

### Cosa useremo invece
- **Bootstrap 5** (via CDN) - per griglia, componenti, responsive
- **Bootstrap Icons** (via CDN) - per tutte le icone
- **Google Fonts** - Inter e Poppins (già usati)

---

## Conversione dei componenti

### Header
```text
React (Menu.tsx)           →    HTML/Bootstrap
useState per menu mobile   →    Bootstrap Navbar con toggler
lucide-react icons        →    Bootstrap Icons
```

### Servizi
```text
React (Services.tsx)       →    HTML/Bootstrap
Array.map() per cards     →    HTML statico con 6 card
Card components           →    Bootstrap Cards
```

### Testimonianze
```text
React (Testimonials.tsx)   →    HTML/Bootstrap
Array.map() per reviews   →    HTML statico con 4 card
Star icons dinamiche      →    Bootstrap Icons statiche
```

### Contact Form
```text
React (Contact.tsx)        →    HTML/Bootstrap
Input/Textarea components →    Bootstrap form controls
Button component          →    Bootstrap buttons
```

---

## Mantenimento del design

Gli stili CSS personalizzati replicheranno esattamente:

- **Colori brand**:
  - Verde primario: `#22c55e` (HSL 120 70% 50%)
  - Rosso accento: `#ef4444` (HSL 0 80% 50%)
  - Background/foreground in light mode

- **Tipografia**:
  - Font display: Poppins (titoli)
  - Font body: Inter (testo)

- **Effetti**:
  - `hover-lift` - sollevamento card al hover
  - `shadow-brand` - ombra verde sui pulsanti
  - Gradient overlay sull'hero

---

## Package.json finale

```json
{
  "name": "duofide-website",
  "version": "1.0.0",
  "description": "Sito web DUO FIDE - Associazione Cinologica",
  "private": true
}
```

Nessuna dipendenza npm - tutto funziona via CDN.

---

## Funzionalità mantenute

| Funzionalità | Implementazione |
|--------------|-----------------|
| Menu mobile hamburger | Bootstrap Navbar toggler |
| Smooth scroll ai link | CSS `scroll-behavior: smooth` |
| Pulsante "Chiamaci" → telefono | `href="tel:+39061234567"` |
| Pulsante "Contattaci" → form | `href="#contatti"` |
| Header fisso | Bootstrap `fixed-top` |
| Layout responsive | Bootstrap grid system |
| Hover effects sulle card | CSS custom |

---

## Dettagli tecnici

### CDN inclusi nell'HTML
```html
<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">

<!-- Bootstrap JS (per navbar toggler) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

### Struttura finale del progetto
```text
/
├── index.html          # Pagina principale
├── css/
│   └── style.css       # Stili personalizzati
├── js/
│   └── main.js         # JavaScript (minimo)
├── assets/
│   ├── logo-duofide.png
│   └── hero-dog.jpg
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── package.json        # Solo metadati, nessuna dipendenza
└── README.md           # Aggiornato
```

---

## Riepilogo modifiche

- **File creati**: 3 (index.html, css/style.css, js/main.js)
- **File modificati**: 2 (package.json, README.md)
- **File eliminati**: ~70+ (tutti i file React/TypeScript e configurazioni)
- **Dipendenze rimosse**: 50+ pacchetti npm
- **Aspetto finale**: Identico al sito attuale
