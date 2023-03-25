import { ICatalogCardData } from '@/types';

export const catalogCardDataMiddleware = (
  keys: Record<string, Partial<keyof ICatalogCardData>>,
  values: Record<string, string | number>[],
) => {
  return values.map((v) => {
    const res: ICatalogCardData = {
      title: '',
      description: '',
      id: '',
      imgLink: '',
      tags: [],
      totalVotes: 0,
      votesRatio: 0,
    };

    Object.keys(keys).forEach((k) => {
      const newKey = keys[k];
      res[newKey] = v[k] ?? res[newKey];
    });

    return res;
  });
};
