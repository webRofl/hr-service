import { object, string, TypeOf } from 'yup';
import { email, password } from '@/core';

export const registerSchema = object({
  email,
  password,
  username: string().required(),
});

export type IRegisterSchema = TypeOf<typeof registerSchema>;
