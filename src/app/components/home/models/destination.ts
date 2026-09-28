export enum DestinationId {
  CORTIS = 'cortis',
  PERSONAJES = 'personajes',
  PUSHEEN = 'pusheen',
  SECRETO = 'secreto'
}

export interface Destination {
  id: DestinationId;
  title: string;
  icon: string;
  isLocked: boolean;
}