document.addEventListener('DOMContentLoaded', () => {
    // ⚠️ REEMPLAZÁ CON TU NÚMERO REAL DE WHATSAPP (Sin espacios, sin guiones, sin el signo +)
    const telefonoWhatsApp = "5492921424704"; 

    const buyWhatsappBtn = document.getElementById('buy-whatsapp-btn');

    if (buyWhatsappBtn) {
        buyWhatsappBtn.addEventListener('click', () => {
            const mensaje = encodeURIComponent(
                "¡Hola Silvio! Vengo desde la página web. Me interesa adquirir el e-book 'Transforma Tu Vida'. ¿Me compartís los datos para hacer la transferencia?"
            );
            
            const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${mensaje}`;
            window.open(urlWhatsApp, '_blank');
        });
    }

    // Scroll suave al navegar por las secciones
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});