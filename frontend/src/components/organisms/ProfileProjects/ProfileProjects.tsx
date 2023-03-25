import { Catalog } from '@/components/common';
import { useProfileState } from '@/store';
import { ICatalogCardData, CustomCatalogDataItem } from '@/types';
import { catalogCardDataMiddleware } from '@/utils';
import React, { useEffect, useState } from 'react';

const ProfileProjects = () => {
  const { projects } = useProfileState(({ projects }) => ({ projects }));
  const [data, setData] = useState<ICatalogCardData[] | null>(null);

  useEffect(() => {
    if (!projects) return;

    const keys: CustomCatalogDataItem = {
      image: 'imgLink',
      tags: 'tags',
      total_votes: 'totalVotes',
      votes_average: 'votesRatio',
      title: 'title',
      description: 'description',
      id: 'id',
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
