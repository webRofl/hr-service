import { ProjectBody, ProjectHeader } from '@/components/molecules';
import { useProjectsRead } from '@/store/api/orvalGeneration/projects/projects';
import React from 'react';
import { useParams } from 'react-router-dom';
import * as SC from './ProjectsPage.style';

const ProjectPage = () => {
  const { projectId } = useParams();
  const { data } = useProjectsRead(projectId!);

  return (
    <SC.Container container spacing={2}>
      <ProjectHeader
        title={data?.data?.title || ''}
        employment={data?.data?.employment || ''}
        salary={data?.data?.salary || null}
        img={data?.data?.image || ''}
        expirience={data?.data?.experience || 0}
        description={data?.data?.description || ''}
        author={data?.data?.author || ''}
      />
      <ProjectBody />
    </SC.Container>
  );
};

export default ProjectPage;
