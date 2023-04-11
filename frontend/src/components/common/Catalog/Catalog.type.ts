import { ProfileResponse } from '@/store/api/orvalGeneration/models';
import { ICatalogCardData } from '@/types';

export interface ICatalogProps {
  cardList: ICatalogCardData[];
  linkWithoutId: string;
}

export interface IPopupCatalogProps {
  cardList: ProfileResponse[];
}
