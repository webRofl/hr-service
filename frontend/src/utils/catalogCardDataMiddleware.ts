import { Project } from '@/store/api/orvalGeneration/models';
import { CustomCatalogData, ICatalogCardData } from '@/types/common.types';
import { stringUtils } from '@/utils';

export const catalogCardDataMiddleware = (
  keys: CustomCatalogData,
  values: Project[],
): ICatalogCardData[] => {
  return values.map((project) => {
    const res: ICatalogCardData = {
      title: '',
      description: '',
      id: '',
      imgLink: '',
      tags: [],
      totalVotes: 0,
      votesRatio: 0,
    };

    Object.keys(project).forEach((key) => {
      const rightKey = stringUtils.snakeCaseToCamelCase(key);
      if (project[key] && Object.prototype.hasOwnProperty.call(res, rightKey)) {
        res[rightKey] = project[key];
      }
    });

    Object.keys(keys).forEach((key) => {
      res[key] = project[keys[key]] ?? res[key];
    });

    return res;
  });
};
