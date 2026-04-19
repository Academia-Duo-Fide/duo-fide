/**
 * DUO FIDE - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {

    // Initialize EmailJS
    emailjs.init('9lYv2RyPa_o16Li6O');

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('form-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            submitBtn.disabled = true;
            submitBtn.textContent = 'Invio in corso...';
            formStatus.style.display = 'none';

            emailjs.sendForm('service_23r66p3', 'template_uqeahrb', contactForm)
                .then(function() {
                    formStatus.className = 'alert alert-success mb-3';
                    formStatus.textContent = 'Messaggio inviato con successo! Ti risponderemo al più presto.';
                    formStatus.style.display = 'block';
                    contactForm.reset();
                })
                .catch(function(error) {
                    formStatus.className = 'alert alert-danger mb-3';
                    formStatus.textContent = 'Errore nell\'invio. Riprova più tardi o contattaci telefonicamente.';
                    formStatus.style.display = 'block';
                    console.error('EmailJS error:', error);
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Invia Messaggio';
                });
        });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(function(link) {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Header shadow on scroll
    const header = document.querySelector('.header-fixed');

    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', handleHeaderScroll);
});