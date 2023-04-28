import React from 'react';
import { TemplateWithMenu } from '@/components/templates';
import { ProjectPage as ProjectPageOrganism } from '@/components/organisms';

const ProjectPage = () => {
  return (
    <TemplateWithMenu>
      <ProjectPageOrganism />
    </TemplateWithMenu>
  );
};

export default ProjectPage;
