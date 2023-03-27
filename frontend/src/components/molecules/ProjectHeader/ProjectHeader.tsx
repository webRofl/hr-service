import { Button } from '@/components/atoms';
import { DivInput, Rating } from '@/components/common';
import { useUsersRead } from '@/store/api/orvalGeneration/users/users';
import { Grid } from '@mui/material';
import React, { FC } from 'react';
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
  isEdit: boolean;
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
  isEdit,
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
          <DivInput value={title} commonStyle={SC.title} isEdit={isEdit} isForm name="title" />
          <SC.Salary>
            {salary ? (
              <DivInput
                value={`${salary.toLocaleString('ru')} ₽`}
                isEdit={isEdit}
                isForm
                name="salary"
              />
            ) : (
              'Salary is not specified'
            )}
          </SC.Salary>
          <SC.ProjectRate>
            <Rating value={projectRate} precision={0.5} readOnly tip="Keep your rating in review" />
            <SC.ProjectTotalVotes>total: {projectVotesCount}</SC.ProjectTotalVotes>
          </SC.ProjectRate>
          <div>
            At least{' '}
            <DivInput
              value={expirience.toString()}
              containerStyle={SC.experience}
              commonStyle={SC.experience}
              isEdit={isEdit}
              isForm
              name="experience"
            />{' '}
            years experience
          </div>
          <div>{employment}</div>
          <DivInput value={description} isEdit={isEdit} isForm name="description" />
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
