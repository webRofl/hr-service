import { TypeOf, object, string } from 'yup';
import { email, password } from '@/core';

export const loginSchema = object({
  email,
  password,
});

export const registerSchema = object({
  email,
  password,
  username: string().required(),
});

export type ILogin = TypeOf<typeof loginSchema>;
