import { DivInput } from '@/components/common';
import React, { FC } from 'react';
import * as SC from './ProjectBody.style';

interface ProjectBodyProps {
  content: string;
  isEdit: boolean;
}

const ProjectBody: FC<ProjectBodyProps> = ({ content, isEdit }) => {
  return (
    <SC.Grid item lg={12} md={12}>
      <DivInput value={content} isEdit={isEdit} isForm name="fully_description" />
    </SC.Grid>
  );
};

export default ProjectBody;
