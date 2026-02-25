# 🎨 Portafolio Personal - Beto

Un portafolio web moderno, responsivo y con modo oscuro. Diseñado para mostrar tus proyectos de forma profesional y atractiva.

## ✨ Características

### 🎯 Sección Hero
- Presentación con subtítulo profesional
- Botones de acción (Ver trabajo + Descargar CV)
- Métricas destacadas (+3 Proyectos, 2+ Años, 100% Responsive)
- Animaciones suaves al cargar

### 🔥 Proyecto Destacado (Inflation Tracker)
- **Galería de imágenes interactiva**
  - Imagen principal grande
  - 3 miniaturas con preview
  - Click para ampliar en lightbox
- **Información detallada**
  - Título y subtítulo
  - Descripción extendida
  - Features destacadas con checkmarks
  - Badges de tecnologías
- **Tags visuales** - Data Visualization, API Integration, Real World Data
- **Botones de acción** - Ver Demo y Ver Código

### 📊 Galería de Proyectos
- Grid responsive con tarjetas elegantes
- Hover effects profesionales
- Información técnica en badges
- Click para abrir modal con detalles completos

### 🌙 Modo Oscuro
- Toggle fácil en la navbar
- Transiciones suaves
- Preferencia guardada en localStorage
- Colores optimizados para legibilidad

### 📱 Responsive Design
- Desktop optimizado
- Tablet con ajustes de layout
- Mobile-first con optimizaciones visuales
- Navegación adaptativa

### 💬 Modal de Proyectos
- Imagen del proyecto ampliada
- Descripción completa
- Lista de tecnologías
- Enlaces a Demo y Código
- Cerrable con X, ESC o click fuera

### 👤 Sección Sobre Mí
- Biografía personalizable
- Grid de habilidades
- Diseño limpio y profesional

### 📬 Sección de Contacto
- Enlaces a email, LinkedIn y GitHub
- Botones styled con hover effects
- Diseño oscuro profesional

## 🛠️ Tecnologías

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno
  - CSS Grid y Flexbox
  - Variables CSS para temas
  - Media queries responsive
  - Animaciones y transiciones

- **JavaScript (Vanilla)**
  - Interactividad sin frameworks
  - Lightbox para imágenes
  - Modal para proyectos
  - Dark mode con localStorage
  - Intersection Observer para animaciones

### Características Técnicas
- **Animaciones fluidas** - Fade in, slide up, float
- **Efectos hover** profesionales
- **Lightbox modal** para ampliar imagenes
- **Dark mode persistente** en localStorage
- **Menú móvil** con animación hamburguesa
- **Scroll smooth** automático

## 📁 Estructura de Carpetas

```
portafolio/
├── index.html          # Archivo principal
├── styles.css          # Estilos completos
├── script.js           # Interactividad
├── README.md           # Este archivo
├── cv.pdf              # Tu CV (descargable)
└── img/
    ├── inflacion.png      # Proyecto 1 - Main
    ├── inflacion 2.png    # Proyecto 1 - Miniatura 1
    ├── inflacion 3.png    # Proyecto 1 - Miniatura 2
    ├── inflacion 4.png    # Proyecto 1 - Miniatura 3
    ├── juego.png          # Proyecto 2
    └── ocr-editor.png     # Proyecto 3
```

## 🚀 Cómo Usar

### 1. Personalización Básica

**HTML** - Edita `index.html`:
- Reemplaza "Beto" con tu nombre
- Actualiza el subtítulo en hero
- Cambia "tu@email.com" por tu email
- Agrega tus links de LinkedIn y GitHub

**Proyectos:**
- Modifica titles, descripciones y tecnologías
- Reemplaza imágenes en `img/`
- Actualiza URLs de demo y código

### 2. Agregar tu CV

1. Convierte tu CV a PDF
2. Nombralo `cv.pdf`
3. Coloca en la carpeta raíz
4. El botón "Descargar CV" funciona automáticamente

### 3. Agregar más Proyectos

En `script.js`, en el objeto `proyectosData`:

```javascript
4: {
    title: 'Tu Proyecto',
    description: 'Descripción completa...',
    image: 'img/tu-imagen.png',
    techs: ['Tech1', 'Tech2', 'Tech3'],
    demoLink: 'https://...',
    codeLink: 'https://github.com/...'
}
```

En `index.html`, en la sección "Otros Proyectos":

```html
<div class="proyecto-card" data-proyecto="4">
    <div class="proyecto-header">
        <h3>Tu Proyecto</h3>
        <span class="proyecto-tech">Tech1 • Tech2</span>
    </div>
    <p>Descripción breve...</p>
    <a href="#" class="proyecto-link">Ver proyecto →</a>
</div>
```

### 4. Cambiar Colores

En `styles.css`, modifica `:root`:

```css
:root {
    --primary: #1a1a1a;      /* Color texto principal */
    --secondary: #ffffff;    /* Color fondo */
    --accent: #3b82f6;       /* Color azul - ¡CAMBIA ESTO! */
    --gray-light: #f5f5f5;   /* Gris claro */
    --gray-dark: #4a4a4a;    /* Gris oscuro */
}
```

## 🎨 Proyectos Actuales

### 1. 🔥 **Inflation Tracker** (Destacado)
- **Descripción:** Dashboard con APIs oficiales (INDEC, World Bank)
- **Tecnologías:** Vanilla JS, Fetch API, SVG dinámico
- **Demo:** https://inflationdashboardworld.netlify.app/
- **Features:** 
  - Visualización de datos en tiempo real
  - Normalización de formatos
  - Gráficos SVG dinámicos
  - Cache inteligente

### 2. 🎮 **Adivina Colores Online**
- **Descripción:** Juego multijugador con ranking
- **Tecnologías:** React, Firebase, Realtime DB
- **Demo:** https://buscacolores.netlify.app/
- **Features:**
  - Modo solo y multijugador
  - Chat en tiempo real
  - Ranking global
  - Sistema de puntuación

### 3. 🛠️ **OCR Editor**
- **Descripción:** Herramienta para editar texto en imágenes
- **Tecnologías:** React, Canvas API, Tesseract.js
- **Demo:** https://orc-educativo.netlify.app/
- **Features:**
  - Detección automática de texto
  - Edición visual
  - Descarga de imágenes editadas

## 💡 Tips Profesionales

✅ **Haz:**
- Mantén las descripciones claras y concisas
- Usa tecnologías reales en los badges
- Actualiza links de GitHub y demos
- Agrega más proyectos conforme avanzas
- Personaliza los colores a tu marca

❌ **Evita:**
- Dejar placeholders o "lorem ipsum"
- Links rotos en botones de acción
- Imágenes de proyectos mal optimizadas
- Tipografías inconsistentes

## 📱 Secciones por pantalla

**Desktop (1200px+)**
- Proyecto destacado: 2 columnas
- Grid de proyectos: 2 columnas
- Botones en fila

**Tablet (769px - 1199px)**
- Proyecto destacado: 1 columna (stack vertical)
- Grid de proyectos: 2 columnas
- Ajustes de espaciado

**Mobile (480px - 768px)**
- Todo en 1 columna
- Menú hamburguesa
- Botones apilados
- Imágenes más pequeñas

**Small Mobile (<480px)**
- Ultra compacto
- Fuentes más pequeñas
- Espaciado reducido

## 🌙 Dark Mode

El portafolio detecta tu preferencia:
1. **Primera visita:** usa preferencia del sistema
2. **Después:** usa lo que guardaste
3. **Toggle:** botón 🌙 en la navbar

Los cambios se guardan en `localStorage.theme`

## ⌨️ Atajos

- **ESC** - Cierra modales y lightbox
- **Click fuera** - Cierra modales
- **Scroll suave** - Automático en links internos

## 🔒 Seguridad

✅ Este portafolio:
- No recolecta datos personales
- No tiene dependencias externas problemáticas
- No hace tracking
- HTML/CSS/JS vanilla

## 📊 Performance

- ⚡ Carga rápida (sin librerías pesadas)
- 📱 Fully responsive
- 🎨 Animaciones optimizadas (GPU)
- 🎯 Lighthouse-friendly

## 🎓 Próximos pasos

1. **Agrega más proyectos**
2. **Actualiza las imágenes**
3. **Personaliza colores y fuentes**
4. **Deploy a producción** (Netlify, Vercel)
5. **Conecta con Google Analytics** (opcional)

## 📝 Licencia

Uso libre y personal. Puedes modificar y distribuir.

---

**Hecho por:** Beto  
**Año:** 2026  
**Version:** 1.0

