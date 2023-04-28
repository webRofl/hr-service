import React from 'react';
import { TemplateWithMenu } from '@/components/templates';
import { ProfileProjects as ProfileProjectsOrganism } from '@/components/organisms';

const ProfileProjects = () => {
  return (
    <TemplateWithMenu>
      <ProfileProjectsOrganism />
    </TemplateWithMenu>
  );
};

export default ProfileProjects;
