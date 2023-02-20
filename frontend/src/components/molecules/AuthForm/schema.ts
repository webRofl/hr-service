import { TypeOf, object, string } from 'yup';

enum BASE_VALIDATION_MESSAGES {
  // eslint-disable-next-line max-len
  PASSWORD = 'Password must be more than 8 characters, less than 32 characters and have at least one number',
}

export const loginSchema = object({
  email: string().email('Email is invalid').required(),
  password: string()
    .min(8, BASE_VALIDATION_MESSAGES.PASSWORD)
    .max(32, BASE_VALIDATION_MESSAGES.PASSWORD)
    // .matches(/\d/, BASE_VALIDATION_MESSAGES.PASSWORD)
    .required(),
});

export type ILogin = TypeOf<typeof loginSchema>;
