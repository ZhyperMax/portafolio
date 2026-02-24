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
        title: 'Portafolio Personal',
        description: 'Sitio web moderno y responsivo creado con HTML, CSS y JavaScript vanilla. Incluye dark mode con persistencia en localStorage, animaciones suaves y diseño mobile-first. Perfecto para mostrar proyectos y habilidades de forma profesional.',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%233b82f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3EPortafolio Personal%3C/text%3E%3C/svg%3E',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Dark Mode', 'Responsive'],
        demoLink: '#',
        codeLink: '#'
    },
    2: {
        title: 'App de Tareas',
        description: 'Aplicación full-stack para gestionar tareas diarias con autenticación de usuarios. Backend con Node.js y Express, base de datos MongoDB, y frontend React con estado global. Incluye características como crear, editar, eliminar tareas y marcarlas como completadas.',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%2310b981" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3EApp de Tareas%3C/text%3E%3C/svg%3E',
        techs: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
        demoLink: '#',
        codeLink: '#'
    },
    3: {
        title: 'Tienda Online',
        description: 'E-commerce completo con carrito de compras y pasarela de pago Stripe integrada. Desarrollado con Vue.js en el frontend y Firebase para autenticación y almacenamiento. Interfaz intuitiva, búsqueda de productos, filtros y checkout seguro.',
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f59e0b" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3ETienda Online%3C/text%3E%3C/svg%3E',
        techs: ['Vue.js', 'Firebase', 'Stripe', 'JavaScript', 'Tailwind CSS'],
        demoLink: '#',
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
