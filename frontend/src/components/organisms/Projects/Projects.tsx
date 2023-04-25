import React, { FC, useEffect, useState } from 'react';
import { Catalog, Center } from '@/components/common';
import { CustomCatalogData, ICatalogCardData } from '@/types';
import { catalogCardDataMiddleware } from '@/utils';
import { ROUTES } from '@/core';
import { useProjectsListList } from '@/store/api/orvalGeneration/projects/projects';
import ProjectsDetails from '../DetailsSection/DetailsSection';
import * as SC from './Projects.style';

const Projects: FC = () => {
  const { data } = useProjectsListList();
  const [cardList, setCardList] = useState<ICatalogCardData[] | null>(null);

  useEffect(() => {
    if (!data?.data) return;

    const keys: CustomCatalogData = {
      imgLink: 'image',
      votesRatio: 'votes_average',
    };

    const cardList = catalogCardDataMiddleware(keys, data?.data);
    setCardList(cardList);
  }, [data]);

  return (
    <SC.Container>
      <ProjectsDetails />
      {cardList?.length ? (
        <Catalog linkWithoutId={ROUTES.PROJECTS} cardList={cardList} />
      ) : (
        <Center>No Projects</Center>
      )}
    </SC.Container>
  );
};

export default Projects;
