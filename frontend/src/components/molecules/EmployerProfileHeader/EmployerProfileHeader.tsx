import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DivInput, Rating } from '@/components/common';
import { Button } from '@/components/atoms';
import * as SC from './EmployerProfileHeader.style';
import ImagePickerWithCrop from '../ImagePickerWithCrop/ImagePickerWithCrop';

interface EmployerProfileHeaderProps {
  title: string;
  city: string;
  image: string;
  projectsCount: number;
  website: string | null;
  totalVotes: number;
  votesAverage: number;
  isEdit: boolean;
  userId: string;
}

const EmployerProfileHeader: FC<EmployerProfileHeaderProps> = ({
  title,
  city,
  image,
  projectsCount,
  website,
  totalVotes,
  votesAverage,
  isEdit,
  userId,
}) => {
  const navigate = useNavigate();

  const handleClickViewProjects = () => {
    navigate(`/profile/${userId}/projects`);
  };

  return (
    <SC.Container xs={12}>
      <SC.Title name="title" isEdit={isEdit} value={title} />
      <DivInput name="city" isEdit={isEdit} value={city ?? 'city is not set'} />
      <SC.ProjectsCount>
        <span>projects: </span>
        <DivInput name="projects_count" isEdit={isEdit} value={projectsCount} />
      </SC.ProjectsCount>
      {website ? <SC.Link href={website}>{website}</SC.Link> : ''}
      <SC.ViewProjects
        label="View Projects"
        variant="contained"
        color="info"
        onClick={handleClickViewProjects}
      />
      <SC.Right>
        {isEdit ? (
          <ImagePickerWithCrop name="image" aspect={[16, 9]} />
        ) : (
          <SC.Image src={image} alt="profile logo" />
        )}
        <SC.RatingBlock>
          <Rating
            tip="You can point profile bottom"
            value={votesAverage}
            readOnly
            precision={0.5}
          />
          <SC.TotalVotes>{totalVotes}</SC.TotalVotes>
        </SC.RatingBlock>
      </SC.Right>
    </SC.Container>
  );
};

export default EmployerProfileHeader;
