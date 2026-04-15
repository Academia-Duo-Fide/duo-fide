

## Piano: Migliorie SEO per GitHub Pages

Il sito è già perfettamente compatibile con GitHub Pages (è statico puro). Le modifiche SEO che farò sono tutte statiche e non cambiano nulla del funzionamento attuale.

### Cosa farò

1. **Creare `sitemap.xml`** — Un file che dice a Google quali pagine ha il sito (index, privacy, cookie policy). Serve un dominio definitivo, ma per ora lo preparo con un placeholder da aggiornare quando avrai il dominio.

2. **Aggiornare `robots.txt`** — Aggiungo il riferimento al sitemap.

3. **Aggiungere tag SEO a `index.html`** — Canonical URL, `og:url`, e dati strutturati Schema.org (JSON-LD) che aiutano Google a capire che Duo Fide è un'associazione.

4. **Aggiungere canonical URL anche alle pagine policy** — Per completezza SEO su `privacy-policy.html` e `cookie-policy.html`.

### Cosa NON cambio

- Nessuna modifica al design, layout o funzionalità
- Nessun framework o dipendenza aggiunta
- Tutto resta statico e compatibile GitHub Pages

### Nota importante

Quando avrai il dominio definitivo (es. `www.duofide.it`), dovremo sostituire l'URL placeholder in sitemap, canonical e og:url. È una modifica di 2 minuti.

