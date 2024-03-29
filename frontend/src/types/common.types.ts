import { SubmitHandler } from 'react-hook-form';
import { Project } from '@/store/api/orvalGeneration/models';
import {
  usersEmployeeGetRead,
  usersEmployerGetRead,
} from '@/store/api/orvalGeneration/users/users';

export interface ICatalogCardData {
  title: string;
  description: string;
  id: string;
  imgLink: string;
  tags: string[];
  totalVotes: number;
  votesRatio: number;
  author?: string;
}

type PartialCatalogKeys = Partial<keyof ICatalogCardData>;
type PartialProjectKeys = Partial<keyof Project>;

export type CustomCatalogData = Partial<Record<PartialCatalogKeys, PartialProjectKeys>>;

export interface ICatalogCardDataWithLink extends ICatalogCardData {
  link: string;
}

export type MUIButtonVariant = 'text' | 'contained' | 'outlined';

export type AbstractObject = Record<string, unknown>;

export type ProfileReadFn = typeof usersEmployeeGetRead | typeof usersEmployerGetRead;

export type DefaultFormSubmitHandler = SubmitHandler<Record<string, string | number>>;

export type CommonColors =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
