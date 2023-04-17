import { Difference, ProfileType } from '@/core';
import {
  UsersEmployeeCreateBody,
  UsersEmployerCreateBody,
} from '@/store/api/orvalGeneration/models';

type ExtraFields = 'user' | 'username' | 'email' | 'is_active';

export type ExtractProfiles = Omit<
  Difference<UsersEmployeeCreateBody, UsersEmployerCreateBody>,
  ExtraFields
>;

type ProfileOmit<T extends UsersEmployerCreateBody | UsersEmployeeCreateBody> = Omit<
  T,
  ExtraFields
>;

export type DefaultValues<T extends ProfileType> = T extends 'employer'
  ? ProfileOmit<UsersEmployerCreateBody>
  : ProfileOmit<UsersEmployeeCreateBody>;
