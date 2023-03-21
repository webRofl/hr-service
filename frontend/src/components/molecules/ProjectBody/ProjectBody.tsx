import React, { FC, useEffect } from 'react';
import * as SC from './ProjectBody.style';

interface ProjectBodyProps {
  content: string;
}

const ProjectBody: FC<ProjectBodyProps> = ({ content }) => {
  return (
    <SC.Grid item lg={12} md={12}>
      {content}
    </SC.Grid>
  );
};

export default ProjectBody;
