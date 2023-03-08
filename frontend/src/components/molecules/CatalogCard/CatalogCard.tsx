import React, { FC } from 'react';
import * as SC from './CatalogCard.style';

interface IProjectCard {
  description: string;
  title: string;
  slug: string;
  imgLink: string;
  tags: string[];
  totalVotes: number;
  votesRatio: number;
}

const CatalogCard: FC<IProjectCard> = ({
  title,
  description,
  slug,
  imgLink,
  tags,
  totalVotes,
  votesRatio,
}) => {
  return (
    <SC.Container to={slug}>
      <SC.Image src={imgLink} alt="project logo" />
      <SC.InfoContainer>
        <SC.Title>{title}</SC.Title>
        <SC.Description>
          {description.length > 180 ? `${description.slice(0, 180)}...` : description}
        </SC.Description>
        <SC.FirstLetterUp>Total Votes: {totalVotes}</SC.FirstLetterUp>
        <SC.FirstLetterUp>Votes Ratio: {votesRatio}%</SC.FirstLetterUp>
        <SC.TagsContainer>
          {tags.map((t, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SC.Tag key={index}>{t}</SC.Tag>
          ))}
        </SC.TagsContainer>
      </SC.InfoContainer>
    </SC.Container>
  );
};

export default CatalogCard;
