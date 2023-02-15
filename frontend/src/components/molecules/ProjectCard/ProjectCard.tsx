import React, { FC } from 'react';
import * as SC from './ProjectCard.style';

interface IProjectCard {
  description: string;
  title: string;
  slug: string;
  imgLink: string;
  tags: string[];
}

const ProjectCard: FC<IProjectCard> = ({ title, description, slug, imgLink, tags }) => {
  return (
    <SC.Container to={slug}>
      <SC.Image src={imgLink} alt="project logo" />
      <SC.InfoContainer>
        <SC.Title>{title}</SC.Title>
        {description}
      </SC.InfoContainer>
    </SC.Container>
  );
};

export default ProjectCard;
