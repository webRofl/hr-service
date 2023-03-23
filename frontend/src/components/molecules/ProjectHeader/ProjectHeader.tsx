import { Button } from '@/components/atoms';
import { Rating } from '@/components/common';
import { useUsersRead } from '@/store/api/orvalGeneration/users/users';
import { Grid } from '@mui/material';
import React, { FC, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import * as SC from './ProjectHeader.style';

interface IProjectHeaderProps {
  title: string;
  expirience: number;
  salary: number | null;
  img: string;
  employment: string;
  description: string;
  author: string;
  projectRate: number;
  projectVotesCount: number;
}

const ProjectHeader: FC<IProjectHeaderProps> = ({
  title,
  salary,
  img,
  expirience,
  employment,
  description,
  author,
  projectRate,
  projectVotesCount,
}) => {
  const navigate = useNavigate();
  const { data } = useUsersRead(author);

  const profileBtnClickHandler = () => {
    navigate(`/profile/${data?.data?.user}`);
  };
  return (
    <>
      <SC.RelativeGrid item lg={8} md={8}>
        <SC.BriefInfo>
          <SC.Title>{title}</SC.Title>
          <SC.Salary>
            {salary ? `${salary?.toLocaleString('ru')} ₽` : 'Salary is not specified'}
          </SC.Salary>
          <SC.ProjectRate>
            <Rating value={projectRate} precision={0.5} readOnly tip="Keep your rating in review" />
            <SC.ProjectTotalVotes>total: {projectVotesCount}</SC.ProjectTotalVotes>
          </SC.ProjectRate>
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
          <Rating defaultValue={4} readOnly tip="Keep your rating in profile page" />
          <Button
            label="view"
            variant="outlined"
            style={SC.ProfileBtn}
            onClick={profileBtnClickHandler}
          />
        </SC.AuthorBlock>
      </Grid>
    </>
  );
};

export default ProjectHeader;
