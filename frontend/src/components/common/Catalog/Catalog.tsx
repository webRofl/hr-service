import { CatalogCard } from '@/components/molecules';
import { ICatalogCardData } from '@/types';
import React, { FC } from 'react';
import * as SC from './Catalog.style';

interface ICatalogProps {
  cardList: ICatalogCardData[];
  linkWiuthoutId: string;
}

const Catalog: FC<ICatalogProps> = ({ cardList, linkWiuthoutId }) => {
  return (
    <SC.CardsContainer>
      {cardList.map((card) => (
        <CatalogCard key={card.id} link={`${linkWiuthoutId}/${card.id}`} {...card} />
      ))}
    </SC.CardsContainer>
  );
};

export default Catalog;
