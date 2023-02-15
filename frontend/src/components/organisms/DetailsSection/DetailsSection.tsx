import React, { FC } from 'react';
import { getFormatDate } from '@/utils';
import * as SC from './DetailsSection.style';

const ProjectsDetails: FC = () => {
  return (
    <SC.Container>
      <SC.Header>
        <SC.HeaderLabel>Todays Statistics</SC.HeaderLabel>
        <SC.HeaderDate>{getFormatDate()}</SC.HeaderDate>
      </SC.Header>
      <SC.LogInCover>Log in to see more</SC.LogInCover>
    </SC.Container>
  );
};

export default ProjectsDetails;
