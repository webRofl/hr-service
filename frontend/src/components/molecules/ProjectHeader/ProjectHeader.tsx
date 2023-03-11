import { Grid } from '@mui/material';
import React, { FC } from 'react';
import * as SC from './ProjectHeader.style';

interface IProjectHeaderProps {
  title: string;
}

const ProjectHeader: FC<IProjectHeaderProps> = ({ title }) => {
  return (
    <>
      <Grid item lg={9} md={9}>
        <SC.BriefInfo>
          <h2>{title}</h2>
          <h4>Salary is not specified</h4>
          <div>At least 3 years experiense</div>
          <div>Full-Time</div>
        </SC.BriefInfo>
      </Grid>
      <Grid item lg={3} md={3}>
        <SC.GridItem>
          <span>Author: me</span>
        </SC.GridItem>
      </Grid>
    </>
  );
};

export default ProjectHeader;
