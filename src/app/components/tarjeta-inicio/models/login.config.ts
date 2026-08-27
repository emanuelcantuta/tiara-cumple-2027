import { environment } from '../../../../environments/environment';

export const LOGIN_CONFIG = {
  password: environment.secretPassword,
  maxAttempts: 3,
  errorTimeout: 500
} as const;
