export interface ICatalogCardData {
  title: string;
  description: string;
  id: string;
  imgLink: string;
  tags: string[];
  totalVotes: number;
  votesRatio: number;
}

export interface ICatalogCardDataWithLink extends ICatalogCardData {
  link: string;
}

export type MUIButtonVariant = 'text' | 'contained' | 'outlined';
