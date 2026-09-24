# 🎂 Sorpresa para Tiara 🎁 (En progreso)

🌐 **[🚀 Visitar la página web en vivo acá](https://tiara-cumple-2027.vercel.app/)** 🌐

Este repositorio contiene el código fuente de un regalo digital interactivo creado especialmente para el cumpleaños de mi amiga, Tiara. 

El proyecto es una Single Page Application (SPA) pensada para ser una experiencia visual y personalizada, combinando sus gustos favoritos en un formato de "tarjeta web" moderna.

## 🎨 Diseño y Temática
La interfaz está inspirada en una estética **Y2K / Kawaii**, buscando un balance entre lo moderno y lo tierno:
* **UI/UX:** Componentes con efecto *Glassmorphism* (vidrio esmerilado) en la navegación, paletas de colores pastel adaptativas para las tarjetas, y layouts responsivos amigables para lectura.
* **Pusheen:** GIFs del gatito integrados estratégicamente sin interferir con la interacción del usuario (`pointer-events: none`) para acompañar la carta y las emociones.
* **Música y K-Pop:** Ambientación musical dinámica enfocada 100% en sus artistas y grupos favoritos. Actualmente el catálogo cuenta con pistas de CORTIS, ENHYPEN, NewJeans e ILLIT, aunque esta lista se depurará próximamente para incorporar opciones definitivas como LOONA, EVAN o aespa.

## 🚀 Logros y Estado Actual
**Fase 1: Arquitectura, Rendimiento y Seguridad (Completada)**
* [x] Configuración de rutas hijas (`children`) y transiciones de vista nativas (View Transitions API).
* [x] **Arquitectura Limpia:** Implementación de Path Aliasing (`@components`, `@services`, etc.) y refactorización total del HTML/CSS para centralizar responsabilidades (ej. `max-width: 900px` en el contenedor principal).
* [x] **Optimización de Rendimiento:** Aislamiento de animaciones CSS pesadas (como el fondo de cintas en movimiento) exclusivamente a las pantallas de autenticación, evitando el consumo de GPU en segundo plano.
* [x] **Seguridad:** Protección de rutas mediante `authGuard`, servicio de autenticación con Angular Signals, y variables de entorno inyectadas en tiempo de construcción.

**Fase 2: Componentes e Interacción (En Progreso)**
* [x] **Selector de Música (Scroll Horizontal):** Galería nativa (CSS puro) con portadas clickeables que asignan dinámicamente colores de fondo según la posición matemática de la tarjeta (`:nth-child`).
* [x] **Motor de Audio Reactivo:** Servicio global conectado a Angular Signals con un control centralizado de volumen (configurado al 30% por defecto) y Play/Pause dinámico.
* [x] **Layout Principal (Home):** Maquetado centrado de lectura estructurado con una barra de navegación *Glassmorphism*, galería interactiva, sección central para la carta y primer GIF decorativo integrado.

## 🗺️ Roadmap (Próximos Pasos)
* [ ] **Lógica de Destinos:** Generación dinámica de la lista de bandas/destinos consumiendo un `Enum` centralizado, evitando hardcodear el HTML.
* [ ] **Integración de Pusheen:** Distribuir el resto de los assets visuales (GIFs) del gatito a lo largo de las vistas definitivas a medida que se vayan creando.
* [ ] **Diseño de la Carta:** Darle formato estético al texto interior de la sección central para que transmita la sensación de ser un regalo físico/personal.
* [ ] **Sección de Bandas / Biografías:** Creación de las vistas al hacer clic en los enlaces del Home. Se está decidiendo entre dos enfoques multimedia:
  * *Opción A (Galería Inmersiva):* Un diálogo o modal a pantalla completa enfocado puramente en lo visual, integrando fotos, GIFs y videos de YouTube (iframes).
  * *Opción B (Estilo Wiki):* Una página más estructurada con información detallada, decorada con imágenes/GIFs y su video musical más famoso.
  * *Opción C:* Cambio de idea. Páginas más enfocadas en la cumpleañera, con un estilo más personal y menos enciclopédico, pero incluyendo a estas bandas.
* [ ] **Formulario de Feedback:** Sistema de calificación (1 al 10) con envío de mensaje directo por email al finalizar la experiencia.

## 🛠️ Tecnologías Utilizadas
* **Frontend:** Angular (Standalone Components, Routing, **Signals**, Inyección de dependencias), TypeScript, HTML5.
* **Estilos:** CSS3 Puro (Variables semánticas, Responsive Design con `clamp()` y `aspect-ratio`, Scroll Snapping, Glassmorphism, selectores `:nth-child` avanzados).
* **Despliegue y Hosting:** Vercel (CI/CD automático).