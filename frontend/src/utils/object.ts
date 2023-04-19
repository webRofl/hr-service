/* eslint-disable indent */
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

export const isIterable = (obj: unknown) => {
  if (obj == null) {
    return false;
  }

  return obj[Symbol.iterator];
};

export const convertAllFileListToFile = (obj: AbstractObject) => {
  const res = { ...obj };

  Object.entries(res).forEach(([key, value]) => {
    if (isIterable(value) && value[0] instanceof Blob) {
      res[key] = value.item(0);
    }
  });

  return res;
};

export const blobUrlToFile = async (blobUrl: string) => {
  const blob = await (await fetch(blobUrl)).blob();
  const file = new File([blob], `${blob.name}.${blob.type.split(/\//)[1]}`, { type: blob.type });
  return file;
};
