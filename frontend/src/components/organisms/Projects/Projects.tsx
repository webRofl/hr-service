import React, { FC, useEffect, useState } from 'react';
import { useProjectsList } from '@/store/api/orvalGeneration/projects/projects';
import { Catalog, Center } from '@/components/common';
import { CustomCatalogData, GlobalENV, ICatalogCardData } from '@/types';
import { catalogCardDataMiddleware } from '@/utils';
import { ROUTES } from '@/core';
import ProjectsDetails from '../DetailsSection/DetailsSection';
import * as SC from './Projects.style';

const Projects: FC = () => {
  const { data } = useProjectsList();
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
    <SC.Container style={{ height: 'calc(100vh - 2rem)' }}>
      <ProjectsDetails />
      {cardList?.length ? (
        <Catalog linkWiuthoutId={ROUTES.PROJECTS} cardList={cardList} />
      ) : (
        <Center>No Projects</Center>
      )}
    </SC.Container>
  );
};

export default Projects;
