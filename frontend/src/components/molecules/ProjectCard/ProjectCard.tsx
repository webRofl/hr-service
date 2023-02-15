import React, { FC } from 'react';
import * as SC from './ProjectCard.style';

interface IProjectCard {
  description: string;
  title: string;
  slug: string;
}

const ProjectCard: FC<IProjectCard> = ({ title, description, slug }) => {
  return (
    <SC.Container to={slug}>
      <SC.Title>{title}</SC.Title>
      {description}
    </SC.Container>
  );
};

export default ProjectCard;
