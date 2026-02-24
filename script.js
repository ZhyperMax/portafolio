// Menú toggle para mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');

// Toggle Dark Mode
if (themeToggle) {
    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Datos de proyectos
const proyectosData = {
    1: {
        title: 'Adivina Colores Online',
        description: 'Juego online multiplayer donde debes adivinar una secuencia secreta de 4 colores en máximo 10 intentos. Incluye modo solo contra la máquina, modo multijugador con chat en tiempo real, sistema de ranking global competitivo, y cálculo de puntos basado en precisión y velocidad. Con efectos de victoria, sonidos dinámicos y estadísticas personales detalladas.',
        image: 'img/juego.png',
        techs: ['React', 'Firebase', 'Multiplayer', 'Realtime DB', 'Chat'],
        demoLink: 'https://buscacolores.netlify.app/',
        codeLink: '#'
    },
    2: {
        title: 'OCR Editor',
        description: 'Herramienta web para editar texto dentro de imágenes sin necesidad de Photoshop. Perfecta para docentes y creadores de material escolar. Detecta automáticamente texto, permite modificarlo, cambiar tamaño, color y fuente, luego descarga la imagen editada lista para usar.',
        image: 'img/ocr-editor.png',
        techs: ['React', 'Canvas API', 'Tesseract.js', 'OCR', 'Image Processing'],
        demoLink: 'https://orc-educativo.netlify.app/',
        codeLink: '#'
    }
};

// Modal
const proyectoModal = document.getElementById('proyectoModal');
const modalClose = document.getElementById('modalClose');
const proyectoLinks = document.querySelectorAll('.proyecto-link');

function openModal(proyectoId) {
    const data = proyectosData[proyectoId];
    if (!data) return;

    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;
    
    const techsList = document.getElementById('modalTechs');
    techsList.innerHTML = data.techs.map(tech => `<span>${tech}</span>`).join('');
    
    document.getElementById('modalDemoLink').href = data.demoLink;
    document.getElementById('modalCodeLink').href = data.codeLink;
    
    proyectoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    proyectoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners para abrir modal
proyectoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const proyectoId = link.closest('.proyecto-card').getAttribute('data-proyecto');
        openModal(proyectoId);
    });
});

// Cerrar modal
modalClose.addEventListener('click', closeModal);
proyectoModal.addEventListener('click', (e) => {
    if (e.target === proyectoModal) {
        closeModal();
    }
});

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Scroll smooth para navBar
let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.background = document.body.classList.contains('dark') 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = document.body.classList.contains('dark')
            ? 'rgba(15, 23, 42, 0.98)'
            : 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollPosition = currentScroll;
});

// Intersection Observer para animaciones en scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar tarjetas de proyectos
document.querySelectorAll('.proyecto-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
});

console.log('✨ Portafolio cargado correctamente');
