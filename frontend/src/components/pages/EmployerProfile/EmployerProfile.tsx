import React from 'react';
import { ProfileTemplate, TemplateWithMenu } from '@/components/templates';

const EmployerProfile = () => {
  return (
    <TemplateWithMenu>
      <ProfileTemplate profileType="employer" />
    </TemplateWithMenu>
  );
};

export default EmployerProfile;
