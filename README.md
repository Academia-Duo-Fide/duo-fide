# Academia DUO FIDE — Sito Web Ufficiale

Sito web ufficiale dell' **Academia DUO FIDE - Associazione Cinologica ASD APS** di Torino.  
Motto: *Educare per Aiutare, Aiutare per Educare.*

🌐 **Live:** [https://duofide.it](https://duofide.it)  
📧 **Contatto:** duofide@gmail.com

---

## Struttura del progetto

```
duo-fide/
├── index.html                          # Pagina principale
├── cookie-policy.html                  # Pagina Cookie Policy
├── privacy-policy.html                 # Pagina Privacy Policy
├── sitemap.xml                         # Sitemap per SEO
├── CNAME                               # Dominio personalizzato GitHub Pages
├── package.json                        # Dipendenze Node (dev only)
├── package-lock.json                   # Lock file npm
├── bun.lock                            # Lock file Bun
├── bun.lockb                           # Lock file Bun (binario)
├── README.md                           # Questo file
│
├── assets/                             # Immagini e risorse statiche
│   ├── logo-duofide.png                # Logo principale (navbar, footer, Chi Siamo)
│   ├── white-logo-duofide.jpeg         # Logo bianco (favicon)
│   ├── hero-dog.jpg                    # Immagine hero section
│   ├── partner-acsi.png                # Logo partner ACSI
│   ├── partner-fisc.png                # Logo partner FISC
│   ├── partner-aicas.png               # Logo partner A.I.C.A.S.
│   ├── partner-athena.png              # Logo partner Athena Pet Care
│   └── partner-ifcs.png               # Logo partner IFCS
│
├── css/
│   └── style.css                       # Tutti gli stili personalizzati
│
├── js/
│   └── main.js                         # JavaScript principale
│
├── doc/
│   └── Presentazione sintetica         # Documento PDF del progetto
│       progetto ACADEMIA DUO FIDE.pdf
│
└── public/
    ├── favicon.ico                     # Favicon
    ├── placeholder.svg                 # SVG placeholder
    └── robots.txt                      # Direttive per i crawler
```

---

## Tecnologie utilizzate

| Tecnologia | Versione | Utilizzo |
|---|---|---|
| HTML5 | — | Struttura semantica |
| CSS3 | — | Stili personalizzati |
| JavaScript | ES6+ | Interazioni e logica client |
| Bootstrap | 5.3.3 | Framework CSS (via CDN) |
| Bootstrap Icons | 1.11.3 | Icone (via CDN) |
| Google Fonts | — | Tipografia: Inter + Poppins |
| EmailJS | 4.x | Invio email dal form di contatto |
| Google Maps Embed | — | Mappa interattiva sedi |

---

## Sezioni del sito (`index.html`)

| Sezione | ID | Descrizione |
|---|---|---|
| Header | — | Navbar fissa, responsive (hamburger < 1200px) |
| Hero | `#home` | Immagine fullscreen con titolo e CTA |
| Servizi | `#servizi` | 7 card con i servizi dell'associazione |
| Chi Siamo | `#chi-siamo` | Presentazione, team e valori |
| Testimonianze | `#testimonianze` | Recensioni di utenti e partner |
| Contatti | `#contatti` | Form EmailJS + info di contatto |
| Collaborazioni | `#collaborazioni` | Carousel automatico dei partner |
| Dove Trovarci | `#dove-trovarci` | Mappa Google interattiva + info sede |
| Footer | — | Link rapidi, contatti, social, legali |

---

## Funzionalità JavaScript (`js/main.js`)

### SEDI — Mappa dinamica
L'array `SEDI` in cima al file controlla la sezione *Dove Trovarci*.  
Per **aggiungere una nuova sede** basta aggiungere un oggetto all'array:

```js
const SEDI = [
    {
        id: 'campo-addestramento',
        nome: "Campo d'addestramento",
        indirizzo: "Oratorio Parrocchia Sant'Antonio Abate",
        citta: "Torino, Italia",
        orari: "Tutti i giorni su appuntamento",
        telefono: null,       // null = nascosto
        email: null,          // null = nascosto
        mapsLink: "https://...",
        embedSrc: "https://www.google.com/maps/embed?pb=..."
    },
    // aggiungi qui nuove sedi...
];
```

### Carousel Collaborazioni
- Scorrimento automatico ogni **3 secondi**
- **Pausa** al passaggio del mouse
- Slide centrata attiva con highlight verde
- Navigazione tramite **frecce** e **dot indicators**
- Loop infinito senza salti (tecnica clone + riposizionamento silenzioso)

### Form di contatto
Gestito tramite **EmailJS** con:
- Service ID: `service_23r66p3`
- Template ID: `template_uqeahrb`
- Public Key: configurata in `emailjs.init()`

### Cookie Banner
Gestione consenso tramite `localStorage` (`cookie_consent`).  
Valori possibili: `'accepted'` | `'rejected'`.

---

## Aggiungere un partner al carousel

1. Aggiungi l'immagine del logo in `assets/` (es. `partner-nuovo.png`)
2. In `index.html`, aggiungi un blocco `.collab-slide` dentro `#collab-track`:

```html
<div class="collab-slide">
    <a href="https://www.sitepartner.it/" target="_blank" rel="noopener noreferrer" class="collab-link">
        <img src="assets/partner-nuovo.png" alt="Nome Partner" class="collab-logo">
    </a>
</div>
```

3. Aggiorna `cookie-policy.html` e `privacy-policy.html` con il nuovo partner.

---

## Aggiungere una sede alla mappa

Modifica l'array `SEDI` in `js/main.js` aggiungendo un nuovo oggetto (vedi sezione sopra).  
Per ottenere l'`embedSrc` corretto:
1. Vai su [Google Maps](https://maps.google.com)
2. Cerca la sede
3. Clicca **Condividi → Incorpora una mappa**
4. Copia il valore dell'attributo `src` dall'iframe

---

## Sviluppo locale

```bash
# Clona il repository
git clone https://github.com/Academia-Duo-Fide/duo-fide.git
cd duo-fide

# Apri direttamente nel browser
open index.html

# Oppure usa un server locale
python -m http.server 8080
# → http://localhost:8080

# Con Node.js / Bun
npx serve
# oppure
bunx serve
```

---

## Deploy

Il sito è hostato su **GitHub Pages** con dominio personalizzato `duofide.it` (configurato via `CNAME`).

Ogni push sul branch `main` aggiorna automaticamente il sito live.

```bash
git add .
git commit -m "Descrizione delle modifiche"
git push origin main
```

---

## Note legali e GDPR

- `privacy-policy.html` — Informativa privacy (aggiornata: Aprile 2026)
- `cookie-policy.html` — Cookie policy con elenco servizi terze parti (aggiornata: Aprile 2026)
- Servizi terze parti dichiarati: Bootstrap CDN, Google Fonts, EmailJS, Google Maps, link partner

---

## Contatti

| | |
|---|---|
| **Referente** | Dott. Roberto Collura |
| **Email** | duofide@gmail.com |
| **Telefono** | +39 392 620 18 22 |
| **Sito** | https://duofide.it |

---

© 2026 Academia DUO FIDE ASD APS — Associazione Cinologica. Tutti i diritti riservati.