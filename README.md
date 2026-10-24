# Agustinos Bolivia — Portal Web Institucional (O.S.A.)

Sitio web oficial interactivo, moderno y modular para los **Agustinos de Bolivia — Vicariato de Bolivia de la Orden de San Agustín (O.S.A.)**.

Inspirado en la estructura y elegancia de [agustinos.es](https://agustinos.es/) (Provincia de San Juan de Sahagún, España), adaptado con identidad boliviana, historia de más de 90 años en el país, sus colegios insignes (Colegio San Agustín de Cochabamba), el Teologado Latinoamericano y sus misiones en los Yungas.

---

## 🏛️ Estructura del Proyecto

El sitio web está completamente estructurado de forma modular y separada (sin agrupar todo en un único archivo), facilitando su mantenimiento, rendimiento y escalabilidad:

```
agustinos/
│
├── index.html                      # Portada principal: Hero slider, pilares, estadísticas, noticias, citas y llamado vocacional
├── README.md                       # Documentación y guía de uso
│
├── pages/                          # Páginas internas organizadas
│   ├── quienes-somos.html          # Historia en Bolivia (+90 años), pilares del carisma y santos agustinianos
│   ├── que-hacemos.html            # Educación (Colegio San Agustín Cbba, Teologado), pastoral y misiones en Yungas
│   ├── ser-agustino.html           # Vocaciones, itinerario formativo, FAQ interactivo y formulario de discernimiento
│   ├── noticias.html               # Portal de actualidad con buscador en tiempo real, filtros y lector modal
│   └── contacto.html               # Directorio interactivo de comunidades, horarios de misas y formulario de contacto
│
├── css/                            # Sistema de diseño y hojas de estilo modulares
│   ├── variables.css               # Paleta agustiniana (carmesí, dorado, azul oscuro), fuentes y resets
│   ├── layout.css                  # Topbar, Header sticky con Mega-Menú, navegación móvil y Footer
│   ├── components.css              # Hero slider, tarjetas de noticias, modales, botones y badges
│   └── pages.css                   # Línea de tiempo histórica, directorio de comunidades y formularios
│
└── js/                             # Lógica interactiva desacoplada
    ├── data.js                     # Base de datos local: comunidades en Bolivia, noticias, santos y citas
    ├── components.js               # Renderizador institucional del Header, Mega-Menú, Footer y Modales
    └── main.js                     # Control de sliders, buscador global, modales, filtros, FAQ y validación
```

---

## ✨ Características y Elementos Interactivos

1. **Diseño Visual Agustiniano:**
   - Inspirado en la estética editorial de `agustinos.es`: tonos carmesí litúrgico (`#9e1b32`), dorado institucional (`#c59b27`) y azul noche (`#18243c`).
   - Tipografía con jerarquía clásica y legible: *Cormorant Garamond* para títulos y *Plus Jakarta Sans* para lectura.
   - Escudo oficial vectorial agustiniano (el libro abierto con el corazón ardiente atravesado por la flecha).

2. **Navegación con Mega-Menú y Topbar:**
   - Topbar con accesos directos, teléfonos y redes sociales.
   - Header con mega-menús desplegables en escritorio y navegación adaptada a dispositivos móviles.

3. **Buscador Global Instantáneo:**
   - Al pulsar el botón de búsqueda (o en el modal), permite buscar comunidades, colegios, noticias y santos en tiempo real.

4. **Hero Slider Automático y Manual:**
   - Carrusel de portada con imágenes en alta calidad, indicadores y lemas institucionales.

5. **Lector de Artículos y Biografías en Modal:**
   - Las noticias y semblanzas de santos (San Agustín, Santa Mónica, San Nicolás de Tolentino, Fray Antonio de la Calancha) se abren en modales interactivos con formato enriquecido.

6. **Directorio y Filtros por Departamento:**
   - Filtro interactivo de comunidades y templos en Cochabamba, La Paz, Sud Yungas y Santa Cruz.

7. **Preguntas Frecuentes (FAQ) en Acordeón:**
   - Sistema de respuestas interactivas sobre el proceso vocacional y la vida comunitaria.

8. **Formularios con Notificaciones Toast:**
   - Formularios para discernimiento vocacional y contacto general con validación y confirmación en pantalla.

---

## 🚀 Cómo Visualizar la Página Web

Puedes abrir directamente cualquiera de los archivos `.html` en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Firefox, Safari).

- Para la portada: abre directamente [index.html](file:///C:/Users/ASUS/PJ/paginas%20web/agustinos/index.html).
- O si cuentas con la extensión *Live Server* de Visual Studio Code o cualquier servidor local (como `python -m http.server 8000`), puedes iniciarlo en la carpeta raíz.
