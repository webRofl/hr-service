import React from 'react';
import { TemplateWithMenu } from '@/components/templates';
import { CreateProjectForm } from '@/components/organisms';

const CreateProject = () => {
  return (
    <TemplateWithMenu>
      <CreateProjectForm />
    </TemplateWithMenu>
  );
};

export default CreateProject;
