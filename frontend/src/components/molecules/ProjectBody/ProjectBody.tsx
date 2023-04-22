import React, { FC } from 'react';
import { RichTextEditor } from '@/components/atoms';
import * as SC from './ProjectBody.style';

interface ProjectBodyProps {
  name: string;
  isEdit: boolean;
}

const ProjectBody: FC<ProjectBodyProps> = ({ name, isEdit }) => {
  return (
    <SC.Grid item xs={12}>
      <RichTextEditor name={name} isEdit={isEdit} />
    </SC.Grid>
  );
};

export default ProjectBody;
