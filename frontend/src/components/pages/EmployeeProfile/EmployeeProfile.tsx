import React from 'react';
import { TemplateWithMenu, ProfileTemplate } from '@/components/templates';

const EmployeeProfile = () => {
  return (
    <TemplateWithMenu>
      <ProfileTemplate profileType="employee" />
    </TemplateWithMenu>
  );
};

export default EmployeeProfile;
