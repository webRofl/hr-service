import { string } from 'yup';

enum BASE_VALIDATION_MESSAGES {
  EMAIL = 'Email is invalid',
  // eslint-disable-next-line max-len
  PASSWORD = 'Password must be more than 8 characters, less than 32 characters and have at least one number',
}

export const email = string().email(BASE_VALIDATION_MESSAGES.EMAIL).required();

export const password = string()
  .min(8, BASE_VALIDATION_MESSAGES.PASSWORD)
  .max(32, BASE_VALIDATION_MESSAGES.PASSWORD)
  .required();
