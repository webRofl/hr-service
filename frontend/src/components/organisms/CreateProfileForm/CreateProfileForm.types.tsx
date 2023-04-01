import { Profile } from '@/store/api/orvalGeneration/models';

type RequiredFields = Required<Pick<Profile, 'name' | 'second_name'>>;

type UnusableFieldsNames =
  | 'user'
  | 'created'
  | 'email'
  | 'username'
  | 'image'
  | 'created'
  | 'user'
  | 'skills'
  | 'projects_count';

type OptionalFields = Partial<Pick<Profile, Exclude<keyof Profile, UnusableFieldsNames>>>;

export type ProfileFields = RequiredFields & OptionalFields;
