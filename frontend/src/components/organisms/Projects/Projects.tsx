import React, { FC } from 'react';
import { useProjectsList } from '@/store/api/orvalGeneration/projects/projects';
import { CatalogCard } from '@/components/molecules';
import ProjectsDetails from '../DetailsSection/DetailsSection';
import * as SC from './Projects.style';

const Projects: FC = () => {
  const { data } = useProjectsList();

  return (
    <SC.Container>
      <ProjectsDetails />
      <SC.ProjectCardContainer>
        {data?.data.map((p) => (
          <CatalogCard
            key={p.id}
            title={p.title || ''}
            description={p.description || ''}
            slug={p.slug || ''}
            imgLink={p.image || ''}
            tags={p.tags || []}
            totalVotes={p.total_votes || 0}
            votesRatio={p.votes_ratio || 0}
          />
        ))}
      </SC.ProjectCardContainer>
    </SC.Container>
  );
};

export default Projects;
