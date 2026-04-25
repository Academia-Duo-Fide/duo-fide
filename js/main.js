/**
 * DUO FIDE - Main JavaScript
 */

/* ==================== SEDI DATA ====================
   Per aggiungere una nuova sede, aggiungi un oggetto
   all'array SEDI seguendo lo stesso formato.
   - telefono/email: null = nascosto, stringa = visibile
   ================================================== */
const SEDI = [
    {
        id: 'campo-addestramento',
        nome: "Campo d'addestramento",
        indirizzo: "Oratorio Parrocchia Sant'Antonio Abate",
        citta: "Torino, Italia",
        orari: "Tutti i giorni su appuntamento",
        telefono: null,
        email: null,
        mapsLink: "https://www.google.com/maps/dir/?api=1&destination=45.1139528,7.6605694&destination_place_id=ChIJRUNJ5CtshhIRpAJfjf3n3uw",
        embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.4!2d7.6605694!3d45.1139528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886c2be4494345%3A0xecdee7ad8d5f02a4!2sOratorio%20Parrocchia%20Sant'Antonio%20Abate!5e0!3m2!1sit!2sit!4v1"
    },
    /* -- ESEMPIO NUOVA SEDE: rimuovi i delimitatori e compila --
    {
        id: 'sede-2',
        nome: "Nome Sede",
        indirizzo: "Via ...",
        citta: "Città, Italia",
        orari: "Lun-Ven 9:00-18:00",
        telefono: "+39 ...",
        email: "...",
        mapsLink: "https://maps.google.com/...",
        embedSrc: "https://www.google.com/maps/embed?pb=..."
    },
    */
];

document.addEventListener('DOMContentLoaded', function () {

    // ==================== SEDI PANEL ====================
    const tabsContainer = document.getElementById('sedi-tabs');
    const infoContainer = document.getElementById('sedi-info');
    const mapIframe     = document.getElementById('sedi-map-iframe');

    function renderTabs(activeId) {
        if (!tabsContainer) return;
        tabsContainer.innerHTML = SEDI.map(s => `
            <button class="sede-tab${s.id === activeId ? ' active' : ''}" data-id="${s.id}">
                <i class="bi bi-geo-alt-fill"></i>${s.nome}
            </button>
        `).join('');
        tabsContainer.querySelectorAll('.sede-tab').forEach(btn => {
            btn.addEventListener('click', () => selectSede(btn.dataset.id));
        });
    }

    function renderInfo(sede) {
        if (!infoContainer) return;
        const rows = [];
        if (sede.orari)    rows.push(`<div class="sedi-info-row"><i class="bi bi-clock"></i><span>${sede.orari}</span></div>`);
        if (sede.telefono) rows.push(`<div class="sedi-info-row"><i class="bi bi-telephone"></i><a href="tel:${sede.telefono.replace(/\s/g,'')}">${sede.telefono}</a></div>`);
        if (sede.email)    rows.push(`<div class="sedi-info-row"><i class="bi bi-envelope"></i><a href="mailto:${sede.email}">${sede.email}</a></div>`);

        infoContainer.innerHTML = `
            <p class="sedi-info-name">${sede.nome}</p>
            <p class="sedi-info-address">${sede.indirizzo}<br>${sede.citta}</p>
            <div class="sedi-info-divider"></div>
            <div class="sedi-info-rows">${rows.join('')}</div>
            <a href="${sede.mapsLink}" target="_blank" rel="noopener noreferrer" class="sedi-info-btn">
                <i class="bi bi-map"></i> Apri in Google Maps
            </a>
        `;
    }

    function selectSede(id) {
        const sede = SEDI.find(s => s.id === id);
        if (!sede) return;
        renderTabs(id);
        renderInfo(sede);
        if (mapIframe) mapIframe.src = sede.embedSrc;
    }

    if (tabsContainer && SEDI.length > 0) {
        selectSede(SEDI[0].id);
    }

    // ==================== EMAIL JS ====================
    // SICUREZZA: configurare "Allowed Origins" su dashboard EmailJS
    // limitando a https://duofide.it per prevenire uso non autorizzato della chiave.
    // Abilitare anche il rate limiting dal pannello EmailJS.
    emailjs.init('9lYv2RyPa_o16Li6O');

    const contactForm = document.getElementById('contact-form');
    const formStatus  = document.getElementById('form-status');
    const submitBtn   = document.getElementById('form-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // ---- Honeypot anti-spam check ----
            if (contactForm['_honeypot'] && contactForm['_honeypot'].value !== '') {
                // Bot detected — silently ignore
                return;
            }
            submitBtn.disabled = true;
            submitBtn.textContent = 'Invio in corso...';
            formStatus.style.display = 'none';

            emailjs.sendForm('service_23r66p3', 'template_uqeahrb', contactForm)
                .then(function () {
                    formStatus.className = 'alert alert-success mb-3';
                    formStatus.textContent = 'Messaggio inviato con successo! Ti risponderemo al più presto.';
                    formStatus.style.display = 'block';
                    contactForm.reset();
                })
                .catch(function (error) {
                    formStatus.className = 'alert alert-danger mb-3';
                    formStatus.textContent = "Errore nell'invio. Riprova più tardi o contattaci telefonicamente.";
                    formStatus.style.display = 'block';
                    console.error('EmailJS error:', error);
                })
                .finally(function () {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Invia Messaggio';
                });
        });
    }

    // ==================== NAVBAR ====================
    const navLinks       = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        sections.forEach(function (section) {
            const sectionTop  = section.offsetTop - 100;
            const sectionId   = section.getAttribute('id');
            const navLink     = document.querySelector('.nav-link[href="#' + sectionId + '"]');
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + section.offsetHeight) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', highlightNavLink);

    const header = document.querySelector('.header-fixed');
    function handleHeaderScroll() {
        header.style.boxShadow = window.scrollY > 50
            ? '0 4px 6px -1px rgba(0,0,0,0.1)'
            : 'none';
    }
    window.addEventListener('scroll', handleHeaderScroll);
    // ==================== COLLABORAZIONI CAROUSEL ====================
    (function () {
        const track    = document.getElementById('collab-track');
        const dotsWrap = document.getElementById('collab-dots');
        const btnPrev  = document.getElementById('collab-prev');
        const btnNext  = document.getElementById('collab-next');
        if (!track) return;

        /* ---- 1. Clone slides for seamless loop ---- */
        const originals = Array.from(track.children);
        const total     = originals.length;

        originals.forEach(s => track.appendChild(s.cloneNode(true)));
        [...originals].reverse().forEach(s => track.insertBefore(s.cloneNode(true), track.firstChild));

        /* ---- 2. State ---- */
        let currentIndex = total;
        let offset       = 0;
        let autoTimer    = null;
        let isAnimating  = false;
        let paused       = false;

        function getSlideWidth() {
            return track.children[0].offsetWidth;
        }
        function getGapPx() {
            return parseFloat(getComputedStyle(track).gap) || 24;
        }
        function getViewportWidth() {
            // Width of the visible carousel area (the viewport element)
            return track.parentElement.offsetWidth;
        }
        function slideOffset(index) {
            const w  = getSlideWidth();
            const g  = getGapPx();
            const vw = getViewportWidth();
            // Center the active slide in the viewport
            const centeringOffset = (vw / 2) - (w / 2);
            return -(index * (w + g)) + centeringOffset;
        }

        /* ---- 3. Render ---- */
        function applyOffset(px, withTransition) {
            track.style.transition = withTransition ? 'transform 0.45s cubic-bezier(0.4,0,0.2,1)' : 'none';
            track.style.transform  = 'translateX(' + px + 'px)';
        }

        function jumpTo(index) {
            currentIndex = index;
            offset = slideOffset(index);
            applyOffset(offset, false);
        }

        function goTo(index, animate) {
            if (isAnimating) return;
            isAnimating = true;
            currentIndex = index;
            offset = slideOffset(index);
            applyOffset(offset, animate !== false);
            updateDots();
            setTimeout(() => {
                if (currentIndex >= total * 2) jumpTo(total);
                if (currentIndex < total)      jumpTo(total * 2 - 1);
                isAnimating = false;
            }, 470);
        }

        function goNext() { goTo(currentIndex + 1, true); }
        function goPrev() { goTo(currentIndex - 1, true); }

        /* ---- 4. Dots ---- */
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('button');
            dot.className = 'collab-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Slide ' + (i + 1));
            dot.addEventListener('click', () => { goTo(total + i, true); resetAuto(); });
            dotsWrap.appendChild(dot);
        }

        function updateDots() {
            const realIndex = ((currentIndex - total) % total + total) % total;
            dotsWrap.querySelectorAll('.collab-dot').forEach((d, i) => {
                d.classList.toggle('active', i === realIndex);
            });
            // Highlight active slide
            Array.from(track.children).forEach((slide, i) => {
                slide.classList.toggle('active', i === currentIndex);
            });
        }

        /* ---- 5. Arrows ---- */
        if (btnPrev) btnPrev.addEventListener('click', () => { goPrev(); resetAuto(); });
        if (btnNext) btnNext.addEventListener('click', () => { goNext(); resetAuto(); });

        /* ---- 6. Auto-play ---- */
        function startAuto() {
            autoTimer = setInterval(() => { if (!paused) goNext(); }, 3000);
        }
        function resetAuto() {
            clearInterval(autoTimer);
            startAuto();
        }

        track.addEventListener('mouseenter', () => { paused = true; });
        track.addEventListener('mouseleave', () => { paused = false; });

        /* ---- 7. Recalculate on resize ---- */
        window.addEventListener('resize', () => {
            applyOffset(slideOffset(currentIndex), false);
        });

        /* ---- 8. Init ---- */
        applyOffset(slideOffset(currentIndex), false);
        updateDots();
        startAuto();

    })();


});