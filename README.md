# 🎂 Sorpresa para Tiara 🎁 (En progreso)

Este repositorio contiene el código fuente de un regalo digital interactivo creado especialmente para el cumpleaños de mi amiga, Tiara. 

El proyecto es una Single Page Application (SPA) pensada para ser una experiencia visual y personalizada, combinando sus gustos favoritos en un formato de "tarjeta web" moderna.

## 🎨 Diseño y Temática
La interfaz está inspirada en una estética **Y2K / Kawaii**, buscando un balance entre lo moderno y lo tierno:
* **UI/UX:** Componentes con efecto *Glassmorphism* (vidrio esmerilado) sobre un fondo animado de cintas flotantes.
* **Pusheen:** GIFs del gatito integrados para acompañar las distintas emociones e interacciones.
* **Música y K-Pop:** Ambientación musical dinámica con artistas como CORTIS, NewJeans...

## 🚀 Logros y Estado Actual
**Fase 1: Arquitectura y Seguridad (Completada)**
* [x] Configuración del enrutamiento de Angular con transiciones de vista (View Transitions).
* [x] Sistema de autenticación (Login) simulado con manejo de errores (animaciones CSS tipo "shake").
* [x] **Seguridad:** Protección de credenciales usando variables de entorno (`.env`) inyectadas en tiempo de construcción.
* [x] **Estilos:** Arquitectura CSS modular y escalable.
* [x] **Despliegue:** CI/CD configurado y funcionando en Vercel.

## 🗺️ Roadmap (Próximos Pasos)
**Fase 2: Componentes e Interacción (En Desarrollo)**
* [ ] **Selector de Música (UI Scroll Horizontal):** Tarjetas clickeables para cambiar la canción de fondo (CORTIS, ENHYPEN, NEWJEANS...).
* [ ] **Categorías de Regalos (Tabs):** Navegación por pestañas con diferentes temáticas que cambien dinámicamente el contenido de la tarjeta.
* [ ] **Sección de Bandas / Biografías (Diseño en evaluación):** Creación de un espacio para explorar información de sus grupos favoritos. Se está decidiendo entre dos enfoques multimedia:
  * *Opción A (Galería Inmersiva):* Un diálogo o modal a pantalla completa enfocado puramente en lo visual, integrando fotos, GIFs de Pusheen/bandas y videos de YouTube (iframes).
  * *Opción B (Estilo Wiki):* Una página más estructurada con información detallada de cada integrante, decorada con imágenes/GIFs y coronada con su video musical más famoso (iframe de YouTube).
* [ ] **Integración de Pusheen:** Distribuir los assets visuales a lo largo de las vistas.
* [ ] **Formulario de Feedback:** Sistema de calificación (1 al 10) con envío de mensaje directo a mi gmail al finalizar la experiencia.

## 🛠️ Tecnologías Utilizadas
* **Frontend:** Angular (Standalone Components), TypeScript, HTML5.
* **Estilos:** CSS3 Puro (Variables semánticas, animaciones Keyframes, Flexbox).
* **Despliegue y Hosting:** Vercel.