import React from 'react';
import { TemplateWithMenu } from '@/components/templates';
import { Candidates as CandidatesOrganism } from '@/components/organisms';

const Candidates = () => {
  return (
    <TemplateWithMenu>
      <CandidatesOrganism />
    </TemplateWithMenu>
  );
};

export default Candidates;
