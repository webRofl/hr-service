import { Grid } from '@mui/material';
import React, { FC, useEffect } from 'react';
import * as SC from './ProjectHeader.style';

interface IProjectHeaderProps {
  title: string;
  expirience: number;
  salary: number | null;
  employment: string;
  description: string;
}

const ProjectHeader: FC<IProjectHeaderProps> = ({
  title,
  salary,
  expirience,
  employment,
  description,
}) => {
  return (
    <>
      <Grid item lg={8} md={8}>
        <SC.BriefInfo>
          <SC.Title>{title}</SC.Title>
          <SC.Salary>{`${salary?.toLocaleString('ru')} ₽` || 'Salary is not specified'}</SC.Salary>
          <div>At least {expirience} years experiense</div>
          <div>{employment}</div>
          <div>{description}</div>
        </SC.BriefInfo>
      </Grid>
      <Grid item lg={4} md={4}>
        <SC.GridItem>
          <span>Author: me</span>
        </SC.GridItem>
      </Grid>
    </>
  );
};

export default ProjectHeader;
