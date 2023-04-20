import React, { FC } from 'react';
import { DivInput, Rating } from '@/components/common';
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
}) => {
  return (
    <SC.Container lg={12} md={12}>
      <SC.Title name="title" isEdit={isEdit} value={title} />
      <DivInput name="city" isEdit={isEdit} value={city ?? 'city is not set'} />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <span>projects: </span>
        <DivInput name="projects_count" isEdit={isEdit} value={projectsCount} />
      </div>
      {website && <SC.Link href={website}>{website}</SC.Link>}
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
