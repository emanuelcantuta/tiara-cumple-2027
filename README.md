# 🎂 Sorpresa para Tiara 🎁 (En progreso)

🌐 **[🚀 Visitar la página web en vivo acá](https://tiara-cumple-2027.vercel.app/)** 🌐

Este repositorio contiene el código fuente de un regalo digital interactivo creado especialmente para el cumpleaños de mi amiga, Tiara. 

El proyecto es una Single Page Application (SPA) pensada para ser una experiencia visual y personalizada, combinando sus gustos favoritos en un formato de "tarjeta web" moderna.

## 🎨 Diseño y Temática
La interfaz está inspirada en una estética **Y2K / Kawaii**, buscando un balance entre lo moderno y lo tierno:
* **UI/UX:** Componentes con efecto *Glassmorphism* (vidrio esmerilado) sobre un fondo animado de cintas flotantes.
* **Pusheen:** GIFs del gatito integrados para acompañar las distintas emociones e interacciones.
* **Música y K-Pop:** Ambientación musical dinámica con artistas como CORTIS, NewJeans...

## 🚀 Logros y Estado Actual
**Fase 1: Arquitectura y Seguridad (Completada)**
* [x] Configuración de rutas hijas (`children`) y transiciones de vista (View Transitions).
* [x] Sistema de autenticación simulado con manejo de errores (animaciones CSS tipo "shake").
* [x] **Seguridad de Rutas (Guards):** Protección del contenido del regalo mediante `authGuard` y un servicio global de autenticación gestionado con Angular Signals.
* [x] **Seguridad de Credenciales:** Protección de contraseña usando variables de entorno (`.env`) inyectadas en tiempo de construcción.
* [x] **Despliegue:** CI/CD configurado y funcionando en Vercel.

**Fase 2: Componentes e Interacción (En Progreso)**
* [x] **Selector de Música (Scroll Horizontal):** Galería nativa (CSS puro sin librerías) con portadas clickeables en formato 16:9, conectadas a un servicio reactivo para cambiar la música de fondo.
* [x] **Layout Principal (Home):** Maquetado responsivo estructurado con una barra de navegación, la galería interactiva, una sección central para la carta y un menú de enlaces dinámicos para las bandas.

## 🗺️ Roadmap (Próximos Pasos)
* [ ] **Diseño de la Carta:** Estilizar la sección central de lectura (evaluando aplicar un efecto visual de hoja de papel).
* [ ] **Sección de Bandas / Biografías:** Creación de las vistas al hacer clic en los enlaces del Home. Se está decidiendo entre dos enfoques multimedia:
  * *Opción A (Galería Inmersiva):* Un diálogo o modal a pantalla completa enfocado puramente en lo visual, integrando fotos, GIFs de Pusheen/bandas y videos de YouTube (iframes).
  * *Opción B (Estilo Wiki):* Una página más estructurada con información detallada de cada integrante, decorada con imágenes/GIFs y coronada con su video musical más famoso (iframe de YouTube).
* [ ] **Integración de Pusheen:** Distribuir los assets visuales a lo largo de las vistas definitivas.
* [ ] **Formulario de Feedback:** Sistema de calificación (1 al 10) con envío de mensaje directo a mi gmail al finalizar la experiencia.

## 🛠️ Tecnologías Utilizadas
* **Frontend:** Angular (Standalone Components, Routing Avanzado, **Signals**, inyección moderna de dependencias), TypeScript, HTML5.
* **Estilos:** CSS3 Puro (Variables semánticas, Responsive Design con `clamp()` y `aspect-ratio`, Scroll Snapping nativo, Flexbox).
* **Despliegue y Hosting:** Vercel.