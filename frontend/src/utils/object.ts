import { AbstractObject } from '@/types';

const pickOrExclude = (obj: AbstractObject, keys: string[], isPick: boolean) => {
  const res: AbstractObject = {};

  Object.keys(obj).forEach((key) => {
    if (keys.includes(key)) {
      if (isPick) res[key] = obj[key];
    } else if (!isPick) {
      res[key] = obj[key];
    }
  });

  return res;
};

type PickOrExcludeSignature = (obj: AbstractObject, keys: string[]) => AbstractObject;

export const pick: PickOrExcludeSignature = (obj: AbstractObject, keys: string[]) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  pickOrExclude(obj, keys, true);

export const exclude: PickOrExcludeSignature = (obj: AbstractObject, keys: string[]) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  pickOrExclude(obj, keys, false);
