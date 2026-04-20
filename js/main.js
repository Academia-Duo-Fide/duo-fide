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
        mapsLink: "https://www.google.com/maps/place/Oratorio+Parrocchia+Sant'Antonio+Abate/@45.1139528,7.6605694,17z",
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
    emailjs.init('9lYv2RyPa_o16Li6O');

    const contactForm = document.getElementById('contact-form');
    const formStatus  = document.getElementById('form-status');
    const submitBtn   = document.getElementById('form-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
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
});