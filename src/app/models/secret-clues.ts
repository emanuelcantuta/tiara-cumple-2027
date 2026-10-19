export const SECRET_CLUES = [
  'te',
  'extraño',
  'mucho'
] as const;

export const FULL_SECRET_PASSWORD = SECRET_CLUES
.join('')
.trim()
.toLowerCase()
.replace(/\s+/g, '');