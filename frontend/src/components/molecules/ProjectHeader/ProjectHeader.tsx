import { useUsersRead } from '@/store/api/orvalGeneration/users/users';
import { Grid } from '@mui/material';
import React, { FC } from 'react';
import * as SC from './ProjectHeader.style';

interface IProjectHeaderProps {
  title: string;
  expirience: number;
  salary: number | null;
  img: string;
  employment: string;
  description: string;
  author: string;
}

const ProjectHeader: FC<IProjectHeaderProps> = ({
  title,
  salary,
  img,
  expirience,
  employment,
  description,
  author,
}) => {
  const { data } = useUsersRead(author);

  return (
    <>
      <SC.RelativeGrid item lg={8} md={8}>
        <SC.BriefInfo>
          <SC.Title>{title}</SC.Title>
          <SC.Salary>
            {salary ? `${salary?.toLocaleString('ru')} ₽` : 'Salary is not specified'}
          </SC.Salary>
          <div>At least {expirience} years experiense</div>
          <div>{employment}</div>
          <div>{description}</div>
          <SC.ProjectImg src={img} alt="project logo" />
        </SC.BriefInfo>
      </SC.RelativeGrid>
      <Grid item lg={4} md={4}>
        <SC.AuthorBlock>
          <SC.Img src={`http://localhost:8000${data?.data?.image}` || ''} alt="profile logo" />
          <div>{data?.data?.name}</div>
        </SC.AuthorBlock>
      </Grid>
    </>
  );
};

export default ProjectHeader;
