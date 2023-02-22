import { TypeOf, object, string } from 'yup';
import { email, password } from '@/core';

export const loginSchema = object({
  email,
  password,
});

export type ILogin = TypeOf<typeof loginSchema>;
