import { Project } from '@/store/api/orvalGeneration/models';
import { AbstractObject, CustomCatalogData, ICatalogCardData } from '@/types/common.types';
import { stringUtils } from '@/utils';

export const catalogCardDataMiddleware = (
  keys: Required<CustomCatalogData>,
  values: Project[],
): ICatalogCardData[] => {
  return values.map((project) => {
    const res: ICatalogCardData & AbstractObject = {
      title: '',
      description: '',
      id: '',
      imgLink: '',
      tags: [],
      totalVotes: 0,
      votesRatio: 0,
    };

    Object.typedKeys(project).forEach((key) => {
      const rightKey = stringUtils.snakeCaseToCamelCase(key);
      if (project[key] && Object.prototype.hasOwnProperty.call(res, rightKey)) {
        res[rightKey] = project[key];
      }
    });

    Object.typedKeys(keys).forEach((key) => {
      // @ts-expect-error wrong types
      res[key] = project[keys[key]] ?? res[key];
    });

    return res;
  });
};
