export interface Character {
    id: string;
    name: string;
    origin: string; // De qué serie/juego es
    image: string;
    stat: string;   // 'Estabilidad mental: 404 Not Found', 'Nivel de ansiedad: 999%', 'Energía: "Quiero irme a mi casa"', 'Vibe: Caos y ternura'
    description: string;
    hasSecretLink?: boolean;
}
