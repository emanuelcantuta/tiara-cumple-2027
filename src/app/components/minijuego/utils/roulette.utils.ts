import { Question } from '../models/question';

/**
 * Genera el string para el gradiente cónico CSS de la ruleta
 * dividiendo 360 grados equitativamente entre las preguntas disponibles.
 */
export function calculateRouletteGradient(questions: Question[]): string {
  if (questions.length === 0) {
    return '#f0f0f0';
  }

  const sliceSize = 360 / questions.length;
  const stops = questions.map((q, index) => {
    const startAngle = index * sliceSize;
    const endAngle = startAngle + sliceSize;
    return `${q.color} ${startAngle}deg ${endAngle}deg`;
  });

  return `conic-gradient(${stops.join(', ')})`;
}

/**
 * Calcula la rotación acumulada necesaria para que el puntero superior
 * apunte exactamente al centro del sector seleccionado tras 5 giros completos.
 */
export function calculateSpinTarget(
  selectedIndex: number,
  totalItems: number,
  currentRotation: number,
  extraSpinsCount: number = 5
): number {
  if (totalItems <= 0) {
    return currentRotation;
  }

  const sliceSize = 360 / totalItems;
  const sliceCenter = (selectedIndex * sliceSize) + (sliceSize / 2);
  const targetDegree = 360 - sliceCenter;

  const extraSpins = 360 * extraSpinsCount;
  const remainder = currentRotation % 360;

  return currentRotation - remainder + extraSpins + targetDegree;
}
