import React, { FC } from 'react';
import { useProjectsList } from '@/store/api/orvalGeneration/projects/projects';
import { ProjectCard } from '@/components/molecules';
import ProjectsDetails from '../DetailsSection/DetailsSection';
import * as SC from './Projects.style';

const Projects: FC = () => {
  const { data } = useProjectsList();

  return (
    <SC.Container>
      <ProjectsDetails />
      <SC.ProjectCardContainer>
        {data?.data.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title || ''}
            description={p.description || ''}
            slug={p.slug || ''}
          />
        ))}
      </SC.ProjectCardContainer>
    </SC.Container>
  );
};

export default Projects;
