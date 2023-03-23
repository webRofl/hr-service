import { Review } from '@/store/api/orvalGeneration/models';
import React, { FC } from 'react';
import * as SC from './ProjectFooter.style';

interface ProjectFooterProps {
  reviews: Review[];
}

const ProjectFooter: FC<ProjectFooterProps> = ({ reviews }) => {
  return (
    <SC.Container item container lg={12} md={12}>
      {reviews.map((r) => (
        <SC.Review item lg={12} md={12}>
          <SC.Author>{r.author?.username}</SC.Author>
          <div>{r.text}</div>
          <SC.Rating defaultValue={r.rate} readOnly />
        </SC.Review>
      ))}
    </SC.Container>
  );
};

export default ProjectFooter;
