import React, { FC, useEffect, useState } from 'react';
import { useProjectsList } from '@/store/api/orvalGeneration/projects/projects';
import { Catalog } from '@/components/common';
import { ICatalogCardData } from '@/types';
import ProjectsDetails from '../DetailsSection/DetailsSection';
import * as SC from './Projects.style';

const Projects: FC = () => {
  const { data } = useProjectsList();
  const [cardList, setCardList] = useState<ICatalogCardData[] | null>(null);

  useEffect(() => {
    if (data?.data && Object.keys(data?.data).length) {
      const cardList = data?.data?.map((c) => ({
        title: c.title || '',
        description: c.description || '',
        id: c.id || '',
        imgLink: c.image || '',
        tags: c.tags || [],
        totalVotes: c.total_votes || 0,
        votesRatio: c.votes_ratio || 0,
      }));

      setCardList(cardList);
    }
  }, [data]);

  return (
    <SC.Container>
      <ProjectsDetails />
      {cardList?.length ? <Catalog cardList={cardList} /> : <span>no projects</span>}
    </SC.Container>
  );
};

export default Projects;
