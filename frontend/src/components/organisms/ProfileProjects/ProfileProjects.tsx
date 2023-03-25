import { Catalog } from '@/components/common';
import { useProfileState } from '@/store';
import { ICatalogCardData, CustomCatalogData } from '@/types';
import { catalogCardDataMiddleware } from '@/utils';
import React, { useEffect, useState } from 'react';

const ProfileProjects = () => {
  const { projects } = useProfileState(({ projects }) => ({ projects }));
  const [data, setData] = useState<ICatalogCardData[] | null>(null);

  useEffect(() => {
    if (!projects) return;

    const keys: CustomCatalogData = {
      imgLink: 'image',
      votesRatio: 'votes_average',
    };

    const data = catalogCardDataMiddleware(keys, projects);
    setData(data);
  }, [projects]);

  if (!data) {
    return <div>No projects</div>;
  }

  return <Catalog cardList={data} linkWiuthoutId="/projects" />;
};

export default ProfileProjects;
