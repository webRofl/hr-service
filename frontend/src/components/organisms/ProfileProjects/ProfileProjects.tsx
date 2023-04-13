import { Catalog, Center } from '@/components/common';
import { ROUTES } from '@/core';
import { useLocalStorageState } from '@/store';
import { useProjectsList } from '@/store/api/orvalGeneration/projects/projects';
import { ICatalogCardData, CustomCatalogData } from '@/types';
import { catalogCardDataMiddleware } from '@/utils';
import { Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileProjects = () => {
  // work not correct, rewrite via profileId (ROUTES.PROFILE_PROJECTS_WITH_ID)
  const navigate = useNavigate();
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const { data } = useProjectsList({ author: userId });
  const [cardList, setCardList] = useState<ICatalogCardData[] | null>(null);

  useEffect(() => {
    if (!userId) {
      navigate('/');
    }
  }, [userId]);

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
    return <Center>No projects</Center>;
  }

  return (
    <>
      <Catalog cardList={cardList} linkWithoutId="/projects" />
      <Fab color="primary" aria-label="add" onClick={handleClickFab} />
    </>
  );
};

export default ProfileProjects;
