import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Catalog, Center } from '@/components/common';
import { ROUTES } from '@/core';
import { useProjectsListList } from '@/store/api/orvalGeneration/projects/projects';
import { ICatalogCardData, CustomCatalogData } from '@/types';
import { catalogCardDataMiddleware } from '@/utils';
import * as SC from './ProfileProjects.style';

const ProfileProjects = () => {
  const navigate = useNavigate();
  const { profileId } = useParams();
  const { data } = useProjectsListList({ author: profileId });
  const [cardList, setCardList] = useState<ICatalogCardData[] | null>(null);

  useEffect(() => {
    if (!data?.data) return;

    const keys: CustomCatalogData = {
      imgLink: 'image',
      votesRatio: 'votes_average',
    };

    const projects = catalogCardDataMiddleware(keys, data?.data);
    setCardList(projects);
  }, [data?.data]);

  const handleClickFab = () => {
    navigate(ROUTES.PROJECT_CREATE);
  };

  if (!cardList || !cardList.length) {
    return (
      <>
        <Center>No projects</Center>
        <SC.Fab color="primary" aria-label="add" onClick={handleClickFab}>
          +
        </SC.Fab>
      </>
    );
  }

  return (
    <>
      <Catalog cardList={cardList} linkWithoutId="/projects" />
      <SC.Fab color="primary" aria-label="add" onClick={handleClickFab}>
        +
      </SC.Fab>
    </>
  );
};

export default ProfileProjects;
