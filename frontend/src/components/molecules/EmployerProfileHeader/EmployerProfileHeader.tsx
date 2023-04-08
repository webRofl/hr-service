import React, { FC } from 'react';
import { Rating } from '@/components/common';
import * as SC from './EmployerProfileHeader.style';

interface EmployerProfileHeaderProps {
  title: string;
  city: string;
  image: string;
  projectsCount: number;
  website: string | null;
  totalVotes: number;
  votesAverage: number;
}

const EmployerProfileHeader: FC<EmployerProfileHeaderProps> = ({
  title,
  city,
  image,
  projectsCount,
  website,
  totalVotes,
  votesAverage,
}) => {
  return (
    <SC.Container lg={12} md={12}>
      <SC.Title>{title}</SC.Title>
      <div>{city ?? 'city is not set'}</div>
      <div>projects: {projectsCount}</div>
      {website && <SC.Link href={website}>{website}</SC.Link>}
      <SC.Right>
        <SC.Image src={image} alt="profile logo" />
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
