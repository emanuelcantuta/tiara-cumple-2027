# 🎂 Sorpresa para Tiara 🎁

🌐 **[🚀 Visitar la página web en vivo acá](https://tiara-cumple-2027.vercel.app/)** 🌐

Este repositorio contiene el código fuente de un regalo digital interactivo creado especialmente para el cumpleaños de mi amiga, Tiara. 

El proyecto es una Single Page Application (SPA) pensada para ser una experiencia visual, gamificada y personalizada, combinando sus gustos favoritos en un formato de "tarjeta web" moderna con dinámicas de *Escape Room*.

## 🎨 Diseño y Temática
La interfaz está inspirada en una estética **Y2K / Kawaii**, buscando un balance entre lo moderno, lo editorial y lo tierno:
* **UI/UX:** Componentes con efecto *Glassmorphism* (vidrio esmerilado), paletas de colores pastel adaptativas, tipografías globales unificadas (`Fredoka Variable` y `Quicksand Variable`), diálogos nativos (`<dialog>`) y layouts responsivos amigables para lectura.
* **Pusheen:** GIFs e iconos personalizados integrados estratégicamente para acompañar las emociones y la interactividad (botones de destinos, sobrecitos interactivos, reacciones a contraseñas, pantallas de Game Over, etc.).
* **Música y K-Pop:** Ambientación musical dinámica enfocada 100% en sus artistas y grupos favoritos. El catálogo cuenta con pistas de CORTIS, ENHYPEN, EVAN, aespa y LOONA.

## 🚀 Arquitectura y Funcionalidades Completadas

**Fase 1: Arquitectura, Rendimiento y Seguridad (Completada)**
* [x] Configuración de rutas hijas (`children`) dinámicas basadas en `DestinationId` y transiciones de vista nativas (View Transitions API).
* [x] **Arquitectura Limpia:** Implementación de Path Aliasing (`@components`, `@services`, `@models`, `@guards`) y estandarización de variables globales y tipografías en `styles.css`.
* [x] **Seguridad:** Protección de rutas mediante `authGuard`, servicio de autenticación con Angular Signals y variables de entorno en producción.
* [x] **Optimización de Rendimiento:** Aislamiento de animaciones CSS, uso de `loading="lazy"`, `fetchpriority` y `decoding="async"` en imágenes/GIFs, y `preload="metadata"` en reproductores multimedia.
* [x] **Accesibilidad (a11y) y SEO:** Configuración completa de metadatos Open Graph, Twitter Cards, set completo de Favicons (`apple-touch-icon`, `webmanifest`) y uso semántico de botones interactivos (`<button>`, `title` y `aria-label`).

**Fase 2: Componentes e Interacción Global (Completada)**
* [x] **Selector de Música (Scroll Horizontal):** Galería interactiva con portadas que inyectan su propio color de fondo de forma dinámica desde el modelo de datos (`Track`).
* [x] **Motor de Audio Reactivo y Sincronizado:** Servicio global (`Audio`) conectado a Angular Signals, sincronizado en tiempo real con la barra de navegación (`TopNav`) mediante eventos nativos del DOM y preparado para pausarse automáticamente al reproducir videos locales.
* [x] **Gamificación y Destinos:** Lista de destinos con iconografía personalizada y estado de bloqueo gestionado desde TypeScript.
* [x] **Modal Secreto ("Escape Room"):** Sección bloqueada con `<dialog>` nativo, validación contra un array centralizado de pistas (`SECRET_CLUES` y `FULL_SECRET_PASSWORD`) que normaliza espacios y mayúsculas, y animaciones de feedback (`.shake`).

**Fase 3: Destinos, Escape Room y Sorpresa Final (Completada)**
* [x] **Zona Cortis:** Layout editorial estilo revista/wiki con diseño *Bento Grid*, visor de fotos a pantalla completa, carrusel con *Scroll Snapping*, video musical y la **Pista #1** camuflada en la galería de Martin.
* [x] **Multiverso de Personajes:** Maquetado responsivo estilo "cartas coleccionables" renderizado dinámicamente con acceso oculto al minijuego.
* [x] **Minijuego "Pusheen-tados":** Trivia interactiva con ruleta generada en CSS (`conic-gradient`), sistema de vidas, temporizador visual, comodín 50/50, modal de "Game Over" y entrega de la **Pista #2** al ganar.
* [x] **Buzón de Pusheen (`mensajes-pusheen`):** Cuadrícula de sobres cerrados con solapa y sello en CSS puro que revelan minicartas personalizadas al abrirse, contador de progreso y desbloqueo automático de un reproductor de video vertical (`9:16`) con la **Pista #3**.
* [x] **Regalo Sorpresa (`secreto`):** Destino final desbloqueable con insignia de logro, carta principal estilo papelería (`From / To`) de altura libre, reproductor de video horizontal (`16:9`) con auto-pausa de música de fondo y footer de despedida.
* [x] **Buzón de Respuesta Directa (Resend API):** Formulario interactivo al final del recorrido (calificación con estrellas, selección de sección favorita por *chips* y mensaje libre) conectado a una *Vercel Serverless Function* (`/api/send.js`) que envía la respuesta por correo electrónico en tiempo real.

## 📝 Pendientes de Contenido (Pre-Lanzamiento)
* [ ] Redactar el texto definitivo de la carta final en el componente `Secreto`.
* [ ] Grabar y subir el video vertical con la pista final (`mensajes-pusheen`) y el video musical editado con subtítulos (`secreto`).

## 🛠️ Tecnologías Utilizadas
* **Frontend:** Angular (Standalone Components, Routing, **Signals**, FormsModule, Inyección de dependencias), TypeScript, HTML5 semántico.
* **Estilos:** CSS3 Puro (Variables globales, Responsive Design, CSS Grid / Bento Layout, Flexbox, Scroll Snapping, Glassmorphism, `@keyframes`), `@fontsource-variable` (Fredoka y Quicksand).
* **Backend & Email:** Vercel Serverless Functions (Node.js) + **Resend API**.
* **Despliegue y Hosting:** Vercel (CI/CD automático).