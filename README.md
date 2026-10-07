# 🎂 Sorpresa para Tiara 🎁 (En progreso)

🌐 **[🚀 Visitar la página web en vivo acá](https://tiara-cumple-2027.vercel.app/)** 🌐

Este repositorio contiene el código fuente de un regalo digital interactivo creado especialmente para el cumpleaños de mi amiga, Tiara. 

El proyecto es una Single Page Application (SPA) pensada para ser una experiencia visual y personalizada, combinando sus gustos favoritos en un formato de "tarjeta web" moderna.

## 🎨 Diseño y Temática
La interfaz está inspirada en una estética **Y2K / Kawaii**, buscando un balance entre lo moderno y lo tierno:
* **UI/UX:** Componentes con efecto *Glassmorphism* (vidrio esmerilado) en la navegación, paletas de colores pastel adaptativas para las tarjetas, diálogos nativos (`<dialog>`) y layouts responsivos amigables para lectura.
* **Pusheen:** GIFs del gatito integrados estratégicamente para acompañar las emociones y la interactividad (reacciones a contraseñas, globos decorativos, etc.).
* **Música y K-Pop:** Ambientación musical dinámica enfocada 100% en sus artistas y grupos favoritos. El catálogo actual cuenta con pistas de CORTIS, ENHYPEN, EVAN, aespa y LOONA.

## 🚀 Logros y Estado Actual
**Fase 1: Arquitectura, Rendimiento y Seguridad (Completada)**
* [x] Configuración de rutas hijas (`children`) y transiciones de vista nativas (View Transitions API).
* [x] **Arquitectura Limpia:** Implementación de Path Aliasing (`@components`, `@services`, etc.) y refactorización total del HTML/CSS.
* [x] **Seguridad:** Protección de rutas mediante `authGuard`, servicio de autenticación con Angular Signals, y variables de entorno inyectadas.
* [x] **Optimización de Rendimiento:** Aislamiento de animaciones CSS pesadas, uso de `loading="lazy"` para la carga diferida de GIFs/imágenes ocultas, y `preload="metadata"` en el reproductor de audio global.
* [x] **Accesibilidad (a11y) y SEO:** Configuración de metadatos OpenGraph para previsualizaciones en redes sociales y uso semántico de atributos `title` y `aria-label`.

**Fase 2: Componentes e Interacción Global (Completada)**
* [x] **Selector de Música (Scroll Horizontal):** Galería nativa (CSS puro) con portadas clickeables que asignan dinámicamente colores de fondo según la posición matemática de la tarjeta (`:nth-child`).
* [x] **Motor de Audio Reactivo:** Servicio global conectado a Angular Signals con Play/Pause dinámico.
* [x] **Gamificación y Rutas Dinámicas:** Generación de la lista de destinos consumiendo un `Enum` y una Interfaz (`Destination`) desde TypeScript.
* [x] **Modal Secreto ("Escape Room"):** Implementación de una sección bloqueada utilizando la etiqueta HTML5 `<dialog>` con alternancia de vistas usando Signals, validación interna y animaciones de error (`.shake`).
* [x] **Refactor UI Global:** Mejora de responsividad en la navegación superior (uso de padding dinámico en lugar de alturas fijas) y estandarización de variables CSS (ej. `--margin-bottom-text`).

**Fase 3: Destinos y Escape Room (En curso)**
* [x] **Zona Cortis (Completada):** Layout editorial con diseño *Bento Grid*, galería de imágenes con *Scroll Snapping*, y cierre inmersivo con video musical en reproducción automática (iframe moderno con `aspect-ratio`).
* [x] **Pistas Ocultas - Nivel 1:** Integración de la primera pieza de la contraseña camuflada estéticamente en el carrusel de la galería de Martín.
* [x] **Personajes - UI Base (Completada):** Maquetado responsivo (estilo "cartas coleccionables") renderizado dinámicamente mediante un modelo de datos en TypeScript, con fondo animado de burbujas pastel.

## 🗺️ Roadmap (Próximos Pasos)
* [ ] **Minijuego "Pusheen-tados" (En curso):** Desarrollo de una trivia interactiva estilo ruleta oculta dentro de la sección "Personajes". Contará con sistema de vidas, comodines y validación lógica para liberar la segunda pista.
* [ ] **Diseño de la Carta (Home):** Darle formato estético al texto interior de la sección central para que transmita la sensación de ser un pergamino o tarjeta física de bienvenida.
* [ ] **Mensajes Pusheen:** Interfaz tierna con frases o mini-cartas.
* [ ] **Regalo Sorpresa (Ruta Secreta):** La carta final y verdadera sorpresa una vez que descubre la contraseña oculta en las otras secciones.
* [ ] **Formulario de Feedback:** Sistema de calificación (1 al 10) con envío de mensaje directo por email al finalizar la experiencia.

## 🛠️ Tecnologías Utilizadas
* **Frontend:** Angular (Standalone Components, Routing, **Signals**, Inyección de dependencias), TypeScript, HTML5 semántico.
* **Estilos:** CSS3 Puro (Variables semánticas, Responsive Design, CSS Grid/Bento Layout, Scroll Snapping, Glassmorphism, animaciones `@keyframes`).
* **Despliegue y Hosting:** Vercel (CI/CD automático).