export interface PusheenMessage {
    id: number;
    envelopeLabel: string; // Lo que dice el sobre por fuera antes de abrirlo
    stampEmoji: string;    // El emoji del sello del sobre
    title: string;         // Título interno de la minicarta
    text: string;          // Tu frase tierna o mensaje
    gif: string;           // Ruta del GIF de Pusheen
    themeColor: string; // Color pastel para el borde/detalle
}
