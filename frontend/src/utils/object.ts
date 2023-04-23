/* eslint-disable indent */
import { AbstractObject } from '@/types';

const pickOrExclude = (obj: AbstractObject, keys: string[], isPick: boolean) => {
  const objCopy = { ...obj };
  const res: AbstractObject = {};

  Object.keys(objCopy).forEach((key) => {
    if (keys.includes(key)) {
      if (isPick) res[key] = objCopy[key];
    } else if (!isPick) {
      res[key] = objCopy[key];
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return typeof obj[Symbol.iterator] === 'function';
};

export const convertAllFileListToFile = (obj: FileList | File) => {
  const res = { ...obj };

  Object.entries(res).forEach(([key, value]) => {
    if (isIterable(value) && value[0] instanceof Blob) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
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
