import { Rating } from '@/components/common';
import { ICatalogCardDataWithLink } from '@/types';
import React, { FC } from 'react';
import * as SC from './CatalogCard.style';

const CatalogCard: FC<ICatalogCardDataWithLink> = ({
  title,
  description,
  link,
  imgLink,
  tags,
  totalVotes,
  votesRatio,
}) => {
  return (
    <SC.Container to={link}>
      <SC.Image src={imgLink} alt="project logo" />
      <SC.InfoContainer>
        <SC.Title>{title}</SC.Title>
        <SC.Description>
          {description.length > 180 ? `${description.slice(0, 180)}...` : description}
        </SC.Description>
        <Rating readOnly value={votesRatio} totalVotes={totalVotes} />
        <SC.TagsContainer>
          {tags.map((t) => (
            <SC.Tag>{t}</SC.Tag>
          ))}
        </SC.TagsContainer>
      </SC.InfoContainer>
    </SC.Container>
  );
};

export default CatalogCard;
